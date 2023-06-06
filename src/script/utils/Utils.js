/**
 * The utils class is the class who have a lot of utils function !
 */
class Utils{

    /**
     * @param {float} x 
     * @param {float} y 
     * @param {float} a 
     * @returns {float}
     */
    static lerp = (x, y, a) => x * (1 - a) + y * a;

}

export default Utils;
