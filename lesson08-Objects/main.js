/* let score = {
  wins: 0,
  losses: 0,
  ties: 0,
}; */

let score = JSON.parse(localStorage.getItem("score"));

if (score === null) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
}
result = "";

const game = (user_input) => {
  const computer_choice = ["Rock", "Paper", "Scissors"];
  const computer_input = computer_choice[Math.floor(Math.random() * 3)];

  if (user_input === computer_input) {
    alert("It's a tie! Play again.");
    result = "tie";
  } else if (
    (user_input === "Rock" && computer_input === "Scissors") ||
    (user_input === "Scissors" && computer_input === "Paper") ||
    (user_input === "Paper" && computer_input === "Rock")
  ) {
    result = "win";
    alert(
      `You win!! 🏆\nYour choice: ${user_input}\nComputer's choice: ${computer_input}`
    );
  } else {
    // User loses
    result = "lose";
    alert(
      `You lose 😔\nYour choice: ${user_input}\nComputer's choice: ${computer_input}`
    );
  }

  if (result === "win") {
    score.wins++;
  } else if (result === "lose") {
    score.losses++;
  } else {
    score.ties++;
  }
  localStorage.setItem("score", JSON.stringify(score));

  document.getElementById(
    "score"
  ).innerHTML = `Wins: ${score.wins} | Losses: ${score.losses} | Ties: ${score.ties}`;
};

const reset = () => {
  localStorage.removeItem("score");
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
};

const obj = {
  name: "Nitheesh",
  age: 18,
};

const obj1 = obj;
const obj2 = obj1;

console.log(obj === obj1);
console.log(obj1 === obj2);

/* let myName = obj.name;
let myAge = obj.age; */

const { myName, myAge } = obj;

let products = {
  basketball: 2095,
};
products.basketball += 500;

products["deleviry time"] = "3 days";

console.log(products);

let product1 = {
  hamam_soap: 10,
  paste: 20,
};
console.log(product1);

const { hamam_soap, paste } = product1;
// let p1 = product1.hamam_soap;
// let p2 = product1.paste;
console.log(paste);
const comparePrice = (p1, p2) => {
  if (p1 > p2) {
    console.log(p2);
  } else {
    console.log(p1);
  }
};
comparePrice(hamam_soap, paste);

let text = "Good Morning";
console.log(text.toLowerCase());
console.log(text.repeat(2));
