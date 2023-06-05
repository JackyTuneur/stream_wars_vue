import Player from "./entity/Player";

/**
 * The Displayer is the class that allow to display on the app without go 
 * directly on the MainGame class
 */
class Displayer{

    /**
     * @param {MainGame} gameManager 
     */
    constructor(gameManager){
        
        this.gameManager = gameManager;

        this.Player = new Player(this.gameManager, 0, 30);

    }


}

export default Displayer;