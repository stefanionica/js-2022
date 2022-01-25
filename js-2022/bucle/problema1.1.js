this.turnRight = function() {
    this.turnLeft()
    this.turnLeft()
    this.turnLeft()
    }
    this.makeSteps = function(steps) {
    for(var i = 0; i < steps; i++) {
    this.move()
    }
    }
    
    this.makeSteps(2)
    this.turnRight()
    this.move()
    this.turnLeft()
    this.move()
    this.pickBeeper()
    this.turnLeft()
    this.turnLeft()

    //https://karel.herokuapp.com/#problem-1-2 : TEMA PENTRU MARTI