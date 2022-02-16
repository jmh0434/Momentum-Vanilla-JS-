const clock = document.querySelector("h2#clock"); // h2로 설정된 clock 요소 찾기

function getClock() { // 시계 띄어주는 함수
    const date = new Date(); // Date 객체는 현재 날짜를 알려주는 객체임
    const hours = String(date.getHours()).padStart(2, "0"); // padStart(문자열의 길이, "길이를 만족시키지 못할 때 앞에 붙일 문자")
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText= `${hours}:${minutes}:${seconds}`;
}

getClock(); // 새로고침할 때 1초 기다렸다가 띄어주므로 그걸 방지하기 위해 처음부터 바로 함수 호출
setInterval(getClock, 1000); // setInterval(호출할 함수, 호출 간격(ms)) 1000 ms = 1초

