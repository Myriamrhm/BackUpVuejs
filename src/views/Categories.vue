<template>
<div class="pic">
    <CategorieList />
</div>
    
</template>

<script>
import CategorieList from '@/components/CategorieList.vue'

export default {
  components: {
    CategorieList
  }
}
</script>

<style lang="scss" scoped>
.pic{
    background: url("../assets/Break.jpg");
    background-size: cover;
    height: 100%;
    width: auto;
    margin-top: -125px;
    margin-right: -8px;
    margin-left: -8px;
}
</style>
