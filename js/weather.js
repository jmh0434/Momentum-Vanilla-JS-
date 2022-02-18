const API_KEY = "0a695f2889d04553a30324ab52000eb4"; // API key
// 위치정보를 성공적으로 받아왔을 때
function onGeoOk(position) { // position은 geolocation 함수를 통해 불러온 input parameter
    const lat = position.coords.latitude; // 위도
    const lon = position.coords.longitude; // 경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url) // url을 타고 들어가서 인출을 하겠다
    .then((response) => response.json()) // 그러고 나서 받는 값은 JSON 형식으로 받고
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError); // 위치정보를 알려주는 Javascript 내장 함수 파라미터로 위치 정보를 성공적으로 받아올 때와 실패했을 때 실행할 함수를 받는다
// user의 위치를 input parameter의 형식으로 반환해줌
