import AnimatedSprite from "./AnimatedSprite";
import EntityState from "./stats/EntityState";
import EntityStats from "./stats/EntityStats";

/**
 * This is the Player class who extends of the AnimatedSprite Class
 */
class Player extends AnimatedSprite{

    /**
     * @param {MainGame} gameManager 
     * @param {string} spriteSrc 
     * @param {int} cutSize the size of a single sprite who will be cuted
     * @param {int} row 
     * @param {int} column 
     * @param {int} spriteSize the size of the sprite in the game
     */
    constructor(gameManager, spriteSrc, cutSize = 30, row = 3, column = 4, spriteSize = 100){
        super(gameManager, spriteSrc, cutSize, row, column, spriteSize);
        this.stats = new EntityStats(50, 50, 5);
    }

    /**
     * The moove sprite function, works with the update function
     */
    mooveSprite(){
        let mooveVector = { x: 0, y : 0 };

        // Get the key stocked in the eventSystem
        if(this.gameManager.eventSystem.keyState["d"]) mooveVector.x ++;
        if(this.gameManager.eventSystem.keyState["q"]) mooveVector.x --;
        if(this.gameManager.eventSystem.keyState["s"]) mooveVector.y ++;
        if(this.gameManager.eventSystem.keyState["z"]) mooveVector.y --;

        this.animatedSprite.position.x += mooveVector.x * this.stats.speed;
        this.animatedSprite.position.y += mooveVector.y * this.stats.speed;
    }

    /**
     * The overrided void from AnimatedSprite class
     * @param {Player} self 
     */
    update(self){
        switch(self.stats.state){
            case EntityState.Idle :
                self.mooveSprite();
                break;
            default :
                throw new Error("Entity doesn't have any state that is not possible")
        }
    }


}

export default Player;