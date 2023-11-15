// UTILITY FUNCTIONS ===========================================

//Generate random number
function generateRandomNum(num1, num2){
    return Math.floor(Math.random() * num1) + num2
}

// GAME STARTS ===========================================

// Create spaceship class - will use for player and enemy
class Spaceship {
    // pass in name, hp, accuracy, damage, level
    constructor(name, hp, accuracy, dmg, level) {
        this.name = name;
        this.hp = hp; // 5
        this.dmg = dmg; 
        this.accuracy = accuracy; //default: .7
        this.level = level;
    }
    // attack method
        // set delay
        // pulls in target as param

        // run probability - math.floor math.random between 1-10
            // if >3
                // target.hp -= dmg
                // log message about attack

            // else
                // log some message about attack missing

        // 
    attack() {
//insert attack
    }
}

// Create Player subclass that extends Spaceship
class Player extends Spaceship {
    // methods:
        // defend
        // repair
}

// Create Enemy subclass that extends Spaceship
class Enemy extends Spaceship {
    constructor(name, hp, accuracy, dmg, level)  {
        super(name, hp, accuracy, dmg, level);

        // enemy image
        // enemy background
        
    }
}

// Create all enemy objects
const enemy1 = new Enemy("Garbage Man", 100, 0, 0, 0); // William to work on this
const enemy2 = new Enemy();
const enemy3 = new Enemy();
const enemy4 = new Enemy();
const enemy5 = new Enemy();
const enemy6 = new Enemy();
const enemy7 = new Enemy();
const enemy8 = new Enemy();
const enemy9 = new Enemy();
const enemy10 = new Enemy();

// Create player object with base stats:
    // set level to 1
    // set everything to baseline (whatever that's gonna be)

const playerOne = new Player("USS Assembly", 100, 0, 0, 0);

// Show docking modal

// Get button to start

// On start button click, hide modal & show game elements

// START LEVEL 1 ===========================================

// Hide Dock modal

// Grab all needed HTML Elements

    // Attack btn
    // Defend btn
    // Repair btn
    // Player sidebar - Name
    // Player sidebar - HP
    // Player sidebar - Damage
    // Enemy sidebar - Name
    // Enemy sidebar - HP
    // Level label
    // Wherever we're triggering affects from

// Event listeners
    // On attack btn click
        // attack method (player, enemy)

    // 