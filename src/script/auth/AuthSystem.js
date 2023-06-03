/**
 * This is the class for the Authentification System
 * We need to set up the private token and the link if we wan't this to works 
 */
class AuthSystem {


    /**
     * Create the AuthSystem and on what it will be built
     * @param {string} databaseAdress the adress of the auth db
     * @param {string} privateToken the private token
     */
    constructor(databaseAdress, privateToken){
        // ! The error isn't actually don't forget to set it in the future
        //if(databaseAdress === undefined || privateToken === undefined) throw new Error("databseAdress or privateToken for the auth is undefined")
        this.databaseAdress = databaseAdress;
        this.privateToken = privateToken;
    }


    /**
     * @param {string} username 
     * @param {string} password 
     * @returns {object} this function returns the informations of the user (UserID && Username)
     */
    async logInToDatabase(username, password){

        return {
            UID : undefined,
            username : undefined
        }
    }


    /**
     * @param {string} email 
     * @param {string} username 
     * @param {string} password 
     * @returns {object} this function returns the informations of the user (UserID && Username)
     */
    async signInToDatabase(email, username, password){

        return {
            UID : undefined,
            username : undefined
        }
    }


}

// ! This is temporary
let tempDbAdress = undefined, tempDbToken = undefined;

const authSystem = new AuthSystem(tempDbAdress, tempDbToken);

/**
 * Exporting the class as an universal class who will be used everytimes we need that
 * I know exporting an instance with the name of the class instead of the class herself 
 * is a bit messy but i don't know other ways to do it...
 */

export { authSystem as AuthSystem };