class Form {
    constructor(){
        this.title = createElement("h1")
        this.input = createInput("NAME")
        this.button = createButton("PLAY")
        this.greetings = createElement("h2")
        this.reset = createButton("RESET")

    }

    hide(){
        this.title.hide()
        this.input.hide()
        this.button.hide()
        this.greetings.hide()

    }

    display(){
        this.title.html("CAR RACING GAME")
        this.title.position(displayWidth / 2 - 50,0)
        this.input.position(displayWidth / 2 - 40,displayHeight / 2 - 80)
        this.button.position(displayWidth / 2 + 30,displayHeight / 2)
        this.reset.position(displayWidth - 100,25)

        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount += 1;
            player.index = playerCount;
            player.update()
            player.updateCount(playerCount)
            this.greetings.html("WELCOME "+player.name)
            this.greetings.position(displayWidth / 2 - 70,displayHeight / 4)
        })
        this.reset.mousePressed(()=>{
            database.ref('/').update({
                playerCount : 0,
                gameState : 0,
                players : null
            })
            
        })
    }

      


}

