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


    logInToDatabase(username, password){

    }


    signInToDatabase(email, username, password){

    }


}



const authSystem = new AuthSystem();

/**
 * Exporting the class as an universal class who will be used everytimes we need that
 * I know exporting an instance with the name of the class instead of the class herself 
 * is a bit messy but i don't know other ways to do it...
 */

export { authSystem as AuthSystem };