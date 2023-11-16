// UTILITY FUNCTIONS ===========================================
const attackBtnEl = document.getElementById('attack-btn');
const repairBtnEl = document.getElementById('repair-btn');
const defendBtnEl = document.getElementById('defend-btn');


const playerNameEl = document.getElementById('player-name');
const playerHealthBarEl = document.getElementById('player-health-bar');
const playerHealthNumberEl = document.getElementById('php');

const enemyNameEl = document.getElementById('enemy-name');
const enemyHealthBarEl = document.getElementById('enemy-health-bar');
// const playerHealthNumberEl = document.getElementById('ehp');
const enemyHealthNumberEl = document.getElementById('ehp');

const gameLevel = document.getElementById('level');
const playLogs = document.getElementById('play-logs');


//Generate random number
function generateRandomNum(num1, num2){
    return Math.floor(Math.random() * num1) + num2
}

// GAME STARTS ===========================================

// Create spaceship class - will use for player and enemy
class Spaceship {
    // pass in name, hp, accuracy, damage, level
    constructor(name, hpStart, accuracy, dmg, level, hpAdded) {
        this.name = name;
        this.hpStart = hpStart; 
        this.dmg = dmg; 
        this.accuracy = accuracy; 
        this.level = level;
        this.hpAdded = hpAdded;
        this.currentHp = hpStart + hpAdded;
        this.maxHp = hpStart + hpAdded;
    }
        attack(target) {
            setTimeout(() => {
                let probability = generateRandomNum(10, 1);
                if (probability > 3) {
                    target.currentHp -= this.dmg;
                    //insert some dom manipulation to display the what the console is logging
                    //and depleting enemy hp
                    playLogs.innerHTML = `${this.name} attacked ${target.name} for ${this.dmg} damage!`;
                    console.log(`${this.name} attacked ${target.name} for ${this.dmg} damage!`);
                    initializeContent(playerOne, enemy1)
                } else {
                    playLogs.innerHTML = `${this.name} missed!`;
                    console.log(`${this.name} missed!`);
                }
            }, 500);
        }
    
        levelUp() {
            this.level++;
            this.currentHp = 100;
            // this.dmg += 0;
            // this.accuracy += 0;
            console.log(`${this.name} leveled up to level ${this.level}!`);
        }

        updateHp(damage) {
            this.maxHp = this.hpStart + this.hpAdded;
            this.currentHp = this.currentHp - damage;
        }
}

//3 hp values: hp start, hp added, current hp
//hp start = first number we pull in when game begins (100)
//hp added = anytime we want to add hp with upgrades or levels increasing
//current hp = hp start + hp added 
//method updateCurrentHp that subtracts the dmg from currentHp
//when level restarts currentHp = hp start + hp added

function initializeContent(player, enemy) {
    playerNameEl.textContent = player.name;
    playerHealthBarEl.setAttribute('max', player.maxHp);
    playerHealthBarEl.setAttribute('value', player.currentHp);
    playerHealthNumberEl.textContent = player.currentHp;

    enemyNameEl.textContent = enemy.name;
    enemyHealthBarEl.setAttribute('max', enemy.maxHp);
    enemyHealthBarEl.setAttribute('value', enemy.currentHp);
    enemyHealthNumberEl.textContent = enemy.currentHp;
    //WILL AND BRYCE DEBUGGED THIS SHIT FUCK YALL
}

class Player extends Spaceship {
    constructor(name, hpStart, accuracy, dmg, level, hpAdded) {
        super(name, hpStart, accuracy, dmg, level, hpAdded)
        this.currentHp = hpStart + hpAdded;
        this.maxHp = hpStart + hpAdded;
    }
    repair() {
        setTimeout(() => {
            let health = this.currentHp;
            if(health >= this.hpStart + this.hpAdded) {
                document.querySelector("#repair-btn").disabled = true;
                playLogs.innerHTML = "You're at full health!";
                console.log("You're at full health!");
            } else {
                //heal 10%-20% of hp
                this.currentHp += generateRandomNum(20, 10);
                playLogs.innerHTML = `${this.name} healed and is now at ${this.currentHp} HP!`;
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
                this.currentHp -= (damage - defense);
                playLogs.innerHTML = `${this.name} defended the attack but took ${damage - defense} damage!`;
                console.log(`${this.name} defended the attack but took ${damage - defense} damage!`);
            }
        }, 500);
    }
}

const playerOne = new Player('Player 1', 100, 0.7, 5, 1, 0)

// Create Enemy subclass that extends Spaceship
class Enemy extends Spaceship {
    constructor(name, hpStart, accuracy, dmg, level, hpAdded)  {
        super(name, hpStart, accuracy, dmg, level, hpAdded);
        this.currentHp = hpStart + hpAdded;
        this.maxHp = hpStart + hpAdded;
    }
}

const enemy1 = new Enemy("Starshredder", 100, 0, 0, 1, 0);
const enemy2 = new Enemy("Nebula Scourge", 100, 0, 0, 2, 0);
const enemy3 = new Enemy("Cosmic Menace", 100, 0, 0, 3, 0);
const enemy4 = new Enemy("Galactic Destructor", 100, 0, 0, 4, 0);
const enemy5 = new Enemy("Dark Matter Raider", 100, 0, 0, 5, 0);
const enemy6 = new Enemy("Quantum Marauder", 100, 0, 0, 6, 0);
const enemy7 = new Enemy("Interstellar Annihilator", 100, 0, 0, 7, 0);
const enemy8 = new Enemy("Plasma Leviathan", 100, 0, 0, 8, 0);
const enemy9 = new Enemy("GARBAGE MAN", 100, 0, 0, 9, 0);
const enemy10 = new Enemy("Arthur SS", 100, 0, 0, 10, 0);



// const playerNameEl = document.getElementById('player-name');
// const playerHealthBarEl = document.getElementById('player-health-bar');
// const playerHealthNumberEl = document.getElementById('php');

// const enemyNameEl = document.getElementById('enemy-name');
// const enemyHealthBarEl = document.getElementById('enemy-health-bar');
// const enemyHealthNumberEl = document.getElementById('ehp');

// const gameLevel = document.getElementById('level');

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

initializeContent(playerOne, enemy1);
// FIX PLAYER ONE NAME


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
 attackBtnEl.addEventListener("click", () => {
    playerOne.attack(enemy1);
    console.log(enemy1.hp);
});
    
//repair event listener
repairBtnEl.addEventListener("click", () => {
    playerOne.repair();
    console.log(playerOne.hp);
});
//defend event listener
defendBtnEl.addEventListener("click", () => {
    playerOne.defend(enemy1);
    console.log(playerOne.hp);
});



//CODE FOR TURNS
//on attack set interval for rebutl