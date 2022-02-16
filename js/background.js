const images = ["0.jpg", "1.jpg", "2.jpg"]; // img 파일 배열로 만들기

const chosenImage = images[Math.floor(Math.random() * images.length)]; // 랜덤으로 이미지 출력

const bgImage = document.createElement("img"); // <img> 요소를 html에 만들어줆
bgImage.src = `img/${chosenImage}`; // img 폴더 밑에 있는 사진 파일들이 경로임
document.body.appendChild(bgImage); // body 밑에 element 만들고 출력하게 함