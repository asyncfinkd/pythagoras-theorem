const aButton = document.getElementById("a:button");
const bButton = document.getElementById("b:button");
const aInput = document.getElementById("a:input");
const bInput = document.getElementById("b:input");
const answerA = document.getElementById("answer:a");
const answerB = document.getElementById("answer:b");
const c2 = document.getElementById("c2");
const c = document.getElementById("c");
const calculate = document.getElementById("calculate:button");
const Buttons = [aButton, bButton, calculate];
const Inputs = [aInput.value, bInput.value];
const message = ["Please enter a inputs", "this is dummie number"];
const __i = 0;
const __f = 1;
const __s = 2;

function stringToNumber(input, arg) {
  return +input[arg];
}

Buttons[__i].addEventListener("click", () => {
  if (typeof Buttons[__i] == "object" && typeof Buttons[__i] != "undefined") {
    if (typeof Inputs[__i] != "undefined" && typeof Inputs[__i] == "string") {
      if (aInput.classList == "hide") {
        Buttons[__i].classList.add("hide");
      }

      if (Buttons[__i].classList != "hide") {
        bInput.classList.add("hide");
        Buttons[__f].classList.remove("hide");
        aInput.classList.remove("hide");
        answerB.innerHTML = bInput.value;
      }
    }
  }
});

Buttons[__f].addEventListener("click", () => {
  if (typeof Buttons[__f] == "object" && typeof Buttons[__f] != "undefined") {
    if (typeof Inputs[__f] != "undefined" && typeof Inputs[__f] == "string") {
      aInput.classList.add("hide");
      Buttons[__f].classList.add("hide");
      bInput.classList.remove("hide");
      answerA.innerHTML = aInput.value;
    }
  }
});

Buttons[__s].addEventListener("click", () => {
  let Inputs = [aInput.value, bInput.value];
  let message = ["Please enter a inputs", "this is dummie number"];
  let __pyt = [];
  if (!Inputs[__i] || !Inputs[__f]) {
    if (
      typeof Inputs[__i] != "undefined" &&
      typeof Inputs[__f] != "undefined"
    ) {
      alert(message[__i]);
    }
  } else {
    if (Inputs[__i] < __i || Inputs[__f] < __i) {
      if (typeof message[__f] != "string" || message[__i] != "string") {
        while (__i < __f) {
          for (let __k = __i; __k <= __f; __k++) {
            if ((__k == __f % __s) == __i) {
              alert(message[__f]);
            }
          }
          __i++;
        }
      }
    } else {
      __pyt.push(stringToNumber(Inputs, __i), stringToNumber(Inputs, __f));

      let __res = Math.pow(__pyt[__i], __s);
      let __secRes = Math.pow(__pyt[__f], __s);

      answerA.innerHTML = Inputs[__i];
      answerB.innerHTML = Inputs[__f];

      c2.innerHTML = `c<sup>${__s}</sup> = ${
        __pyt[__i]
      }<sup>${__s}</sup>(${__res}) + ${
        __pyt[__f]
      }<sup>${__s}</sup>(${__secRes}) = √${__res + __secRes}`;

      c.innerHTML = `c = ${Math.sqrt(__res + __secRes)}`;
    }
  }
});
