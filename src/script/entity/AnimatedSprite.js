import * as PIXI from 'pixi.js';

/**
 * This is the abstract class of many entities
 */
class AnimatedSprite{

    /**
     * @param {MainGame} gameManager 
     * @param {string} spriteSrc 
     * @param {int} cutSize the size of a single sprite who will be cuted
     * @param {int} row 
     * @param {int} column 
     * @param {int} spriteSize the size of the sprite in the game
     */
    constructor(gameManager, spriteSrc, cutSize = 30, row = 3, column = 4, spriteSize = 75){

        //#region // * Cut Sprite Region
        this.gameManager = gameManager;
        this.spriteSrc = spriteSrc;
        this.cutSize = cutSize;
        this.animationSpeed = 1/12;
        this.textureArray = [];
        for(let y = 0; y < column; y++){
            for(let x = 0; x < row; x++){
                var baseTexture = new PIXI.BaseTexture("./src/assets/sprites/MainCharacter.png");
                var texture = new PIXI.Texture(baseTexture, new PIXI.Rectangle(0+cutSize*x, 0+cutSize*y, cutSize, cutSize));
                this.textureArray.push(texture);
            }
        }
        this.animatedSprite = new PIXI.AnimatedSprite(this.textureArray);
        this.animatedSprite.width = spriteSize; this.animatedSprite.height = spriteSize;
        this.gameManager.pixiApp.stage.addChild(this.animatedSprite);
        //#endregion

        this.gameManager.pixiApp.ticker.add(() => { this.update(this) });

    }


    /**
     * The function called to each tick, we just need to overwrite that
     * @param {AnimatedSprite} self this just pass himself at parameters
     */
    update(self){

    }

}

export default AnimatedSprite;