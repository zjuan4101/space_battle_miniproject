# space_battle_miniproject
**MUST HAVES**
heros setup like pokemon game
		-trigger attacks from a button mechanism
		-hull = hp
			-hull starts at 20
		-firepower = damage
			-dmg = 5
		-accuracy = chance of hitting
		-chance = .7 (70%)
alien adversaries
		-hull = 23-26
		-firepower = 2-4
		-accuracy = .6 to  .8
-USS Assembly + 1 Alien Ship (name it)

PLAYER OBJECT
	-start/game over
	-weapons
	-ship appearance
	-actions (attack, defend, repair)
	-upgrade

**HOW THE GAME WORKS**

START (p&g file with transparent background that you color)
	-restart
	-choose weapon + option for an upgrade
	-choose appearance of ship
	-display showing the ship

GAME INTERFACE/STARTING THE GAME LEVEL 1
	-screen changes to battle view
	-enemy and player ease into screen space from different direction
	-animation of enemy ship in space
	-2 bars on bottom (contains level, health, firepower for both player and enemy)
		-block powerup bar
	-actions
		-attack, defend, repair (buttons needed for each)

BATTLE/LEVELING UP THE CHARACTER
	-each level milestone you choose an upgrade
	-each enemy who gets killed is a "level"
	-"LEVEL" = gives you more shit, makes enemy harder to kill, gets you closer to winning the game
	-there are "turns" (starts on player's turn)
	-if player, you can attack, defend, or repair
	-ends at level 10 (SS ARTHUR FINAL BOSS)
	-restart HP but firepower scales with level

GAMEPLAY ACTIONS
	-attack = add random number generator for accuracy + add random damage to this (within certain parameters based on your current level) -- 10% dodge, 10% crit, 80% normal dmg calculation
	-defend = level 1 shield deflect 10% of damage thats able to be inflicted by the attacking enemy (enemy will not have a shield because it will have more health than the player)
	-repair = generates a random amount on health that gives you a chance of surviving (maybe regens 10-20%)
	-text log on screen that tells you what happened in the exchange (from 'ground control' -- flight master?)

INTERMEDIARY SCREEN EXISTING BETWEEN LEVELS (returns to space station to choose new upgrade)
	-'flight master' youre talking to after each level, theyre a vendor for your upgrade (upgrades)
	-explains how much damage was done, how long the fight took, button to start next level, option to choose your new upgrade

FINAL BOSS/ENDGAME
	-you won animation
	-option to restart
	-compilation of stats



DANNY's EXPLANATION 
//3 hp values: hp start, hp added, current hp
//hp start = first number we pull in when game begins (100)
//hp added = anytime we want to add hp with upgrades or levels increasing
//current hp = hp start + hp added 
//method updateCurrentHp that subtracts the dmg from currentHp
//when level restarts currentHp = hp start + hp added