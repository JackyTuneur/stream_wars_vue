<script>

import { AuthSystem } from '../../script/auth/AuthSystem';

export default {
    data(){
      return{
        email : "",
        username : "",
        password : ""
      }
    },
    methods : {

        createAccountToTheApplication(){
            AuthSystem.signInToDatabase(this.email, this.username, this.password)
                .then(res => console.log(res))
                .catch(error => console.log('error'));
        }
  
    }
}


</script>

<template>

    <h1>Create in Page</h1>

    <div class = "loginContent">
        <input type="email" placeholder="Email" class = "placeholder" v-model = "email">
        <input type="username" placeholder="Username" class = "placeholder" v-model = "username">
        <input type="password" placeholder="Password" class = "placeholder" v-model = "password">

        <button @click = "createAccountToTheApplication">SIGN IN</button>
    </div>

</template>