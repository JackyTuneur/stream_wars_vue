import { ref, computed } from 'vue'
import { defineStore } from 'pinia'



export const userStore = defineStore('user', {
  state: () => ({
      documentID : "",
      email: "",
      UIDUser: "",
      UserName: ""
      }),
    actions :
    {
      
    }  
  }
)