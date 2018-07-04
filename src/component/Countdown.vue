<template>
    <div>
        <button @click='getCode' class="coundown">{{currentSeconds===60?'点击获取验证码':currentSeconds +'s后重新获取'}}</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentSeconds: 60,
            isCanclick: true

        }
    },
    methods: {
        getCode() {
            if (this.isCanclick) {
                this.isCanclick = false
                this.setTime()
            }
        },
        setTime() {
            if (this.currentSeconds > 0) {
                setTimeout(() => {
                    this.currentSeconds--
                    this.setTime()
                }, 1000)
            }
            if (this.currentSeconds === 0) {
                this.isCanclick = true
                this.currentSeconds = 60
            }
        }
    }
}
</script>

<style lang='scss' scoped>
.coundown {
    background: #ba181b;
    border-radius: 6px;
    color: #fff;
    width: 90%;
    margin-left: 10%;
    height: 70px;
    border: none;
}
</style>
