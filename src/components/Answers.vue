<template>
<div>
<!-- <div id="parent">
    <div class="answer"></div>
    <div class="answer"></div>
    <div class="answer"></div>
    <div class="answer"></div>
</div> -->
</div>
    
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#parent{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-left: 12%;
    margin-right: 12%;
}
.answer{
    background-color: rgba(255, 255, 255, 0.596);
    width: 150px;
    height: 150px;
    border-radius: 3px;
    box-shadow: 8px 10px rgba(0, 0, 0, 0.342);
    margin-top: 5%;
}
// .answer:hover{
//     background-color: rgba(255, 255, 255, 0.705);
// }
</style>
