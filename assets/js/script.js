// Initialize player and Roboto stats
var player = {
  name: "Human",
  health: 100,
  attack: 10,
};

var Roboto = {
  name: "Roboto",
  health: 100,
  attack: 8,
};

// Function to handle player's attack
function playerAttack() {
  var damage = Math.floor(Math.random() * player.attack) + 1;
  Roboto.health -= damage;
  updateResult(
    "You attacked " +
      Roboto.name +
      ". " +
      Roboto.name +
      " now has " +
      Roboto.health +
      " health remaining."
  );

  if (Roboto.health <= 0) {
    endGame("Congratulations! You defeated " + Roboto.name + "!");
  } else {
    setTimeout(computerRobotAttack, 2500); // Delay Roboto's attack for 1 second
  }
}

// Function to handle Roboto's attack
function computerRobotAttack() {
  var damage = Math.floor(Math.random() * Roboto.attack) + 1;
  player.health -= damage;
  updateResult(
    Roboto.name +
      " attacked you." +
      " You now have " +
      player.health +
      " health remaining."
  );

  if (player.health <= 0) {
    endGame("Game over! " + Roboto.name + " defeated you!");
  }
}

// Function to update result on the screen
function updateResult(message) {
  var resultElement = document.getElementById("result");
  resultElement.textContent = message;
}

// Function to end the game
function endGame(message) {
  updateResult(message);
  document.getElementById("attack-btn").disabled = true;
}

// Event listener for attack button
document.getElementById("attack-btn").addEventListener("click", playerAttack);
