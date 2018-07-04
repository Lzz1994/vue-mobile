<template>
    <section>
        <Header :header='header'></Header>
        <div class="content">
            <div class="login login-mobile">
                <input type="text" placeholder="手机号码">
            </div>
            <div class="login login-password">
                <input type="text" placeholder="密码">
            </div>
            <div class="login login-btn">
                <button>登录</button>
            </div>
            <div class="login login-state">
                <div>新用户</div>
                <div>忘记密码</div>
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
                title: '登录',
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
</style>
