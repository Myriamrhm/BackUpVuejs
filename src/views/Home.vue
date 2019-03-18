<template>
    <div>
        <div class="home">
            <br>
            <br>
            <br>
        <h1>Viens defier tes amis</h1>
        <img class="logo" src="../assets/logoDisqueTxt.png" alt="">
        <!-- <h3>Ça va groover !</h3> -->

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.home{
    background: url("../assets/Fond2.jpg");
    background-size: cover;
    height: 842px;
    width: auto;
    margin-top: -92px;
    margin-right: -8px;
    margin-left: -8px;
}
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800');
@import url('https://fonts.googleapis.com/css?family=Sigmar+One');
img.logo{
    margin-top: 180px;
    width: 420px;
}
h1{
    font-family: 'Sigmar One', cursive;
    font-size: 60px;
    color:white;
}
h3{
    font-family: 'Open Sans', sans-serif;
    color: white;
    font-size: 200%;
    font-weight: 100;
}
@media screen and (max-width: 480px){
h1{
    font-size: 40px;
}
img.logo{
    width: 80%;
    margin-top: 70px;
}
}
</style>
