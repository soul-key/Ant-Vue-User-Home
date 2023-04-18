<template>
    <a-button type="text" @click="showModal" style="height: 42px;">登录</a-button>
    <a-modal
            v-model:visible="visible"
            :centered="true"
            @cancel="hideModal"
            :maskClosable="false"
            :footer="null"
            width="428px"
    >
        <div class="w-100% flex flex-col select-none overflow-hidden">
            <div class="text-20px font-medium mb-16px">欢迎回来</div>
            <div class="flex gap-16px children-flex-1 children-font-medium children-h-48px children-flex children-items-center children-justify-center">
                <button class="ant-btn" type="button">
                    <WechatOutlined style="font-size: 18px;color:rgb(0,186,97)"/>
                    <span>微信登录</span>
                </button>
            </div>
            <div>
                <div class="ant-divider ant-divider-horizontal ant-divider-with-text ant-divider-with-text-center"
                     role="separator">
                    <span class="ant-divider-inner-text">
                        <span class="color-#C5C5C5 text-12px font-normal">或</span>
                    </span>
                </div>
            </div>
            <a-form
                    :model="formState"
                    name="basic"
                    autocomplete="off"
                    ref="fromRef"
            >
                <a-form-item
                        name="username"
                        :rules="[{ required: true, message: '请输入手机号或邮箱!' },{validator:userNameCheck.bind(this)}]"
                >
                    <a-input v-model:value="formState.username" placeholder="手机号/邮箱">
                        <template #prefix>
                            <UserOutlined style="color: rgba(0, 133, 249, 0.25)"/>
                        </template>
                    </a-input>
                </a-form-item>
                <a-form-item v-if="!smsLogin"
                             name="password"
                             :rules="[{ required: true, message: '请输入密码!' }]"
                >
                    <a-input-password v-model:value="formState.password" placeholder="密码">
                        <template #prefix>
                            <LockOutlined style="color: rgba(0, 133, 249, 0.25)"/>
                        </template>
                    </a-input-password>
                </a-form-item>
                <a-space v-if="smsLogin">
                    <a-form-item style="width: 270px;" name="code"
                                 :rules="[{required: codeRequired, message: '请输入验证码!' }]">
                        <a-input v-model:value="formState.code" placeholder="验证码">
                            <template #prefix>
                                <MessageOutlined style="color: rgba(0, 133, 249, 0.25)"></MessageOutlined>
                            </template>
                        </a-input>
                    </a-form-item>
                    <a-form-item>
                        <a-button type="primary" @click="getCode" :disabled="codeButton" style="width: 102px;">
                            {{ codeButtonText }}
                        </a-button>
                    </a-form-item>
                </a-space>
            </a-form>
            <div class="flex justify-between mb-12px">
                <a target="_blank" href="/account/reset" class="color-$primary-color cursor-pointer"> 忘记密码 </a>
                <span class="color-$primary-color cursor-pointer" @click="showSms">{{ loginType }}登录 </span>
            </div>
            <a-button type="primary" @click="onSubmit">登录</a-button>
            <div class="self-center" style="margin-top: 16px;">
                <span>还没有账号？</span>
                <span class="color-$primary-color cursor-pointer">
                    <RegisterAlert @hideModal="hideModal" @showModal="showModal"></RegisterAlert>
                </span>
            </div>
        </div>
    </a-modal>
</template>

<script>
import {LockOutlined, MessageOutlined, UserOutlined, WechatOutlined} from "@ant-design/icons-vue";
import {reactive, ref} from "vue";
import RegisterAlert from "@/view/home/components/login/register.vue";

