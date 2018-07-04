<template>
    <section>
        <Header :header='header'></Header>
        <div class="content">
            <div class="block-state" v-for="a in 10">首页</div>
        </div>
    </section>
</template>
 
<script>
import Header from '../component/Header'
export default {
    data() {
        return {
            header: {
                isBack: true,
                title: '频道列表',
                backUrl: '/'
            },
        }
    },
    created() {
    },
    components: {
        Header
    }
}
</script>

<style lang='scss' scoped>
.content {
    width: 90%;
    margin-left: 5%;
}

.block-state {
    width: 31%;
    height: 80px;
    font-size: 28px;
    color: #919293;
    background: #f0eef5;
    text-align: center;
    line-height: 80px;
    margin-left: 2%;
    margin-top: 10px;
    float: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>
