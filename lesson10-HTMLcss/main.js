const changer = () => {
  let content = document.querySelector(".js-subButton").innerText;

  if (content === "subscribe") {
    document.querySelector(".js-subButton").innerHTML = "subscribed";
    document.getElementById("subBtn").style.backgroundColor = "green";
  } else {
    document.querySelector(".js-subButton").innerHTML = "subscribe";
    document.getElementById("subBtn").style.backgroundColor = "gray";
  }
};

const calculate = () => {
  let amt = document.querySelector(".calc").value;
  amt <= 50
    ? (document.querySelector(".result").innerHTML = Number(amt) + 10)
    : (document.querySelector(".result").innerHTML = amt + " Free shipping");
};

const clicked = () => {
  let items = document.querySelectorAll("button");
  console.log(items);
  //items.toggle("myStyle");
};