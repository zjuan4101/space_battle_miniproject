// UTILITY FUNCTIONS ===========================================
const attackBtn = document.getElementById('attack-btn');
const repairBtn = document.getElementById('repair-btn');
const defendBtn = document.getElementById('defend-btn');

const playerName = document.getElementById('player-name');
const playerHealthBar = document.getElementById('player-health-bar');
const playerHealthNumber = document.getElementById('php');

const enemyName = document.getElementById('enemy-name');
const enemyHealthBar = document.getElementById('enemy-health-bar');
const enemyHealthNumber = document.getElementById('ehp');

const gameLevel = document.getElementById('level');

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
        attack(target) {
            setTimeout(() => {
                let probability = generateRandomNum(10, 1);
                if (probability > 3) {
                    target.hp -= this.dmg;
                    //insert some dom manipulation to display the what the console is logging
                    //and depleting enemy hp
                    playLogs.innerHTML = `${this.name} attacked ${target.name} for ${this.dmg} damage!`;
                    console.log(`${this.name} attacked ${target.name} for ${this.dmg} damage!`);
                } else {
                    playLogs.innerHTML = `${this.name} missed!`;
                    console.log(`${this.name} missed!`);
                }
            }, 500);
        }
    
        levelUp() {
            this.level++;
            this.hp = 100;
            // this.dmg += 0;
            // this.accuracy += 0;
            console.log(`${this.name} leveled up to level ${this.level}!`);
          }
}

// console.log(playerOne.levelUp)
    //attack event listener
    
    
    attackBtn.addEventListener("click", () => {
        playerOne.attack();
        console.log(target.hp);
    });

// Create Player subclass that extends Spaceship
class Player extends Spaceship {
    constructor(name, hp, accuracy, dmg, level) {
        super(name, hp, accuracy, dmg, level)
    }
    repair() {
        setTimeout(() => {
            let health = this.hp;
            if(health >= 100) {
                document.querySelector("#repair-btn").disabled = true;
                playLogs.innerHTML = "You're at full health!";
                console.log("You're at full health!");
            } else {
                //heal 10%-20% of hp
                this.hp += generateRandomNum(20, 10);
                playLogs.innerHTML = `${this.name} healed and is now at ${this.hp} HP!`;
                console.log(`${this.name} healed and is now at ${this.hp} HP!`);
            }
        }, 500);
    }
    defend(target) {
        //deflect 10%-20% of damage from enemy attack
        setTimeout(() => {
            let damage = target.dmg;
            let defense = generateRandomNum(20, 10);
            if (damage <= defense) {
                playLogs.innerHTML = `${this.name} defended the attack!`;
                console.log(`${this.name} defended the attack!`);
            } else {
                this.hp -= (damage - defense);
                playLogs.innerHTML = `${this.name} defended the attack but took ${damage - defense} damage!`;
                console.log(`${this.name} defended the attack but took ${damage - defense} damage!`);
            }
        }, 500);
    }
}
const playerOne = new Player('Player 1', 100, 0.7, 5, 1)

// Create Enemy subclass that extends Spaceship
class Enemy extends Spaceship {
    constructor(name, hp, accuracy, dmg, level)  {
        super(name, hp, accuracy, dmg, level);

        // enemy image
        // enemy background
        
    }
}
const enemy1 = new Enemy("Starshredder", 100, 0, 0, 1);
const enemy2 = new Enemy("Nebula Scourge", 100, 0, 0, 2);
const enemy3 = new Enemy("Cosmic Menace", 100, 0, 0, 3);
const enemy4 = new Enemy("Galactic Destructor", 100, 0, 0, 4);
const enemy5 = new Enemy("Dark Matter Raider", 100, 0, 0, 5);
const enemy6 = new Enemy("Quantum Marauder", 100, 0, 0, 6);
const enemy7 = new Enemy("Interstellar Annihilator", 100, 0, 0, 7);
const enemy8 = new Enemy("Plasma Leviathan", 100, 0, 0, 8);
const enemy9 = new Enemy("GARBAGE MAN", 100, 0, 0, 9);
const enemy10 = new Enemy("Arthur SS", 100, 0, 0, 10);

// Show docking modal
// GOING TO NEED TO WORK WITH "HIDDEN SCREENS" FOR THIS

// const dockingModal;


// Get button to start
// const startBtn;

// On start button click, hide modal & show game elements
// startBtn.addEventListener('click', event => {
//     //

// });

// START LEVEL 1 ===========================================
// const levelScreen;


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


//attack event listener    
 attackBtn.addEventListener("click", () => {
    playerOne.attack(enemy1);
    console.log(enemy1.hp);
});
    
//repair event listener
repairBtn.addEventListener("click", () => {
    playerOne.repair();
    console.log(playerOne.hp);
});
//defend event listener
defendBtn.addEventListener("click", () => {
    playerOne.defend(enemy1);
    console.log(playerOne.hp);
});
