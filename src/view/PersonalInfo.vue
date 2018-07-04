<template>
    <section>
        <Header :header='header'></Header>
        <div class="content">
            <div class="avtar">
                <div>头像</div>
                <div><img src="../assets/img/morentouxiang.png"></div>
            </div>

            <div class="detail-content">
                <div class="detail-content-state">
                    <div class="name">昵称</div>
                    <div class="name-detail">Reckless<img class="arrow-gray" src="../assets/img/to-gray.png"></div>
                </div>
                <div class="detail-content-state">
                    <div class="name">性别</div>
                    <div class="name-detail">男<img class="arrow-gray" src="../assets/img/to-gray.png"></div>
                </div>
                <div class="detail-content-state">
                    <div class="name">生日</div>
                    <div class="name-detail">1993.9.14<img class="arrow-gray" src="../assets/img/to-gray.png"></div>
                </div>
                <div class="detail-content-state">
                    <div class="name">个人签名</div>
                    <div class="name-detail">未设置<img class="arrow-gray" src="../assets/img/to-gray.png"></div>
                </div>
                <div class="detail-content-state">
                    <div class="name">毕业于</div>
                    <div class="name-detail">未设置<img class="arrow-gray" src="../assets/img/to-gray.png"></div>
                </div>
                <div class="detail-content-state">
                    <div class="name">职业</div>
                    <div class="name-detail">工程师<img class="arrow-gray" src="../assets/img/to-gray.png"></div>
                </div>
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
                title: '个人资料',
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
.avtar {
    height: 200px;
    background: #fff;
    margin-top: 70px;
    display: flex;
    color: #9c9c9c;
    justify-content: space-between;
    div:nth-child(1) {
        font-size: 30px;

        line-height: 200px;
        position: relative;
        left: 20px;
    }
    div:nth-child(2) {
        img {
            width: 160px;
        }
        position: relative;
        top: 20px;
        right: 30px;
    }
}

.detail-content {
    margin-top: 40px;
    color: #9c9c9c;
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
</style>
