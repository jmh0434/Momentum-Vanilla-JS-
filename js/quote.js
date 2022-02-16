const quotes = [
   {
     quote: "The way to get started is to quit talking and begin doing.",
     author: "Walt Disney",
   },
   {
     quote: "Life is what happens when you're busy making other plans.",
     author: "John Lennon",
   },
   {
     quote:
       "The world is a book and those who do not travel read only one page.",
     author: "Saint Augustine",
   },
   {
     quote: "Life is either a daring adventure or nothing at all.",
     author: "Helen Keller",
   },
   {
     quote: "To Travel is to Live",
     author: "Hans Christian Andersen",
   },
   {
     quote: "Only a life lived for others is a life worthwhile.",
     author: "Albert Einstein",
   },
   {
     quote: "You only live once, but if you do it right, once is enough.",
     author: "Mae West",
   },
   {
     quote: "Never go on trips with anyone you do ntot love.",
     author: "Hemmingway",
   },
   {
     quote: "We wander for distraction, but we travel for fulfilment.",
     author: "Hilaire Belloc",
   },
   {
     quote: "Travel expands the mind and fills the gap.",
     author: "Sheda Savage",
   },
 ]; // 명언이 담긴 배열 선언
 
const quote = document.querySelector("#quote span:first-child"); // html 자리 찾아주기
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; // 랜덤으로 명언 출력. floor 함수를 써서 0부터 배열 길이 - 1 만큼 횟수 만들기

quote.innerText = todaysQuote.quote; 
author.innerText = todaysQuote.author;

