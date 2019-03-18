<template>
    <div>
        <div class="connexion">
            <br>
            <br>
            <br>
            <br>
            <br>
        <h1>Log in or sign in...</h1>
        <Connexion></Connexion>
        </div>
    </div>
</template>

<script>
import Connexion from '@/components/login.vue'

export default {
    components:{
        Connexion
    }

}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800');
.bloc{
    height: 500px;
}
.connexion {
    background: url("../assets/voix.jpg");
    background-size: cover;
    height: 852px;
    width: auto;
    margin-top: -82px;
    margin-right: -8px;
    margin-left: -8px;
}
h1{
    font-family: 'Open Sans', sans-serif;
    color: white;
    font-weight:900;
    font-size: 180%;
}

</style>
