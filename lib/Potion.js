function Potion(name) {
    this.types = ['strength', 'agility', 'health']
        //gets name from user input or randomly selects one from 'types'
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];
    if (this.name === 'health') {
        this.value = Math.floor(Math.random() * 10 + 30)
    } else {
        this.value = Math.floor(Math.random() * 5 + 7)
    }
}


module.exports = Potion