import Vue from 'vue'
import Router from 'vue-router'

const Login = () =>
    import ('../view/Login')
const ResetPasword = () =>
    import ('../view/ResetPassword')
const ForgetPassword = () =>
    import ('../view/ForgetPassword')
const Register = () =>
    import ('../view/Register')

const PersonalInfo = () =>
    import ('../view/PersonalInfo')
const ChannelList = () =>
    import ('../view/ChannelList')
const Components = () =>
    import ('../view/Comments')
const AccountPassword = () =>
    import ('../view/AccountPassword')
const WildNews = () =>
    import ('../view/WildNews')

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Login',
        component: Login
    }, {
        path: '/ResetPasword',
        name: 'ResetPasword',
        component: ResetPasword
    }, {
        path: '/ForgetPassword',
        name: 'ForgetPassword',
        component: ForgetPassword
    }, {
        path: '/Register',
        name: 'Register',
        component: Register

    }, {
        path: '/PersonalInfo',
        name: 'PersonalInfo',
        component: PersonalInfo,
        beforeEnter: (to, from, next) => {
            document.getElementsByTagName('html')[0].style.background = '#f0eff7';
            next()
        },
    }, {
        path: '/ChannelList',
        name: 'ChannelList',
        component: ChannelList,
        beforeEnter: (to, from, next) => {
            document.getElementsByTagName('html')[0].style.background = '#fff';
            next()
        },
    }, {
        path: '/Components',
        name: 'Components',
        component: Components,
        beforeEnter: (to, from, next) => {
            document.getElementsByTagName('html')[0].style.background = '#f0eff7';
            next()
        },
    }, {
        path: '/AccountPassword',
        name: 'AccountPassword',
        component: AccountPassword,
        beforeEnter: (to, from, next) => {
            document.getElementsByTagName('html')[0].style.background = '#f0eff7';
            next()
        },
    }, {
        path: '/wildNews',
        name: 'WildNews',
        component: WildNews
    }]

})