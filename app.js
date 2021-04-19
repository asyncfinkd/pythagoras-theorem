const button = document.getElementById("btn");
const a = document.getElementById("a");
const b = document.getElementById("b");
const pythagora = document.getElementById("pythagora");
const sqrt = document.getElementById("sqrt");
const hide = document.querySelector(".hide");
const pythagoraSqrt = document.getElementById("pythagora-sqrt");

function Push(stateArray, state, childState) {
  const errorAlert = "Your typeof is not number";
  if (typeof state == "number") {
    stateArray.push(state, childState);
  } else {
    alert(errorAlert);
    throw new Error(errorAlert);
  }
}

button.addEventListener("click", () => {
  const item = [];
  if (!a.value || !b.value) {
    alert("enter a number");
  } else {
    const aQuadrat = Math.pow(a.value, 2);
    const bQuadrat = Math.pow(b.value, 2);
    if (aQuadrat >= 0 && bQuadrat >= 0) {
      Push(item, aQuadrat, bQuadrat);
    }
    if (typeof item[0] == "number" && typeof item[1] == "number") {
      if (item[0] + item[1] != item.length) {
        const answer = item[0] + item[1];
        item.push(answer);
        pythagora.innerHTML = "c: " + " " + item[2];
        hide.classList.remove("hide");
        sqrt.addEventListener("click", () => {
          if (item[0] + item[1] == 2) {
            const msg = item[0] + item[1];
            console.log("Point: " + msg + " " + "Think more");
          } else {
            const sqrted = Math.round(Math.sqrt(item[2]));
            pythagoraSqrt.innerHTML = "sqrt:" + " " + sqrted;
          }
        });
      } else {
        if (item[0] + item[1] == 2) {
          const msg = item[0] + item[1];
          console.log("Point: " + msg + " " + "Think more");
        }
        const alertMessage = "this is dummie task";
        console.log(alertMessage);
        throw new Error(alertMessage);
      }
    }
  }
});
