import { Assets, settings } from 'pixi.js';

class AssetsManager{

    /**
     * @param {MainGame} mainGame take the main game in constructor in case to launch it after
     */
    constructor(mainGame){
        this.mainGame = mainGame;

        this.assetsToLoad = { bundles : [
            {
                name: 'player',
                assets: [
                    {
                        name: 'sprite_sheet',
                        srcs: "../src/assets/sprites/MainCharacter.png",
                    }
                ],
            },
        ]}
        
        this.loadAssets();
    }

    /**
     * This function just load procedurally the assets and then launch the game from
     * the main Class
     */
    async loadAssets(){
        await Assets.init({ manifest : this.assetsToLoad });

        await Assets.loadBundle("player", this.showProgress) 
        
        this.mainGame.launchGame();
    }

    /**
     * @param {int} e the number of assets loaded by Pixi 
     */
    showProgress(e){
        // ! Just console log it actually...
        console.log(e)
    }


}

export default AssetsManager;