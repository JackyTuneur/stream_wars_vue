/**
 * This is the event system of the game, it is where every click will be passed :)
 * At the creation of the class we set every event listener
 */
class EventSystem{

    /**
     * The Event system works with a specific property : keyState who keep every key who is held or not !
     * @param {MainGame} gameManager 
     */
    constructor(gameManager){

        this.keyState = {}; 

        window.addEventListener('keydown',(e) => {
            Object.defineProperty(this.keyState , e.key, { value : true, writable: true })
        },true);    
        window.addEventListener('keyup', (e) => {
            Object.defineProperty(this.keyState , e.key, { value : false, writable: true })
        },true);
        
    }

}

export default EventSystem;