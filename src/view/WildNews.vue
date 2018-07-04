<<<<<<< HEAD
<template>
    <div class="wildNews">
        <!-- 顶部 -->
        <div class="wildNews-header">
            <div class="wildNews-header-title">风闻</div>
            <div class="wildNews-header-search">
               <input type="text" placeholder='请搜索' v-model='keywords' class=/>
            </div>
            <div class="wildNews-header-write">
                <span class="write-icon"></span>
                <span>发帖</span>
            </div>
        </div>
        <div class="wildNews-tabMenu">
              <!-- :class="{wildNews-menuItem:activeMenu!==menuItem.id,wildNews-menuItem-active:activeMenu==menuItem.id}" -->
           <div  v-for="menuItem in menuList" :key="menuItem.id" @click="getNewsData(menuItem.id)" 
             :class="{menuItem:activeMenu!==menuItem.id,menuItemActive:activeMenu==menuItem.id}"
           >
             {{menuItem.menuName}}
           </div>
        </div>

        <!-- 新闻列表部分 -->
        <div class="wildNews-newslist">
            <div class="wildNews-listItem" v-for="newsItem in newsListData" :key="newsItem.id">
                <div class="wildNews-listItem-userTitle">
                    <div class="userTile-left">
                        <div class="userImg">
                            <img src="" alt="">
                        </div>
                        <div class="user-name">{{newsItem.username}}</div>
                    </div>
                     <div class="userTile-right">
                            <div class="toTop">置顶</div>
                        </div>
                </div>
                <div class="newsItem-detail">
                    <div class="newsItem-img"><img src="" alt=""></div>
                    <div class="newsItem-newsInfo">
                        <div class="newsInfo-title">{{newsItem.newsTtile}}</div>
                        <div class="newsInfo-time">
                            <div class="update">{{newsItem.update}}</div>
                            <div class="comments">
                                <span class="comments-icon"></span>
                                <span>{{newsItem.comments}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      keywords: "",
      activeMenu :2,
      menuList:[
          {
              id:1,
              menuName:'我的关注'
          },
           {
              id:2,
              menuName:'最新发布'
          },
           {
              id:3,
              menuName:'专栏文章'
          },
            {
              id:4,
              menuName:'最新回复'
          },
            {
              id:5,
              menuName:'24小时动态'
          }
      ],
      newsListData:[
          {
              id:11,
              username:'后沙月光',
              newsTtile:'挑拨法国，拆散欧盟，美国不是说着玩hahahhaha啦啦啦啦啦啦',
              update:'一小时前',
              comments:'333'
          },
           {
              id:12,
              username:'小红帽呀',
              newsTtile:'挑拨法国，拆散欧盟，美国不是说着玩',
              update:'一小时前',
              comments:'333'
          }
      ]
    };
  },
  methods:{
    getNewsData(MenuId){
        this.activeMenu = MenuId
    }
  }
};
</script>

