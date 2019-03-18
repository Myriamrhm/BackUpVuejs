<template>
    <div class="blo">
        <TableUsers></TableUsers>
        <UserInfos></UserInfos>
    </div>
</template>

<script>
import TableUsers from '@/components/TableUsers.vue'
import UserInfos from '@/components/UserInfos.vue'
export default {
    components: {
        TableUsers,
        UserInfos
    }

}
</script>

<style lang="scss" scoped>
.blo{
    background-color: rgb(241, 131, 131);
    height: 900px;
    margin-top: -100px;
    margin-right: -8px;
    margin-left: -8px;
    padding-top: 400px;
}

</style>
