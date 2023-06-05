import EntityState from "./EntityState";

/**
 * This is class who holds the statistiques of Entity
 */
class EntityStats{

    constructor(health, maxHealth, speed){

        this.state = EntityState.Idle;

        this.health = health;
        this.maxHealth = maxHealth;
        this.speed = speed;
        
    }

}

export default EntityStats;