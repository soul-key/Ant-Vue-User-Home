<template>
    <a-layout>
        <a-layout-header>
            <HeadMenu @changeCollapsed="changeCollapsed"></HeadMenu>
        </a-layout-header>
        <a-layout style="height: calc(100vh - 48px);">
            <a-layout-sider v-model:collapsed="collapsed" width="200" style="background: #fff;height: 100%">
                <a-menu
                        v-model:openKeys="openKeys"
                        v-model:selectedKeys="selectedKeys"
                        mode="inline"
                        @select="changeSidebar"
                >
                    <a-menu-item key="worker">
                        <template #icon>
                            <DesktopOutlined/>
                        </template>
                        <span>系统看板</span>
                    </a-menu-item>
                    <a-sub-menu key="user">
                        <template #title>账户中心</template>
                        <template #icon>
                            <PieChartOutlined/>
                        </template>
                        <a-menu-item key="user-info">
                            <span>基本信息</span>
                        </a-menu-item>
                        <a-menu-item key="user-safe">
                            <span>安全设置</span>
                        </a-menu-item>
                    </a-sub-menu>
                </a-menu>
            </a-layout-sider>
            <a-layout-content :style="{ background: 'rgb(250, 250, 250)'}">
                <div :style="{ background: '#fff', marginTop: '10px', marginLeft:'15px', height:'calc(100vh - 70px)', overflow: 'auto'}" class="user-info-content">
                    <!-- 右侧的视图核心 -->
                    <a-breadcrumb :style="{lineHeight :'40px', paddingLeft:'10px'}">
                        <a-breadcrumb-item>用户中心</a-breadcrumb-item>
                        <a-breadcrumb-item>APP</a-breadcrumb-item>
                    </a-breadcrumb>
                    <router-view></router-view>
                </div>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<script>
import {
    PieChartOutlined,
    DesktopOutlined,
} from '@ant-design/icons-vue';
import {defineComponent, ref} from 'vue';
import HeadMenu from "@/view/user/components/head-menu.vue";

export default defineComponent({
    name: "UserIndex",
    components: {
        HeadMenu, PieChartOutlined,  DesktopOutlined,
    },
    methods: {
        //左侧点击
        changeSidebar(item) {
            console.info(item)
            this.$router.push({
                name: item.key,
            });
        },
    },
    created() {
        //左侧菜单展开
        this.selectedKeys=[this.$route.name];
        let arr =this.$route.name.split("-")
        this.openKeys=[arr[0]]
    },
    setup() {
        const collapsed = ref(false)
        //设置左侧菜单收缩
        const changeCollapsed = () => {
            collapsed.value = !collapsed.value;
        }
        return {
            selectedKeys: ref(['user-worker']),
            collapsed,
            changeCollapsed,
            openKeys: ref(['user']),
        };
    },
});
</script>
<style scoped>
.ant-layout-header {
    padding: 0;
    height: 48px;
}

#app, .ant-layout {
    height: 100%;
    background-color: rgb(250, 250, 250);
}

.ant-menu-inline {
    border-right: 0;
}
.user-info-content::-webkit-scrollbar { /*此处设置滚动条的宽度和高度，宽度为纵向滚动条设置，高度为横向滚动条设置，设置为0的滚动条消失*/
    width: 4px;
    height: 4px;
}
.user-info-content::-webkit-scrollbar-thumb {/*滚动条滑块样式*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
}
.user-info-content::-webkit-scrollbar-track {/*滚动条轨道样式*/
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);
}
</style>