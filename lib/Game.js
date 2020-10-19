const inquirer = require('inquirer')
const Enemy = require('./Enemy')
const Player = require('./Player')

function Game() {
    this.roundNumber = 0
    this.isPlayerTurn = false
    this.enemies = []
    this.currentEnemy;
    this.player
}

Game.prototype.initializeGame = function() {
    this.enemies.push(new Enemy('goblin', 'sword'))
    this.enemies.push(new Enemy('orc', 'baseball bat'))
    this.enemies.push(new Enemy('skeleton', 'axe'))
    this.currentEnemy = this.enemies[0]

    // avoid using a function keyword so the lexical scope isnt shifted from 'Game' object
    inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: 'What is your name?'
        })
        //grabs name from command line, pushes to player object
        .then(({ name }) => {
            this.player = new Player(name)
                //test the object creation
            console.log(this.currentEnemy, this.player)
        })
}

module.exports = Game