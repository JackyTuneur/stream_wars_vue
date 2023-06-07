<script>

import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

    <h1 v-on:click="test">Sign in Page</h1>

    <header :class = "$route.name">
      <nav>
        <router-link to = "/login"><h1>LOG IN</h1></router-link>
        <router-link to = "/register"><h1>CREATE ACCOUNT</h1></router-link>
        <router-link to = "/main"><h1>Go Game</h1></router-link>
      </nav>
    </header>

    <RouterView />

</template>