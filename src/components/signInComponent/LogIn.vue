<script>

import { AuthSystem } from '../../script/auth/AuthSystem';

export default {
    data(){
      return{
        username : "",
        password : ""
      }
    },
    methods : {

        connectToTheApplication(){
            AuthSystem.logInToDatabase(this.username, this.password)
                .then(res => console.log(res))
                .catch(error => console.log('error'));
        }
  
    }
}


</script>

<template>

    <h1>Log in Page</h1>

    <div class = "loginContent">
        <input type="username" placeholder="Username" class = "placeholder" v-model = "username">
        <input type="password" placeholder="Password" class = "placeholder" v-model = "password">

        <button @click = "connectToTheApplication">LOG IN</button>
    </div>

</template>