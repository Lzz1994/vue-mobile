<template>
    <section>
        <Header :header='header'></Header>
        <div class="hot-comments">
            <div class="comments-title">热门评论2条</div>
            <div class="hot-comments-state" v-for="a in 3">
                <div class="hot-comments-list">
                    <div class="top-state">
                        <div class="avatar">
                            <img src="../assets/img/morentouxiang.png">
                            <span class="nickName">reckless</span>
                        </div>
                        <div class="time">2小时前</div>
                    </div>
                    <div class="comments-detail">
                        我是评论我是评论我是评论我是评论我是评论我是评论我是评论我是评论我是评论我是评论我是评论
                    </div>

                    <div class="bottom-state">
                        <span class="icon-state"> <img src="../assets/img/share-small.png">
                            <span></span>
                        </span>
                        <span class="icon-state"> <img src="../assets/img/comment-small.png"></span>
                        <span class="icon-state"> <img src="../assets/img/cai.png">
                            <span class="num">0</span>
                        </span>
                        <span class="icon-state"> <img src="../assets/img/zan-small.png">
                            <span class="num">41</span>
                        </span>
                    </div>
                    <div style="clear:both;"></div>
                </div>
            </div>
        </div>

        <div class="latest-comments">
            <div class="comments-title">最新评论19条</div>
            <div class="hot-comments-state" v-for="a in 3">
                <div class="hot-comments-list">
                    <div class="top-state">
                        <div class="avatar">
                            <img src="../assets/img/morentouxiang.png">
                            <span class="nickName">reckless</span>
                        </div>
                        <div class="time">2小时前</div>
                    </div>
                    <div class="comments-detail">
                        我是评论我是评论我是评论我是评论我是评论我是评论我是评论我是评论我是评论我是评论我是评论
                    </div>

                    <div class="bottom-state">
                        <span class="icon-state"> <img src="../assets/img/share-small.png">
                            <span></span>
                        </span>
                        <span class="icon-state"> <img src="../assets/img/comment-small.png"></span>
                        <span class="icon-state"> <img src="../assets/img/cai.png">
                            <span class="num">0</span>
                        </span>
                        <span class="icon-state"> <img src="../assets/img/zan-small.png">
                            <span class="num">41</span>
                        </span>
                    </div>
                    <div style="clear:both;"></div>
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
                title: '全部评论',
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


.hot-comments-list {
    width: 90%;
    margin-left: 5%;
}

.top-state {
    display: flex;
    padding-top: 10px;
    justify-content: space-between;
    .avatar {
        img {
            width: 50px;
        }
    }
    .nickName {
        color: #ba181b;
        font-size: 26px;
        position: relative;
        top: -30px;
    }
    .time {
        color: #919293;
        float: right;
    }
}

.hot-comments-state {
    width: 100%;
    background: #fff;
    border-bottom: 2px solid #f0eff7;
}

.comments-detail {
    margin-left: 50px;
    margin-top: -15px;
    font-size: 30px;
    letter-spacing: 2px;
}

.bottom-state {
    float: right;
    margin-top: 20px;
    margin-bottom: 10px;
    .icon-state {
        padding-left: 28px;
    }
    img {
        width: 28px;
    }
    .num {
        position: relative;
        top: -3px;
        font-size: 28px;
        color: #919293;
    }
}

.comments-title {
    font-size: 26px;
    color: #919293;
    padding: 10px 0 10px 30px;
}
</style>
