
<script>

// This is the component i need to add if i want to make Pixi.JS match with vue.js

import * as PIXI from "pixi.js";
import MainGame from "../../script/MainGame";
import UiGameComponent from "./UiGameComponent.vue";
  
  export default {
    name: "CanvasComponent",
    data() {
        return {
            gameManager: null,
            colors: ["75F4F4", "90E0F3", "B8B3E9", "D999B9"]
        };
    },
    mounted() {
      
      
      PIXI.SCALE_MODES.LINEAR = PIXI.SCALE_MODES.NEAREST;
  
      this.gameManager = new MainGame(new PIXI.Application({
          transparent: true,
          antialias: true
      }));

      document.getElementById("cnv_holder").appendChild(this.gameManager.pixiApp.view);

    },
    components: { 
      UiGameComponent 
    }
};

  </script>

<template>
  <div class="stage" id = "cnv_holder"></div>
  <UiGameComponent></UiGameComponent>
</template>
  