import { renderHeader } from "./module/header.js";
import { renderFooter } from "./module/footer.js";
renderHeader();
renderFooter();

const header = document.querySelector("body > header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

// index 페이지 Swiper

// about 페이지 Swiper

//버튼으로 이동하기
/*
다음 버튼을 클릭하면 할일
  변수명 nextIdx 다음 슬라이드 번호 생성
  (마지막이면 첫번째 슬라이드로 이동)
  moveSlide(nextIdx) 실행

이전버튼을 클릭하면 할일
  변수명 nextIdx 다음 슬라이드 번호 생성
  (첫번째 슬라이드면 마지막 슬라이드로 이동)
  moveSlide(nextIdx) 실행  

nextBtn.addEventListener("click", () => {
  let nextIdx = (currentIdx + 1) % slideCount;
  moveSlide(nextIdx);
});
prevBtn.addEventListener("click", () => {
  let nextIdx = (currentIdx - 1 + slideCount) % slideCount;
  moveSlide(nextIdx);
});
*/
