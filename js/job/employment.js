

/* tab  button 활성화 script */
let tabLi = document.querySelectorAll(".tab_li>a"),
    section = document.querySelectorAll(".section"),
    onContetnt = ''; // 클릭하여 나타나는 section을 담을 그릇



// tabClick();

// function tabClick() {
//     for(let i = 0; i<tabLi.length; i++) {
//         tabLi[i].addEventListener("click", function (e) {
//             e.preventDefault(); // 링크기능을 일단 막아둠.

//             // 모든 탭 버튼과 섹션에서 'on' 클래스를 제거
//             for(let j=0; j<tabLi.length; j++) {
//                 tabLi[j].classList.remove("on");
//                 section[j].classList.remove("on"); // display:none을 'on' 클래스로 처리
//             }
//             tabLi[i].classList.add("on");// 클릭한 탭에 'on' 클래스를 추가
//             // 해당하는 섹션에 'on' 클래스를 추가하여 display:block
//             let onContetnt = this.getAttribute("href").substring(1); // ".all", ".job" 등
//             //console.log(onContetnt)
//             document.querySelector(`.${onContetnt}`).classList.add("on");
//         });
//     }
// }

//pading script
let pagingNum = document.querySelectorAll(".paging_num");

paging(); // 페이지 번호 클릭
function paging(){    
    for(let i=0; i<pagingNum.length; i++){
        pagingNum[i].addEventListener("click",function(){
          for(let j=0; j<pagingNum.length; j++){
            pagingNum[j].classList.remove("on")
          }
          pagingNum[i].classList.add("on");
        })
    }
}




let star = document.querySelectorAll(".star");

saveStar();
function saveStar(){
    for(let i=0; i<star.length; i++){
        star[i].addEventListener("click",function(){          
            star[i].classList.toggle("on")
        })
    }
}