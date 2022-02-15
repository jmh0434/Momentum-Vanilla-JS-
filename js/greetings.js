const loginForm = document.querySelector("#login-form"); // login-form id를 찾아서 요소를 변수로 삼음
const loginInput = loginForm.querySelector("#login-form input"); // == document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting"); // greeting id를 찾아서 요소를 변수로 삼음

const HIDDEN_CLASSNAME = "hidden"; // 2번 이상 나오는 문자열은 오타 방지를 위해 미리 변수로 선언
const USERNAME_KEY = "username"; // 이하동문

function onLoginSubmit(event) { // 유저 등록 함수
    event.preventDefault(); // 새로고침하게 될 경우 초기화되기 때문에 방지하기 위해 디폴트 이벤트를 막음
    loginForm.classList.add(HIDDEN_CLASSNAME); // html의 login-form 요소의 히든을 활성화해서 안 보이게 함 
    const username = loginInput.value; // 유저가 등록한 값(ID)을 저장
    localStorage.setItem(USERNAME_KEY, username); // "username" 키에 사용자가 지정한 이름을 value로 해서 localStorage에 저장
    paintGreetings(username); // username을 인자로 받아서 paintGreetings 함수 호출
}

function paintGreetings(username) { // 인사 화면 출력
    greeting.innerText = `Hello ${username}`; // ₩$ {} ₩ 방식을 사용하면 자동적으로 변수 앞에 띄어쓰기 적용 
    greeting.classList.remove(HIDDEN_CLASSNAME); // hidden을 없애서 h1 형식으로 출력하게 만듦
}

const savedUsername = localStorage.getItem(USERNAME_KEY); // localStorage에 key와 value가 있는지 확인

if (savedUsername === null) { // 키가 없다면, 즉 로그인 정보가 없다면
    loginForm.classList.remove(HIDDEN_CLASSNAME); // 로그인 폼의 히든을 지워서 보여주고
    loginForm.addEventListener("submit", onLoginSubmit); // 등록 이벤트를 발생
} else { // 로그인 정보가 있다면
  paintGreetings(savedUsername); // paintGreetings 함수를 호출
}