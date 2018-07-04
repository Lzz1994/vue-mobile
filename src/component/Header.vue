<template>
    <section>
        <div class="header-state">
            <div class="back">
                <img src="../assets/img/back.png" @click='back'>
            </div>
            <div class="title"> {{header.title}}</div>
        </div>
    </section>
</template>
<script>
export default {
    props: { header: Object },
    data() {
        return {
        }
    },
    methods: {
        back() {
            this.$router.push({ path: this.header.backUrl })
        }
    }
}
</script>

<style lang='scss' scoped>
.header-state {
    height: 80px;
    background: #f9f9f9f9;
    .title {
        text-align: center;
        line-height: 80px;
        font-size: 30px;
    }
}

.back {
    position: absolute;
    top: 16px;
    left: 10px;
    img {
        width: 26px;
    }
}
</style>
