import { CompositeTilemap, Tilemap } from "@pixi/tilemap";
import * as PIXI from 'pixi.js';
import { Assets } from 'pixi.js';

/**
 * This is the class of the tile map we will draw
 */
class Map{
    
    /**
     * 
     * @param {MainGame} gameManager 
     * @param {array<array<object>>} mapArray 
     * @param {int} tileSize 
     */
    constructor(gameManager, mapArray, tileSize){
        this.gameManager = gameManager;
        this.mapArray = mapArray;
        this.tileSize = tileSize;
        this.tileMap = new CompositeTilemap();
        this.drawMap();
    }

    drawMap(){

        for(let y = 0; y < this.mapArray.length; y++){
            for(let x = 0; x < this.mapArray[y].length; x++){
                var baseTexture = Assets.get(this.mapArray[y][x].textureName);
                var texture = new PIXI.Texture(baseTexture);
                texture.baseTexture.width = this.tileSize;
                texture.baseTexture.height = this.tileSize;
                this.tileMap.tile(texture, 60*x, 60*y, {
                    tileWidth : this.tileSize,
                    tileHeight : this.tileSize
                });
            }
        }
        this.gameManager.pixiApp.stage.addChild(this.tileMap)
    }

}

export default Map;