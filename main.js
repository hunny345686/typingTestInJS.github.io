const setofwords = [
  "React is a Java Script library and so we ll assume you have a basic understanding of the JavaScript language",
  "It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript",
  "React DOM compares the element and its children to the previous one, and only applies the DOM updates necessary to bring the DOM to the desired state",
  "Conceptually, components are like JavaScript functions. They accept arbitrary inputs called props and return React elements describing what should appear on the screen.",
];

const msg = document.getElementById("msg");
const typewords = document.getElementById("mywords");
const btn = document.getElementById("btn");

let startTime, endTime;

const playgame = () => {
  let randomno = Math.floor(Math.random() * setofwords.length);
  msg.innerText = setofwords[randomno];
  let date = new Date();
  startTime = date.getTime();
  btn.innerText = "Done";
};

const endgame = () => {
  let date = new Date();
  endTime = date.getTime();
  let totletime = (endTime - startTime) / 1000;
  let totlestr = typewords.value;
  let wordcount = wordCounter(totlestr);

  let speed = Math.round((wordcount / totletime) * 60);

  let finalmsg = `You Typed Total at ${speed} words per min `;
  finalmsg += comparewords(msg.innerText, totlestr);
  msg.innerText = finalmsg;
};

const comparewords = (str1, str2) => {
  let words1 = str1.split(" ");
  let words2 = str2.split(" ");
  let cnt = 0;
  words1.forEach(function (item, index) {
    if (item == words2[index]) {
      cnt++;
    }
  });
  let errorword = words1.length - cnt;
  return `${cnt} Words Are correct out of ${words1.length} Total no of Errors are ${errorword}`;
};

const wordCounter = (str) => {
  let responce = str.split(" ").length;
  return responce;
};

btn.addEventListener("click", function () {
  if (this.innerText == "Start") {
    typewords.disabled = false;
    playgame();
  } else if (this.innerText == "Done") {
    typewords.disabled = true;
    btn.innerText = "Start";
    endgame();
  }
});
