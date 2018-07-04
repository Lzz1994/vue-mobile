<template>
    <section>
        <Header :header='header'></Header>
        <div class="detail-content">
            <div class="detail-content-state">
                <div class="name">手机号</div>
                <div class="name-detail">18351816916<img class="arrow-gray" src="../assets/img/to-gray.png"></div>
            </div>
            <div class="detail-content-state">
                <div class="name">修改密码</div>
                <div class="name-detail"><img class="arrow-gray" src="../assets/img/to-gray.png"></div>
            </div>

            <div class="detail-content-exit exit">
                <div class="name exit-name">退出</div>
            </div>
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
                title: '账号密码',
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
.detail-content {
    margin-top: 40px;
}

.detail-content-state {
    display: flex;
    justify-content: space-between;
    height: 80px;
    background: #fff;
    margin-top: 2px;
    .name {
        line-height: 80px;
        position: relative;
        left: 20px;
        font-size: 30px;
    }
    .name-detail {
        line-height: 80px;
        position: relative;
        right: 30px;
        font-size: 30px;
    }
    .arrow-gray {
        position: relative;
        top: 6px;
        left: 10px;
    }
}

.detail-content-exit {
    height: 100px;
    background: #fff;
    margin-top: 70px;
}

.exit-name {
    text-align: center;
    line-height: 100px;
    color: #ba181b;
    font-size: 38px;
    letter-spacing: 3px;
}
</style>
