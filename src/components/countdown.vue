<template>
    <div id="countdown" >
        <svg id="circle_wrap">
            <circle id="circle" r="82" cx="87" cy="87" :class="{'is-started': started}" />
        </svg>
    </div>
</template>

<script>

export default {
  computed: {
    started() {
      console.log(this.$props)
      return this.$props.isStarted
    }
  },
  props: ["isStarted"]
}
</script>

<style lang="scss" scoped>
#countdown {
    position: relative;
    margin: auto;
    margin-top: 60px;
    height: 200px;
    width: 200px;
    text-align: center;
  }

  #circle_wrap {
    position: absolute;
    top: 0;
    right: 0;
    transform: rotateY(-180deg) rotateZ(-90deg);
    box-shadow: inset 0px 0px 2px 8px rgba(230, 230, 230, 0.253);
    width: 174px;
    height: 174px;;
    border-radius: 50%;
  }
  
  #circle {
    background-color: black;
    stroke-dasharray: 511px;
    stroke-dashoffset: 0px;
    stroke-linecap: round;
    stroke-width: 6px;
    stroke: rgb(255, 255, 255);
    fill: none;
 
  }
  .is-started  {
      animation: countdown 32s linear forwards infinite;
    }
  
  @keyframes countdown {
    from {
      stroke-dashoffset: -500px;
    }
    to {
      stroke-dashoffset: 0px;
    }
  }

</style>
