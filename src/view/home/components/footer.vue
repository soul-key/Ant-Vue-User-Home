<template>
    <a-row :gutter="16" style="padding: 60px 0;">
        <a-col :span="8">
            <div class="single-widget about">
                <div class="footer-logo">
                    <h2>YM个人博客</h2>
                </div>
                <p>世界那么大，我想去看看</p>
                <div class="button">
                    <a href="#" class="btn layui-btn layui-btn-normal" one-link-mark="yes">About Me</a>
                </div>
            </div>
        </a-col>
        <a-col :span="8">
            <a-descriptions title="相关链接" :column="2">
                <a-descriptions-item >博文</a-descriptions-item>
                <a-descriptions-item >留言</a-descriptions-item>
                <a-descriptions-item >资源</a-descriptions-item>
                <a-descriptions-item >日记</a-descriptions-item>
            </a-descriptions>
        </a-col>
        <a-col :span="8">
            <a-descriptions title="联系我" :column="1" size="small">
                <a-descriptions-item label="QQ">619***490</a-descriptions-item>
                <a-descriptions-item label="邮箱">619***490@qq.com</a-descriptions-item>
                <a-descriptions-item label="地址">
                    北京市***
                </a-descriptions-item>
            </a-descriptions>
        </a-col>
        <a-col :span="24" style="text-align: center;" class="copyright">
            <p>Copyright © 2017-2023 YM个人博客
                <a target="_blank" href="https://beian.miit.gov.cn/">京ICP备1****12号-5</a>
            </p>
        </a-col>
    </a-row>
</template>

<script>
export default {
    name: "HomeFooter"
}
</script>

<style scoped>

</style>
<style>
.ant-layout-footer{
   padding-top: 60px;
    background-color: #404040;
}
.ant-descriptions-title,.ant-descriptions-item-label,.ant-descriptions-item-content,.copyright,.single-widget{
    color: #ddd;
}
.single-widget h2{
    color: #ddd;
}
</style>