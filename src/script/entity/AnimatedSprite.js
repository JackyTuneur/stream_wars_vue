import * as PIXI from 'pixi.js';
import { Assets } from 'pixi.js';


/**
 * This is the abstract class of many entities
 * The anchor of every AnimatedSprite is set to 1, 0.5f (in the bottom center of the sprites)
 */
class AnimatedSprite{

    /**
     * @param {MainGame} gameManager 
     * @param {string} spriteAssetsKey the key relied to the Assets
     * @param {int} cutSize the size of a single sprite who will be cuted
     * @param {int} row 
     * @param {int} column 
     * @param {int} spriteSize the size of the sprite in the game
     */
    constructor(gameManager, spriteAssetsKey, cutSize = 30, row = 3, column = 4, spriteSize = 75){

        //#region // * Cut Sprite Region
        this.gameManager = gameManager;
        this.spriteAssetsKey = spriteAssetsKey;
        this.cutSize = cutSize;
        this.animationSpeed = 1/12;
        this.animationArray = {
            moove : {
                top : this.getRowAnimated(3, 3, cutSize),
                bottom : this.getRowAnimated(3, 0, cutSize),
                right : this.getRowAnimated(3, 1, cutSize),
                left : this.getRowAnimated(3, 2, cutSize),
            }
        };
        
        this.animatedSprite = new PIXI.AnimatedSprite(this.animationArray.moove.top);
        this.animatedSprite.animationSpeed = this.animationSpeed
        this.animatedSprite.width = spriteSize; this.animatedSprite.height = spriteSize;
        this.animatedSprite.anchor.set(1, 0.5);
        this.gameManager.pixiApp.stage.addChild(this.animatedSprite);
        //#endregion

        this.gameManager.pixiApp.ticker.add(() => { this.update(this) });
        
    }

    /**
     * @param {int} row the number of row take in count
     * @param {int} column the exact column to start the cut
     * @param {int} cutSize the size of each cut
     * @returns {array<PIXI.Texture>} return the array of Pixi Texture of the animations
     */
    getRowAnimated(row, column, cutSize){
        let textureArray = [];
        for(let i = 0; i < row; i++){
            var baseTexture = Assets.get(this.spriteAssetsKey);
            var texture = new PIXI.Texture(baseTexture, new PIXI.Rectangle(0+cutSize*i, 0+cutSize*column, cutSize, cutSize));
            textureArray.push(texture);
        }
        return textureArray;
    }


    /**
     * The function called to each tick, we just need to overwrite that
     * @param {AnimatedSprite} self this just pass himself at parameters
     */
    update(self){

    }

}

export default AnimatedSprite;