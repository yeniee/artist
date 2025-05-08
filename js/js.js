

let star = document.querySelectorAll(".store_infor i")

SaveStar();
function SaveStar(){
    for(let i=0; i<star.length; i++){
        star[i].addEventListener("click",function(){
            star[i].classList.toggle("on");
        })
    }
}


// slide script

let slideUl = document.querySelector(".slide_ul");
let slideLi = document.querySelectorAll(".slide_li");
let Dots = document.querySelectorAll(".dot_li");
let SlideImgWidth = slideLi[0].clientWidth; //요소의 값을 가져옴. 단, margin.border 불포함 padding은 포함이 됨.
//console.log(SlideImgWidth);

slideClick();
function slideClick(){
    Dots.forEach((dot,index)=>{ // dot
        //console.log(dot)
        dot.addEventListener("click",function(){ // dot클릭시 발생하는 이벤트
            Dots.forEach(button => button.classList.remove("on")) // 일단 클래스 on을 제거.
            //console.log(index);
            slideUl.style.transform = `translate(-${SlideImgWidth*index}px)`// slide li 하나의 크기 * index만큼 이동시키기
            dot.classList.add("on"); // 클릭한 dot는 class on추가
        })
    })
}