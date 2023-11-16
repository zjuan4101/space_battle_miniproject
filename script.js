// GAME NOTES ===========================================

//3 hp values: hp start, hp added, current hp
//hp start = first number we pull in when game begins (100)
//hp added = anytime we want to add hp with upgrades or levels increasing
//current hp = hp start + hp added 
//method updateCurrentHp that subtracts the dmg from currentHp
//when level restarts currentHp = hp start + hp added


// GRAB DOM ELEMENTS ===========================================
const attackBtnEl = document.getElementById('attack-btn');
const repairBtnEl = document.getElementById('repair-btn');
const defendBtnEl = document.getElementById('defend-btn');

const playerNameEl = document.getElementById('player-name');
const playerHealthBarEl = document.getElementById('player-health-bar');
const playerHealthNumberEl = document.getElementById('php');
const playerHealthMaxNumberEl = document.getElementById('total-php');

const enemyNameEl = document.getElementById('enemy-name');
const enemyHealthBarEl = document.getElementById('enemy-health-bar');
// const playerHealthNumberEl = document.getElementById('ehp');
const enemyHealthNumberEl = document.getElementById('ehp');
const enemyHealthMaxNumberEl = document.getElementById('total-ehp');

const gameLevel = document.getElementById('level');
const playLogs = document.getElementById('play-logs');


// UTILITY FUNCTIONS ===========================================

//Generate random number
function generateRandomNum(num1, num2){
    return Math.floor(Math.random() * num1) + num2
}

function initializeContent(player, enemy) {
    console.log("initializing content...");
    playerNameEl.textContent = player.name;
    playerNameEl.style.textTransform = 'uppercase';
    playerNameEl.style.fontSize = '3rem';
    playerNameEl.style.fontWeight = 'bold';
    playerNameEl.style.fontFamily = "'Space Grotesk', sans-serif"; //ADDED BY BRYCE
    playerHealthBarEl.setAttribute('max', player.maxHp);
    playerHealthBarEl.setAttribute('value', player.currentHp);
    playerHealthNumberEl.textContent = player.currentHp;
    playerHealthMaxNumberEl.textContent = player.maxHp;

    enemyNameEl.textContent = enemy.name;
    enemyNameEl.style.fontFamily = "'Space Grotesk', sans-serif"; //ADDED BY BRYCE
    enemyNameEl.style.textTransform = 'uppercase';
    enemyNameEl.style.fontSize = '3rem';
    enemyNameEl.style.fontWeight = 'bold';
    enemyHealthBarEl.setAttribute('max', enemy.maxHp);
    enemyHealthBarEl.setAttribute('value', enemy.currentHp);
    enemyHealthNumberEl.textContent = enemy.currentHp;
    enemyHealthMaxNumberEl.textContent = enemy.maxHp;
    //WILL AND BRYCE DEBUGGED THIS SHIT FUCK YALL
}

// USER OBJECTS ===========================================

// Spaceship class to extend to player and ememy

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
        // enable buttons
        attackBtnEl.disabled = false;
        repairBtnEl.disabled = false;

        const randomNum = generateRandomNum(10, 1);          
        // if (probability > 3) {
        // DANNY CHANGE: probability to randomNum, pull in accuracy property value so that as accuracy increase, chances of miss decreases
        if (randomNum <= this.accuracy) {
            target.currentHp -= this.dmg;                
            //insert some dom manipulation to display the what the console is logging
            //and depleting enemy hp
            playLogs.innerHTML = `${this.name} attacked ${target.name} for ${this.dmg} damage!`;
            playLogs.style.fontSize = '3rem';
            playLogs.style.textTransform = 'uppercase';
            playLogs.style.fontWeight = 'bold';
            playLogs.style.fontFamily = "'Space Grotesk', sans-serif";
            console.log(`${this.name} attacked ${target.name} for ${this.dmg} damage!`);                
        } else {
            playLogs.innerHTML = `${this.name} missed!`;
            playLogs.style.fontSize = '3rem';
            playLogs.style.textTransform = 'uppercase';
            playLogs.style.fontWeight = 'bold';
            playLogs.style.fontFamily = "'Space Grotesk', sans-serif";
            console.log(`${this.name} missed!`);
        }                          
    }    
    levelUp() {
        this.level++;
        // this.currentHp = 100;
        // this.dmg += 0;
        // this.accuracy += 0;
        console.log(`${this.name} leveled up to level ${this.level}!`);
    }

    updateMaxHp(damage) {
        this.maxHp = this.hpStart + this.hpAdded;
    }
}

// Player