<style lang="scss" scoped>
  .wildNews{
      width:100%;
      height:100%;
    //   头部
      .wildNews-header{
          width:100%;
          height:80px;
          background-color: #CB1413;

          .wildNews-header-title{
              width:20%;
              height:80px;
              float:left;
              font-size:18px;
              color:#fff;
              line-height:80px;
              text-align: center;
          }
          .wildNews-header-search{
              width:50%;
              height:80px;
              float:left;
              input{
                  width:90%;
                  height:60px;
                  margin-top:10px;
                  border:none;
                  outline:none;
                  background: #fff;
                  border-radius:40px;
                  padding-left:40px;
              }
          }
          .wildNews-header-write{
              width:25%;
              height:80px;
              float:left;
              margin-left:5px;
              display:flex;
              justify-content: space-around;
              .write-icon{

              }
              span{
              font-size:18px;
              color:#fff;
              line-height:80px;
              text-align: center;
              }
          }
      }
    //   tab栏部分
      .wildNews-tabMenu{
          width:100%;
          height:60px;
          display:flex;
          justify-content: space-around;
          border-bottom:1px solid #E9E9E9;
          .menuItem{
          font-size:14px;
          color:#707070;
          line-height:60px;
          }
         .menuItemActive{
          font-size:14px;
          color:#707070;
          line-height:60px;
          color:#D23D3C;
         }
      }
    //   新闻列表部分
      .wildNews-newslist{
          width:100%;
          height:1000px;
          overflow-y: scroll;
          .wildNews-listItem{
              width:100%;
              padding:18px;
              border-bottom:1px solid #EAEAEA;
            .wildNews-listItem-userTitle{
                  width:100%;
                  height:60px;
                  .userTile-left{
                      width:60%;
                      height:50px;
                      float:left;
                   .userImg{
                      width:50px;
                      height:50px;
                      float: left;
                      border-radius:50%;
                      background:lightblue;
                      img{
                          width:100%;
                          height:100%;
                      }
                    }
                   .user-name{
                      width:60%;
                      height:50px;
                      float:left;
                      padding-left:5px;
                      font-size:16px;
                      line-height:50px;
                      color:#ADADAD;
                      font-weight:500;
                  }
                }
                .userTile-right{
                    width:37%;
                    height:50px;
                    float:right;
                    padding-right:15px;
                  .toTop{
                   width:90px;
                   height:35px;
                   float: right;
                   margin-right:15px;
                   border:1px solid #D13636;
                   padding:5px;
                   border-radius:10px;
                   font-size:16px;
                   color:#D13636;
                   line-height:35px;
                   text-align: center;
                 }          
                }
            }
            .newsItem-detail{
                width:100%;
                height:120px;
                display:flex;
                .newsItem-img{
                    flex:1;
                    height:120px;
                    background:lightblue;
                   img{
                       width:100%;
                       height:100%;
                   }
                }
                .newsItem-newsInfo{
                    flex:3;
                    height:120px;
                    padding-left:10px;
                    .newsInfo-title{
                        width:94%;
                        margin:0 auto;
                        font-size:14px;
                        color:#4E4E4E;
                        line-height:30px;
                        height:80px;
                    }
                    .newsInfo-time{
                        width:94%;
                        height:30px;
                        display: flex;
                        justify-content: space-between;
                        .update{
                            font-size:14px;
                            color:#C1C1C1;
                            line-height:30px;
                            text-align: center;
                        }
                        .comments{
                            display:flex;
                            .comments-icon{
                                width:40px;
                                height:40px;
                                background:lightblue;
                            }
                            span{
                               font-size:16px;
                               color:#B4B4B4;
                               line-height:35px;
                               text-align: center;
                            }
                        }
                    }
                }
            }
          }
      }

  }
</style>

=======
<template>
    <div class="wildNews">
        <!-- 顶部 -->
        <div class="wildNews-header">
            <div class="wildNews-header-title">风闻</div>
            <div class="wildNews-header-search">
               <input type="text" placeholder='请搜索' v-model='keywords' class=/>
            </div>
            <div class="wildNews-header-write">
                <span class="write-icon"></span>
                <span>发帖</span>
            </div>
        </div>
        <div class="wildNews-tabMenu">
              <!-- :class="{wildNews-menuItem:activeMenu!==menuItem.id,wildNews-menuItem-active:activeMenu==menuItem.id}" -->
           <div  v-for="menuItem in menuList" :key="menuItem.id" @click="getNewsData(menuItem.id)" 
             :class="{menuItem:activeMenu!==menuItem.id,menuItemActive:activeMenu==menuItem.id}"
           >
             {{menuItem.menuName}}
           </div>
        </div>

        <!-- 新闻列表部分 -->
        <div class="wildNews-newslist">
            <div class="wildNews-listItem" v-for="newsItem in newsListData" :key="newsItem.id">
                <div class="wildNews-listItem-userTitle">
                    <div class="userTile-left">
                        <div class="userImg">
                            <img src="" alt="">
                        </div>
                        <div class="user-name">{{newsItem.username}}</div>
                    </div>
                     <div class="userTile-right">
                            <div class="toTop">置顶</div>
                        </div>
                </div>
                <div class="newsItem-detail">
                    <div class="newsItem-img"><img src="" alt=""></div>
                    <div class="newsItem-newsInfo">
                        <div class="newsInfo-title">{{newsItem.newsTtile}}</div>
                        <div class="newsInfo-time">
                            <div class="update">{{newsItem.update}}</div>
                            <div class="comments">
                                <span class="comments-icon"></span>
                                <span>{{newsItem.comments}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      keywords: "",
      activeMenu :2,
      menuList:[
          {
              id:1,
              menuName:'我的关注'
          },
           {
              id:2,
              menuName:'最新发布'
          },
           {
              id:3,
              menuName:'专栏文章'
          },
            {
              id:4,
              menuName:'最新回复'
          },
            {
              id:5,
              menuName:'24小时动态'
          }
      ],
      newsListData:[
          {
              id:11,
              username:'后沙月光',
              newsTtile:'挑拨法国，拆散欧盟，美国不是说着玩hahahhaha啦啦啦啦啦啦',
              update:'一小时前',
              comments:'333'
          },
           {
              id:12,
              username:'小红帽呀',
              newsTtile:'挑拨法国，拆散欧盟，美国不是说着玩',
              update:'一小时前',
              comments:'333'
          }
      ]
    };
  },
  methods:{
    getNewsData(MenuId){
        this.activeMenu = MenuId
    }
  }
};
</script>

