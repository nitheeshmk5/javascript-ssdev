const changer = () => {
  let content = document.querySelector(".js-subButton").innerText;
  content == "subscribe"
    ? (document.querySelector(".js-subButton").innerHTML = "SUBSCRIBED")
    : (document.querySelector(".js-subButton").innerHTML = "subscribe");
};

const calculate = () => {
  let amt = document.querySelector(".calc").value;
  amt <= 50
    ? (document.querySelector(".result").innerHTML = Number(amt) + 10)
    : (document.querySelector(".result").innerHTML = amt + " Free shipping");
};
