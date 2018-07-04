<template>
    <section>
        <Header :header='header'></Header>
        <div class="content">
            <div class="login login-mobile">
                <input type="text" placeholder="手机号码">
            </div>
            <div class="login login-code">
                <div><input type="text" placeholder="验证码"></div>
                <div>
                    <CountDown></CountDown>
                </div>
            </div>
            <div class="login login-btn">
                <button>确定</button>
            </div>
        </div>
    </section>
</template>
 
<script>
import CountDown from '../component/Countdown'
import Header from '../component/Header'
export default {
    data() {
        return {
            header: {
                isBack: true,
                title: '忘记密码',
                backUrl: '/'
            },
        }
    },
    created() {

    },
    components: {
        CountDown,
        Header
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.login {
    width: 90%;
    margin-left: 5%;
    margin-top: 40px;
    input {
        width: 100%;
        height: 68px;
        border: 2px solid #DCDFE6;
        border-radius: 6px;
        &::-webkit-input-placeholder {
            position: relative;
            left: 10px;
        }
    }

    button {
        width: 100%;
        height: 68px;
        font-size: 28px;
        letter-spacing: 4px;
        background: #ba181b;
        border: none;
        border-radius: 6px;
        color: #fff;
    }
}

.login-state {
    display: flex;
    justify-content: space-between;
    div {
        color: #ba181b;
        font-size: 30px;
        font-weight: 300;
    }
}

.login-code {
    display: flex;
    div:first-child {
        flex: 5
    }
    div:nth-child(2) {
        flex: 4;
        button {
            width: 90%;
            margin-left: 10%
        }
    }
}
</style>
