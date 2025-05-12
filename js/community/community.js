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


let tabLiA = document.querySelectorAll(".tab_li>a"),
    tabBox = document.querySelectorAll(".tab_box"),
    content = '';

console.log(tabLiA)
console.log(tabBox)

tabClick();
function tabClick(){
    for(let i=0; i<tabLiA.length; i++){
        tabLiA[i].addEventListener("click",function(e){
            e.preventDefault();
            for(let j=0; j<tabLiA.length; j++){
                tabLiA[j].classList.remove("on");
                tabBox[j].classList.remove("on");
            }

            tabLiA[i].classList.add("on");
            tabLiA[i].getAttribute("href").substring(1);
            tabBox[i].classList.add("on")
            
            
            
            //console.log(content)


        })
    }

}