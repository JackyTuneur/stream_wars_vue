import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


/**
 * Store the personnal informations of the user here
 */
export const userStore = defineStore('user', {
  state: () => ({
      email: "",
      UID: "",
      UserName: ""
      }),
    actions :
    {
      
    }  
  }
)