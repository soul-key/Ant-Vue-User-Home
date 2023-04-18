<template>
    <a-affix :style="{ position: 'absolute',   width:'100%'}">
        <a-menu
            mode="horizontal"
            :selectable="false"
            :style="{ lineHeight: '48px'}"
    >
        <a-menu-item key="0" disabled style="width: 80px;text-align: center;">
            <menu-unfold-outlined
                    v-if="collapsed"
                    class="trigger"
                    :style="{'font-size':'20px'}"
                    @click="changeCollapsed"
            />
            <menu-fold-outlined v-else class="trigger" @click="changeCollapsed"
                                :style="{fontSize:'20px'}"/>
        </a-menu-item>
        <a-menu-item key="ico">
            <div>
                <a id="logo" href="/">
                    <img alt="logo" src="https://www.antdv.com/assets/logo.1ef800a8.svg" height="26">
                </a>
            </div>
        </a-menu-item>
        <a-affix :style="{ position: 'absolute',  right: '0px'}">
            <a-space>
                <a-sub-menu key="ask">
                    <template #title>工单</template>
                    <a-menu-item key="ask:1">提交工单</a-menu-item>
                    <a-menu-item key="ask:2">我的工单</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="money">
                    <template #title>费用</template>
                    <a-menu-item key="money:recharge">充值</a-menu-item>
                    <a-menu-item key="money:order">订单</a-menu-item>
                </a-sub-menu>
                <a-menu-item key="3">
                    <a-badge count="5" :numberStyle="{lineHeight:'12px',padding: 0,height:'12px',minWidth:'12px',fontSize:'10px'}">
                        <notification-outlined style="font-size: 16px;"/>
                    </a-badge>
                </a-menu-item>
                <a-menu-item key="4" disabled title="当前控制台暂未支持暗黑主题">
                    <bulb-outlined/>
                </a-menu-item>
                <a-sub-menu key="5" style="border-left: 1px solid #dddddd;">
                    <template #title>
                        153****1234
                        <a-avatar style="background-color: #87d068">
                            <template #icon>
                                <UserOutlined/>
                            </template>
                        </a-avatar>
                    </template>
                    <a-menu-item key="user:1"
                                 style="background-color: rgb(242,245,246);margin: 0 !important;height: 90px !important;"
                                 class="user-info">
                        <div class="info">153****1234</div>
                        <div class="info" style="color: #999;">账户ID：13125452351231
                            <copy-outlined/>
                        </div>
                        <a-button type="primary" shape="round" ghost style="font-size: 12px;">主账号</a-button>
                    </a-menu-item>
                    <a-menu-item key="user:2" style="width: 260px;padding: 0 !important;margin: 0 !important;"
                                 class="user-info">
                        <a-row>
                            <a-col :span="8" style="border: 1px solid #f2f4f7;border-left: 0;">
                                <a target="_blank" href="/">基本资料</a>
                            </a-col>
                            <a-col :span="8" style="border-bottom: 1px solid  #f2f4f7;border-top: 1px solid  #f2f4f7;">
                                <a target="_blank" href="/">实名认证</a>
                            </a-col>
                            <a-col :span="8" style="border: 1px solid  #f2f4f7;border-right: 0;">
                                <a target="_blank" href="/">安全设置</a>
                            </a-col>
                        </a-row>
                    </a-menu-item>
                    <a-menu-item key="setting:3">
                        <safety-outlined /> 安全管控
                    </a-menu-item>
                    <a-menu-item key="setting:5">
                        <rocket-outlined /> AccessKey管理
                    </a-menu-item>
                    <a-menu-item key="setting:3">
                        <a-button style="width: 230px;">退出登录</a-button>
                    </a-menu-item>
                </a-sub-menu>
            </a-space>
        </a-affix>
    </a-menu>
    </a-affix>
</template>

<script>
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    BulbOutlined,
    NotificationOutlined,
    CopyOutlined,
    SafetyOutlined,
    RocketOutlined
} from "@ant-design/icons-vue";

export default {
    name: "HeadMenu",
    emits: ["changeCollapsed"],
    data() {
        return {
            collapsed: false
        }
    },
    methods: {
        changeCollapsed() {
            this.collapsed = !this.collapsed;
            this.$emit("changeCollapsed")
        }
    },
    components: {MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, BulbOutlined, NotificationOutlined, CopyOutlined, SafetyOutlined, RocketOutlined}
}
</script>

<style scoped>
/deep/ .ant-menu-submenu-title:hover {
    background-color: rgb(242, 245, 246);
}

/deep/ .ant-menu-item {
    padding: 0 8px;
}

/deep/ .ant-menu-submenu-title {
    padding: 0 8px;
}

/deep/ .ant-menu-item:hover {
    color: #ffa430 !important;
}

/deep/ .ant-menu-submenu-active {
    color: #ffa430 !important;
}

/deep/ .ant-menu-submenu-title:hover {
    color: #ffa430 !important;
}

/deep/ .ant-menu-item-active svg {
    color: #ffa430 !important;
}

.user-info .ant-col {
    line-height: 30px;
    text-align: center;
}

.user-info .ant-col a:hover {
    color: #ffa430;
}

/deep/ .ant-menu-item-selected {
    background-color: unset !important;
    color: rgba(0, 0, 0, 0.85) !important;
}

/deep/ .ant-menu-item-selected a {
    color: rgba(0, 0, 0, 0.85) !important;
}

.user-info div.info {
    line-height: 16px;
    margin-top: 10px;
    color: rgba(0, 0, 0, 0.85);
}

.ant-btn-round {
    height: 20px !important;
    line-height: 12px !important;
    padding: 4px !important;
}
</style>