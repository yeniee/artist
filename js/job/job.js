/*직무별 클릭시 이벤트 */

let jobSearch = document.querySelector(".job_search"), // 직무별 검색하기 버튼
    jobPopup = document.querySelector(".job_popup"), // 팝업 박스 
    closeBtn = document.querySelector(".close_btn");// 팝업 후 닫는 버튼

jobPopUp();
function jobPopUp(){
    jobSearch.addEventListener("click",function(){
        jobPopup.classList.add("on")
    })
}

closePopup();
function closePopup(){
    closeBtn.addEventListener("click",function(){
        jobPopup.classList.remove("on");        
        reset(); // 전부 리셋     
    })    
}

/*직무별 클릭시 이벤트*/
let typeLiSpan = document.querySelectorAll(".type_li>span"),
    typeListUl = document.querySelectorAll(".type_list_ul");

clickType()
function clickType(){
    for(let i=0; i<typeLiSpan.length; i++){
        typeLiSpan[i].addEventListener("click",function(){
            for(let j=0; j<typeLiSpan.length; j++){
                typeLiSpan[j].classList.remove("click");
                typeListUl[j].classList.remove("active");
            }
            typeLiSpan[i].classList.add("click");
            typeListUl[i].classList.add("active");
        })
    }
}


//클릭한 직무 리스트 변수
let clickListLi = document.querySelectorAll(".type_list_li"),
    clickListSection = document.querySelector(".click_list_section"),
    popupSection = document.querySelector(".popup_section"),
    count = 0, //선택된 직무 카운트용
    listBox = "", // 선택한 리스트 
    textBox = "",
    textArray = []; // 선택된 리스트를 담는 배열

clickListList()
function clickListList(){
    for(let i=0; i<clickListLi.length; i++){
        clickListLi[i].addEventListener("click",function(){           
           textBox = clickListLi[i].textContent; //다시 변수에 담음.          
           if(textArray.length==3){ // 최대 3개까지 담을 수 있게 제한.            
            alert("최대 3개까지 선택이 가능합니다.");return;//중복처리          
           }
           else if(textArray.includes(textBox)){                
                alert("이미 선택된 직무입니다."); return;               
           }
           else{    // 중복이 되지 않으면서 최대 3개 이내 선택시 
                textArray.push(textBox); //배열에 담아준다.                  
                count +=1 ; //선택된 직무가 하나씩 올라감.                 
                textArray.forEach((Box,i)=>{                   
                    listBox = `<span class="c_list"> ${Box}</span> <button class="c_reset_btn" onclick="deleteBtn(${i})">x</button>`;                    
                })
                clickListSection.classList.add("active"); // 클래스 추가
                popupSection.classList.add("active"); // 클래스 추가
                document.querySelector(".click_list_count").innerHTML = count; // 카운트 뿌려주기
                document.querySelector(".click_list").innerHTML += listBox; // html에 뿌려준다.                
            }//else end                   
        })//addEvent end
    }//for end
}//funtcion end


// 클릭한 직무 삭제하기
function deleteBtn(i){       
    textArray.splice(i,1)// 선택된 직무 삭제    
    count-=1 // 선택된 직무 감소.   
    document.querySelector(".click_list_count").innerHTML = count; //count 다시 랜더링
    renderList(); // 랜더링 함수 실행    
    if(count==0){ // count가 0이면 active 클래스 제거
        clickListSection.classList.remove("active");
        popupSection.classList.remove("active");
    }
}


//삭제 후 다시 랜더링하는 함수
function renderList(){        
    document.querySelector(".click_list").innerHTML = "";
    textArray.forEach((reBox,i)=>{                   
        listBox = `<span class="c_list"> ${reBox}</span> <button class="c_reset_btn" onclick="deleteBtn(${i})">x</button>`;                    
        document.querySelector(".click_list").innerHTML += listBox;
    })   
}


//초기화 버튼 클릭시 
resetBtn();
function resetBtn(){
    let resetBtn = document.querySelector(".reset_btn");
    resetBtn.addEventListener("click",reset);    
}

function reset(){ // 초기화 버튼 클릭 시 함수실행
    document.querySelector(".click_list_count").innerHTML = 0; // html 숫자 0으로 만듬
            document.querySelector(".click_list").innerHTML = ""; // html checkList 공백으로 만듬
            textBox = "";      // js textBox 공백으로 만듬
            textArray.length=0; // textArray 0 으로 만듬
            count = 0;      // 다시 카운트를 하기 위해 0으로 만듬
            clickListSection.classList.remove("active");
            popupSection.classList.remove("active");
}


/*선택한 공고 보기 btn*/

let listSsearchBtn = document.querySelector(".list_search_btn");

AllListbtn();
function AllListbtn(){
    listSsearchBtn.addEventListener("click",function(){
       if(count==0){
        alert("최소 1개는 선택하여 주세요.")
       }
    })
}