export default {
    name: "LoginAlert",
    components: {MessageOutlined, RegisterAlert, UserOutlined, LockOutlined, WechatOutlined},
    methods: {},
    setup() {
        const fromRef = ref(null)  //用来保存上边a-form中的ref
        //弹窗
        const visible = ref(false);
        const smsLogin = ref(false);
        const codeButton = ref(false);
        const codeRequired = ref(true);//验证码默认为必填项，点击获取验证码时为非必填
        const loginType = ref("验证码");
        const codeButtonText = ref("获取验证码");
        const showModal = () => {
            visible.value = true;
        };
        const hideModal = () => {
            visible.value = false;
            fromRef.value.resetFields();
        };
        //end

        const showSms = () => {
            smsLogin.value = !smsLogin.value;
            if (smsLogin.value) {
                loginType.value = "密码"
            } else {
                loginType.value = "验证码"
            }
        };

        //校验规则
        const userNameCheck=(rule, value) =>{
            // 电话号码正则表达式（支持手机号码，3-4位区号，7-8位直播号码，1－4位分机号）
            //const reg =/^(\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$/;

            const regPhone = /^1[3-9]\d{9}$/;// 正则表达式（只支持手机号码）
            const regEmail = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/;
            if (value !=="" && !regPhone.test(value) && !regEmail.test(value)) {
                //注意：新版的Antd使用了React的hooks，所以不能再用 callback
                return Promise.reject("请输入正确的手机号或邮箱");
            }
            return Promise.resolve();
        }


        //login
        const formState = reactive({
            username: '',
            password: '',
            code: '',
            remember: true,
        });
        //登录提交
        const onSubmit = () => {
            codeRequired.value = true;//改为必填
            //设置200毫秒的延迟，避免上面的参数未生效时就触发验证
            setTimeout(function () {
                fromRef.value.validate().then((values) => {
                    console.log('Success:', values);
                }).catch((err) => {
                    console.log('Failed:', err);
                });
            }, 50);
        }
        //获取验证码
        const getCode = () => {
            codeRequired.value = false;//改为非必填
            //设置200毫秒的延迟，避免上面的参数未生效时就触发验证
            setTimeout(function () {
                fromRef.value.validate().then((values) => {
                    //发送post请求到后台
                    console.log('校验成功，发送post请求，请求参数:', values);

                    //成功后，按钮置灰，并且显示倒计时（这些需放到ajax里面）
                    codeButton.value = true;
                    let time = 10;//倒计时秒数
                    codeButtonText.value = time + "s";
                    let timer = setInterval(function () {
                        time--;
                        if (time <= 0) {
                            clearInterval(timer);
                            codeButton.value = false;
                            codeButtonText.value = "获取验证码";
                            return
                        }
                        codeButtonText.value = time + "s";
                    }, 1000);
                    //倒计时 end
                }).catch((err) => {
                    console.log('Failed:', err);
                });
            }, 50);
        }
        //end-login

        return {
            visible,
            smsLogin,
            loginType,
            showModal,
            hideModal,
            formState,
            fromRef,
            onSubmit,
            showSms,
            codeButton,
            getCode,
            codeRequired,
            codeButtonText,
            userNameCheck,
        }
    }
}
</script>

<style scoped>
.overflow-hidden {
    overflow: hidden;
}

.select-none {
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

.flex-col {
    flex-direction: column;
}

.children-flex > *, .flex {
    display: flex;
}

.w-100\%, .w-full {
    width: 100%;
}

.children-font-medium > *, .font-500, .font-medium {
    font-weight: 500;
}

.text-20px {
    font-size: 20px;
}

.mb-16px {
    margin-bottom: 16px;
}

*, *:before, *:after {
    box-sizing: border-box;
}

.gap-16px {
    grid-gap: 16px;
    gap: 16px;
}

.children-justify-center > *, .justify-center {
    justify-content: center;
}

.children-items-center > *, .items-center {
    align-items: center;
}

.children-flex-1 > *, .flex-1 {
    flex: 1 1 0%;
}

.children-flex > *, .flex {
    display: flex;
}

.children-h-48px > *, .h-48px {
    height: 48px;
}

.justify-between {
    justify-content: space-between;
}

.flex {
    display: flex;
}

.mb-12px {
    margin-bottom: 12px;
}

.cursor-pointer {
    cursor: pointer;
}

.color-\$primary-color {
    color: #1890ff;
}

.self-center {
    align-self: center;
}
</style>
<style>
.ant-input {
    height: 48px;
}

.ant-input-affix-wrapper {
    padding: 0 11px;
    border-radius: 8px;
}

.ant-btn {
    border-radius: 8px;
    height: 48px;
}

.ant-modal-content {
    border-radius: 8px;
}

</style>