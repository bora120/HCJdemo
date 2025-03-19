document.addEventListener('DOMContentLoaded', function () {
  // "time" 요소가 존재할 경우에만 현재 시간 표시
  const timeEl = document.getElementById('time')
  if (timeEl) {
    timeEl.innerHTML = new Date().toLocaleString()
  }
})

// 배경색 변경 함수
function Pink() {
  document.body.style.backgroundColor = 'Pink'
}
function Blue() {
  document.body.style.backgroundColor = 'Blue'
}
function Yellow() {
  document.body.style.backgroundColor = 'Yellow'
}
function reset() {
  document.body.style.backgroundColor = 'linen'
}

// HTML, CSS, JavaScript 설명 표시 함수
function showhtml() {
  const figEl = document.getElementById('fig')
  const descEl = document.getElementById('desc')
  if (figEl && descEl) {
    figEl.src = 'image/HTML5.png'
    descEl.innerHTML =
      '<b>HTML</b>은 구조적 웹문서를 작성하는 데 사용하는 마크업 언어이다.'
  }
}

function showcss() {
  const figEl = document.getElementById('fig')
  const descEl = document.getElementById('desc')
  if (figEl && descEl) {
    figEl.src = 'image/CSS.png'
    descEl.innerHTML =
      '<b>CSS</b>는 HTML 문서의 스타일을 지정하기 위한 언어이다.'
  }
}

function showjs() {
  const figEl = document.getElementById('fig')
  const descEl = document.getElementById('desc')
  if (figEl && descEl) {
    figEl.src = 'image/Java.png'
    descEl.innerHTML =
      '<b>JavaScript</b>는 웹을 위한 프로그래밍 언어이며 웹 문서에서 동작을 실행할 수 있게 한다.'
  }
}

function hide() {
  const figEl = document.getElementById('fig')
  const descEl = document.getElementById('desc')
  if (figEl && descEl) {
    figEl.src = ''
    descEl.innerHTML = ''
  }
}
