import AnimatedSprite from "./AnimatedSprite";
import EntityState from "./stats/EntityState";
import EntityStats from "./stats/EntityStats";
import Utils from '../utils/Utils';

/**
 * This is the Player class who extends from the AnimatedSprite Class
 */
class Player extends AnimatedSprite{

    /**
     * @param {MainGame} gameManager 
     * @param {string} spriteAssetsKey the key relied to the Assets
     * @param {int} cutSize the size of a single sprite who will be cuted
     * @param {int} row 
     * @param {int} column 
     * @param {int} spriteSize the size of the sprite in the game
     */
    constructor(gameManager, spriteAssetsKey, cutSize = 30, row = 3, column = 4, spriteSize = 100){
        super(gameManager, spriteAssetsKey, cutSize, row, column, spriteSize);
        this.stats = new EntityStats(50, 50, 6);
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

        this.animateMooveSprite(mooveVector);

        this.animatedSprite.position.x += mooveVector.x * this.stats.speed;
        this.animatedSprite.position.y += mooveVector.y * this.stats.speed;
    }


    /**
     * This function is called after the mooveSprite function, in that case 
     * @param {object} mooveVector this mooveVector object is build like { x : ?, y : ?} 
     */
    animateMooveSprite(mooveVector){
        let mooveVectorArray = Object.values(mooveVector);
        
        switch(mooveVectorArray[0]){
            case -1 :
                if(this.animatedSprite.textures != this.animationArray.moove.left) this.animatedSprite.textures = this.animationArray.moove.left;
                this.animatedSprite.play()
                return;
            case 1 :
                if(this.animatedSprite.textures != this.animationArray.moove.right) this.animatedSprite.textures = this.animationArray.moove.right;
                this.animatedSprite.play()
                return;
        }

        switch(mooveVectorArray[1]){
            case -1 :
                if(this.animatedSprite.textures != this.animationArray.moove.top) this.animatedSprite.textures = this.animationArray.moove.top;
                this.animatedSprite.play()
                return;
            case 1 :
                if(this.animatedSprite.textures != this.animationArray.moove.bottom) this.animatedSprite.textures = this.animationArray.moove.bottom;
                this.animatedSprite.play()
                return;
        }

        this.animatedSprite.currentFrame = 0;
        this.animatedSprite.stop();

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