class Player extends Spaceship {
    constructor(name, hpStart, accuracy, dmg, level, hpAdded) {
        super(name, hpStart, accuracy, dmg, level, hpAdded)        
    }
    repair(target) {         
        const maxHealth = this.hpStart + this.hpAdded;
        if(this.currentHp >= maxHealth) {
            document.querySelector("#repair-btn").disabled = true;
            playLogs.innerHTML = "You're at full health!";
            playLogs.style.fontSize = '3rem';
            playLogs.style.textTransform = 'uppercase';
            playLogs.style.fontWeight = 'bold';
            playLogs.style.fontFamily = "'Space Grotesk', sans-serif";
            console.log("You're at full health!");
        } else {
            //heal 10%-20% of hp
            const addedHealth = generateRandomNum(20, 10);
            if ((this.currentHp + addedHealth) >= maxHealth) {
                this.currentHp = maxHealth;
            } else {
                this.currentHp += addedHealth;
            }
            playLogs.innerHTML = `${this.name} healed and is now at ${this.currentHp} HP!`;
            playLogs.style.fontSize = '3rem';
            playLogs.style.textTransform = 'uppercase';
            playLogs.style.fontWeight = 'bold';
            playLogs.style.fontFamily = "'Space Grotesk', sans-serif";            
        }      
        initializeContent(this, target);                                  
    }

    defend(target) {
    //deflect 10%-20% of damage from enemy attack
        setTimeout(() => {
            let damage = target.dmg;
            let defense = generateRandomNum(20, 10);
            if (damage <= defense) {
            playLogs.innerHTML = `${this.name} defended the attack!`;
            playLogs.style.fontSize = '3rem';
            playLogs.style.textTransform = 'uppercase';
            playLogs.style.fontWeight = 'bold';
            playLogs.style.fontFamily = "'Space Grotesk', sans-serif";
            console.log(`${this.name} defended the attack!`);
            } else {
            this.currentHp -= (damage - defense);
            playLogs.innerHTML = `${this.name} defended the attack but took ${damage - defense} damage!`;
            playLogs.style.fontSize = '3rem';
            playLogs.style.textTransform = 'uppercase';
            playLogs.style.fontWeight = 'bold';
            playLogs.style.fontFamily = "'Space Grotesk', sans-serif";
            console.log(`${this.name} defended the attack but took ${damage - defense} damage!`);
            }
        }, 500);
        }
}

// Enemy

// Create Enemy subclass that extends Spaceship
class Enemy extends Spaceship {
    constructor(name, hpStart, accuracy, dmg, level, hpAdded)  {
        super(name, hpStart, accuracy, dmg, level, hpAdded);        
    }
}

// BUILD PLAYER OBJECTS ===========================================

// Player
const player1 = new Player('Player 1', 100, 7, 5, 1, 0);

// Enemies
const enemy1 = new Enemy("Starshredder", 100, 7, 5, 1, 0);
const enemy2 = new Enemy("Nebula Scourge", 100, 7, 5, 2, 0);
const enemy3 = new Enemy("Cosmic Menace", 100, 7, 5, 3, 0);
const enemy4 = new Enemy("Galactic Destructor", 100, 7, 5, 4, 0);
const enemy5 = new Enemy("Dark Matter Raider", 100, 7, 5, 5, 0);
const enemy6 = new Enemy("Quantum Marauder", 100, 7, 5, 6, 0);
const enemy7 = new Enemy("Interstellar Annihilator", 100, 7, 5, 7, 0);
const enemy8 = new Enemy("Plasma Leviathan", 100, 7, 5, 8, 0);
const enemy9 = new Enemy("GARBAGE MAN", 100, 7, 5, 9, 0);
const enemy10 = new Enemy("Arthur SS", 100, 7, 5, 10, 0);

// START LEVEL 1 ===========================================

// Initialize the content on screen for level
initializeContent(player1, enemy1);

// PLAYER ACTIONS ===========================================

//attack event listener    
 attackBtnEl.addEventListener("click", e => {  
    if (attackBtnEl.disabled) e.preventDefault();
    player1.attack(enemy1);
    attackBtnEl.disabled = true;
    repairBtnEl.disabled = true;
    initializeContent(player1, enemy1);  

    setTimeout(() => {        
        enemy1.attack(player1);   
        initializeContent(player1, enemy1);  
    }, 2000);         
});
    
//repair event listener
repairBtnEl.addEventListener("click", e => {
    if (repairBtnEl.disabled) e.preventDefault();
    player1.repair(enemy1);
    attackBtnEl.disabled = true;
    repairBtnEl.disabled = true;
    initializeContent(player1, enemy1);  

    setTimeout(() => {        
        enemy1.attack(player1);   
        initializeContent(player1, enemy1);  
    }, 2000);    
});