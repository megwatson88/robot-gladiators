//var playerName = 'Clank McKrank';
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once like this 
consule.log(playerName, playerAttack, playerHealth);
 
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

//fight function 
var fight = function name(params) {
    //alert players that they are starting the round
    window.alert("Welcome to the Robot Gladiators!");

    //ask player if they'd like to fight or run 
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "Fight" or "SKIP" to choose. ');

    //if player choses to fight, fight 
    if(promptFight === 'fight || promptFight === "FIGHT") {
        // remove enemy's healthy by subtracting the amount set in the player Attack variable 
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + "Attacked" + enemyName + "." + enemyName + "now has" + enemyHealth + "health remaining.");
            //check enemy's health 
            if (enemyHealth <=0) {
                window.alert(enemyName + "has died!");
            } else {window.altert(enemyName + "still has" + enemyHealth + "Health left.");
        }
            }
        )
    }
}