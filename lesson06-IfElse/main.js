let score = 0;

const game = (user_input) => {
  const computer_choice = ["Rock", "Paper", "Scissors"];
  const computer_input = computer_choice[Math.floor(Math.random() * 3)];
  document.getElementById("score").innerHTML = score;
  if (user_input === computer_input) {
    alert("It's a tie! Play again.");
  } else if (
    (user_input === "Rock" && computer_input === "Scissors") ||
    (user_input === "Scissors" && computer_input === "Paper") ||
    (user_input === "Paper" && computer_input === "Rock")
  ) {
    score++;
    alert(
      `You win!! 🏆\nYour choice: ${user_input}\nComputer's choice: ${computer_input}`
    );
  } else {
    // User loses
    alert(
      `You lose 😔\nYour choice: ${user_input}\nComputer's choice: ${computer_input}`
    );
  }
};
