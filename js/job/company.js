// 관심기업 클릭시 toggle되는 script
Favorites()
function Favorites(){
    let favorites = document.querySelector(".favorites"),
    interest = document.querySelector(".interest")
    //console.log(favorites)
    favorites.addEventListener("click",function(){
       interest.classList.toggle("on")
    })
}


// tab

let companyLi = document.querySelectorAll(".company_li a"),
    tabBox = document.querySelectorAll(".tab_box"),
    content = "";

tabClick();
function tabClick() {
    for (let i = 0; i < companyLi.length; i++) {
        companyLi[i].addEventListener("click", function (e) {
            e.preventDefault(); // 링크 본연의 기능을 막음

            // 모든 탭과 콘텐츠에서 active 클래스 제거
            for(let j=0; j<companyLi.length;j++) {
                companyLi[j].classList.remove("on"); // tab에 있는 클래스
                tabBox[j].classList.remove("active"); // 보여지는 tabbox
            }

            // 클릭된 탭에 active 클래스 추가
            companyLi[i].classList.add("on");

            // 클릭된 탭에 해당하는 콘텐츠만 표시
            let contentId = companyLi[i].getAttribute("href").substring(1); // #id에서 id를 추출
            let contentBox = document.getElementById(contentId);
            if (contentBox) {
                contentBox.classList.add("active");
            }
        });
    }
}


let star = document.querySelectorAll(".star");

clickStar()
function clickStar(){
    for(let i=0; i<star.length; i++){
        star[i].addEventListener("click",function(){
            star[i].classList.toggle("click")
        })
    }
}
let ingBtn = document.querySelectorAll(".ing_btn");
let endBtn = document.querySelectorAll(".end_btn");

ingBtnClick();
function ingBtnClick(){
    for(let i=0; i<ingBtn.length; i++){
        ingBtn[i].addEventListener("click",function(){
            for(let j=0; j<ingBtn.length; j++){
                ingBtn[j].classList.remove("click")
            }
            ingBtn[i].classList.add("click");
        })
    }
}

endBtnClick()
function endBtnClick(){
    for(let i=0; i<endBtn.length; i++){
        endBtn[i].addEventListener("click",function(){
            for(let j=0; j<endBtn.length; j++){
                endBtn[j].classList.remove("click")
            }
            endBtn[i].classList.add("click");
        })
    }
}