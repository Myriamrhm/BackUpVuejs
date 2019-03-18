<template>
    <div ref="game" class="game" :style="{ backgroundImage: `url(${ bg })`}">
      <h1>Qui est l'interprete de cette chanson ?</h1>
      <Countdown :isStarted="startCountDown"/>
      <div class="dad">
      <button @click="startGame">Start the game </button>
      <!-- <button>Pass the song</button> -->
      </div>
      <Answers />
    </div>
</template>

<script>
import Countdown from "@/components/countdown.vue";
import Answers from "@/components/Answers.vue";

/* TUNES */

import britRock from "./../tunes/britRock.js";
import chill from "./../tunes/chill.js";
import dance from "./../tunes/dance.js";
import deuxMille from "./../tunes/deuxMille.js";
import eightiesBand from "./../tunes/eightiesBand.js";
import eightiesFrench from "./../tunes/eightiesFrench.js";
import eightiesHits from "./../tunes/eightiesHits.js";
import eightiesRock from "./../tunes/eightiesRock.js";
import indieRock from "./../tunes/indieRock.js";
import rock2000 from "./../tunes/rock2000.js";
import rnb from "./../tunes/rnb.js";
import sixtiesFrench from "./../tunes/sixtiesFrench.js";
import tendance from "./../tunes/tendance.js";


export default {
  data() {
    return {
      tunesCollections: {
        britRock,
        chill,
        dance,
        deuxMille,
        eightiesBand,
        eightiesFrench,
        eightiesHits,
        eightiesRock,
        indieRock,
        rock2000,
        rnb,
        sixtiesFrench,
        tendance,
      },
      currentCollection: null,
      currentAudio: null,
      tunePosition: 0,
      isStarted: false
    };
  },
  beforeDestroy() {
    this.stopTune();
  },
  beforeMount() {
    this.setCurrentCollection();

  },
  computed: {
    bg() {
      try {
        return require(`@/assets/${ this.currentCollection.wallpaper }`);
      } catch(err) {
        return "";
      }
      
    },
    startCountDown() {
      return this.isStarted;
    }
  },
  methods: {
    setCurrentCollection() {
      const currentCategory = this.$route.params.categoryName;
      this.currentCollection = this.tunesCollections[currentCategory];
      console.log(this.currentCollection);
    },
    startGame() {
      this.isStarted = !this.isStarted;
      if (this.isStarted) {
        this.playTune();
      } else {
        this.stopTune();
      }
      
    },
    playTune() {
      this.currentAudio = new Audio(this.currentCollection.tunes[this.tunePosition]);
      this.currentAudio.play();
      this.currentAudio.onended = () => {
        this.tunePosition += 1;
        this.playTune();
      };
    },
    stopTune() {
      this.currentAudio.pause();
    }
  },
  components: {
    Countdown,
    Answers
  }
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800');
.game {
  background: rgba(67, 15, 255, 0.856);
  // 
  margin-top: -100px;
  margin-right: -8px;
  margin-left: -8px;
  background-size: cover;
  width: auto;
  height: 850px;
  padding-top: 100px;
}
.bloc2 {
  height: 500px;
}
h1 {
  font-family: "Open Sans", sans-serif;
  font-weight: 900;
  font-size: 160%;
}
button {
  background-color: rgba(255, 255, 255, 0.85);
  color: rgb(131, 131, 131);
  padding: 14px 20px;
  border: none;
  cursor: pointer;
  width: 200px;
  border-radius: 5px;
  font-size: 120%;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
  box-shadow: 3px 5px  rgba(0, 0, 0, 0.342);
  margin-top: 8%;
}
button:hover {
  background-color: rgba(255, 255, 255, 0.9);
}
.dad{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
