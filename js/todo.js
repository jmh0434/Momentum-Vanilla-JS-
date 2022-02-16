// to-do를 입력하고 엔터를 누르면 화면에 표시가 되고 localStorage에 저장
// 옆에 X 표를 누르면 화면에서도 지워지고 localSotrage에서도 삭제가 되는 기능

const toDoForm = document.getElementById("todo-form"); // todo를 입력하는 폼
const toDoInput = toDoForm.querySelector("input"); // = document.queryselector("#todo-form input")
const toDOList = document.getElementById("todo-list"); // todo를 입력하고 나서 화면에 리스트로 출력

const TODOS_KEY = "todos"; // todo를 localStorage 상에 저장할 때 키 이름

let toDos = []; // todo를 입력하면 이 배열에 저장된다

// todo를 저장하는 함수
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // todo를 localStorage에 저장할 때 array로 저장하고 싶은데 그게 안돼서 string으로 저장함
}

// todo를 삭제하는 함수
function deleteToDo(event) {
    const li = event.target.parentElement; // X를 누르면 target으로 인식되는데 target의 부모요소는 화면에 표시되는 li이다.
    li.remove(); // li를 삭제하면 화면에서 안 보임
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id)); // 삭제된 todo의 id가 li의 id와 같지 않은 것은 걸러냄 (삭제 명령을 한 todo는 localStorage에서도 걸러냄)
    saveToDos(); // todo 저장. 저장하지 않으면 새로고침 시에 다시 초기화된다
}

// todo를 출력하는 함수
function paintToDo(newTodo) {
    const li = document.createElement("li"); // html에 list 형식으로 출력하기 위해 요소 추가
    li.id = newTodo.id; // li의 id는 새로 추가하고자 하는 todo의 id와 같다

    const span = document.createElement("span"); // span 속성 부여
    span.innerText = newTodo.text; // 표시할 텍스트는 새로 추가하고자 하는 todo의 텍스트

    const button = document.createElement("button"); // button 추가
    button.innerText = "❌" // x 버튼
    button.addEventListener("click", deleteToDo); // x 버튼을 '클릭'하면 해당 todo는 삭제

    // 등록을 하고 나면 새로운 걸 출력할 수 있게
    li.appendChild(span);
    li.appendChild(button);
    
    toDOList.appendChild(li);
}

// todo를 등록하는 함수
function handleToDoSubmit(event){
    event.preventDefault(); // 새로고침 시 초기화되는 것을 방지하기 위해 기본 동작 금지
    const newTodo = toDoInput.value; // 새로 추가하는 todo는 입력한 값
    toDoInput.value = ""; // 입력을 하고 나면 입력한 값은 계속 표시하고 있지 않고 지움
    const newTodoObj = { // html에 저장하기 위한 변수
        text : newTodo, // 텍스트는 새로 추가하는 todo
        id : Date.now(), // id는 시간함수를 써서 같은 텍스트라도 id를 통해 구별
    };

    toDos.push(newTodoObj); // toDos 배열에 위와 같은 형식으로 push
    paintToDo(newTodoObj); // newTodoObj를 인자로 넘겨서 paintToDo 함수 실행
    saveToDos(newTodo); // 입력받은 todo는 날아가지 않도록 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit); // form을 등록하면 handleToDoSubmit 함수를 실행

const savedToDos = localStorage.getItem(TODOS_KEY); // 저장된 todo는 localStorage의 key값을 통해 get

// 미리 저장된 todo가 있다면 새로고침할 떄 미리 html에 출력해주는 함수
// 이걸 안해주면 새로고침할 때 localStorage에는 저장되어 있지만 화면에는 출력이 안됨
if (savedToDos !== null) { // 만약 저장된 todo가 null이 아니라면, 즉 저장된 todo가 있다면
    const parsedToDos = JSON.parse(savedToDos); // string으로 저장된 array를 parse를 통해 array 형식으로 꺼냄
    toDos = parsedToDos; // toDos array에 저장
    toDos.forEach(paintToDo); // array의 각 요소를 돌면서(순회하면서) todo 출력
}