<style lang="scss" scoped>
  .wildNews{
      width:100%;
      height:100%;
    //   头部
      .wildNews-header{
          width:100%;
          height:80px;
          background-color: #CB1413;

          .wildNews-header-title{
              width:20%;
              height:80px;
              float:left;
              font-size:18px;
              color:#fff;
              line-height:80px;
              text-align: center;
          }
          .wildNews-header-search{
              width:50%;
              height:80px;
              float:left;
              input{
                  width:90%;
                  height:60px;
                  margin-top:10px;
                  border:none;
                  outline:none;
                  background: #fff;
                  border-radius:40px;
                  padding-left:40px;
              }
          }
          .wildNews-header-write{
              width:25%;
              height:80px;
              float:left;
              margin-left:5px;
              display:flex;
              justify-content: space-around;
              .write-icon{

              }
              span{
              font-size:18px;
              color:#fff;
              line-height:80px;
              text-align: center;
              }
          }
      }
    //   tab栏部分
      .wildNews-tabMenu{
          width:100%;
          height:60px;
          display:flex;
          justify-content: space-around;
          border-bottom:1px solid #E9E9E9;
          .menuItem{
          font-size:14px;
          color:#707070;
          line-height:60px;
          }
         .menuItemActive{
          font-size:14px;
          color:#707070;
          line-height:60px;
          color:#D23D3C;
         }
      }
    //   新闻列表部分
      .wildNews-newslist{
          width:100%;
          height:1000px;
          overflow-y: scroll;
          .wildNews-listItem{
              width:100%;
              padding:18px;
              border-bottom:1px solid #EAEAEA;
            .wildNews-listItem-userTitle{
                  width:100%;
                  height:60px;
                  .userTile-left{
                      width:60%;
                      height:50px;
                      float:left;
                   .userImg{
                      width:50px;
                      height:50px;
                      float: left;
                      border-radius:50%;
                      background:lightblue;
                      img{
                          width:100%;
                          height:100%;
                      }
                    }
                   .user-name{
                      width:60%;
                      height:50px;
                      float:left;
                      padding-left:5px;
                      font-size:16px;
                      line-height:50px;
                      color:#ADADAD;
                      font-weight:500;
                  }
                }
                .userTile-right{
                    width:37%;
                    height:50px;
                    float:right;
                    padding-right:15px;
                  .toTop{
                   width:90px;
                   height:35px;
                   float: right;
                   margin-right:15px;
                   border:1px solid #D13636;
                   padding:5px;
                   border-radius:10px;
                   font-size:16px;
                   color:#D13636;
                   line-height:35px;
                   text-align: center;
                 }          
                }
            }
            .newsItem-detail{
                width:100%;
                height:120px;
                display:flex;
                .newsItem-img{
                    flex:1;
                    height:120px;
                    background:lightblue;
                   img{
                       width:100%;
                       height:100%;
                   }
                }
                .newsItem-newsInfo{
                    flex:3;
                    height:120px;
                    padding-left:10px;
                    .newsInfo-title{
                        width:94%;
                        margin:0 auto;
                        font-size:14px;
                        color:#4E4E4E;
                        line-height:30px;
                        height:80px;
                    }
                    .newsInfo-time{
                        width:94%;
                        height:30px;
                        display: flex;
                        justify-content: space-between;
                        .update{
                            font-size:14px;
                            color:#C1C1C1;
                            line-height:30px;
                            text-align: center;
                        }
                        .comments{
                            display:flex;
                            .comments-icon{
                                width:40px;
                                height:40px;
                                background:lightblue;
                            }
                            span{
                               font-size:16px;
                               color:#B4B4B4;
                               line-height:35px;
                               text-align: center;
                            }
                        }
                    }
                }
            }
          }
      }

  }
</style>

>>>>>>> e48679ab2836aeef961674672e813101ffa1efde
