<template>
    <a-affix :style="{ position: 'relative', top: '0', width: '100%','z-index':1000}">
        <a-alert :banner="true"
                 message="警告:请不要xxxxxxx"
                 description=""
                 type="warning"
                 closable
        />
        <a-row>
            <a-col :span="24">
                <a-menu v-model:selectedKeys="selectedKeys" mode="horizontal" :theme="theme">
                    <a-menu-item key="ico" disabled>
                        <div>
                            <a id="logo" href="/index-cn">
                                <img alt="logo" src="https://www.antdv.com/assets/logo.1ef800a8.svg">
                            </a>
                        </div>
                    </a-menu-item>
                    <a-menu-item key="home">
                        首页
                    </a-menu-item>
                    <a-menu-item key="article">
                        新闻中心
                    </a-menu-item>
                    <a-menu-item key="home1">
                        XXX
                    </a-menu-item>
                    <a-menu-item key="user">
                        <a href="/user">用户中心</a>
                    </a-menu-item>
                    <a-affix :style="{ position: 'absolute',  right: '20px'}">
                        <a-space>
                            <LoginAlert></LoginAlert>
                            <a-switch
                                    :checked="theme === 'dark'"
                                    checked-children="暗黑"
                                    un-checked-children="明亮"
                                    @change="changeTheme"
                            />
                        </a-space>
                    </a-affix>
                </a-menu>
            </a-col>
        </a-row>
    </a-affix>
</template>

<script>
import {reactive, toRefs} from "vue";
import LoginAlert from "@/view/home/components/login/index.vue";

export default {
    name: "HomeMenu",
    components: {LoginAlert},
    setup() {
        //theme
        const state = reactive({
            theme: 'light',
            selectedKeys: ['home'],
            openKeys: ['sub1'],
        });
        const changeTheme = checked => {
            state.theme = checked ? 'dark' : 'light';
        };
        //end-theme

        return {
            ...toRefs(state),
            changeTheme,
        };
    },
}
</script>

<style scoped>
img {
    vertical-align: middle;
    border-style: none;
    height: 26px;
    margin-right: 16px;
}
</style>
<style>
.ant-menu-item{
    padding: 0;
}
</style>