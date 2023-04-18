<template>
    <a-affix :style="{ position: 'fixed', top: '48%', right: '5px'}">
        <a-button type="primary" ghost>
            <QqOutlined ></QqOutlined>联系客服
        </a-button>
    </a-affix>
</template>

<script>
import {QqOutlined} from "@ant-design/icons-vue";

export default {
    name: "HomeKefu",
    components: {QqOutlined}
}
</script>

<style scoped>

</style>