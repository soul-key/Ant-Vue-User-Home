<template>
    <a-row style="padding-left: 30px;">
        <a-col :span="12">
            <a-statistic title="Active Users" :value="112893" style="margin-right: 50px" />
        </a-col>
        <a-col :span="12">
            <a-statistic title="Account Balance (CNY)" :precision="2" :value="112893" />
        </a-col>
    </a-row>
    <div style="background: #ececec; padding: 30px">
        <a-row :gutter="16">
            <a-col :span="12">
                <a-card>
                    <a-statistic
                        title="Feedback"
                        :value="11.28"
                        :precision="2"
                        suffix="%"
                        :value-style="{ color: '#3f8600' }"
                        style="margin-right: 50px"
                    >
                        <template #prefix>
                            <arrow-up-outlined />
                        </template>
                    </a-statistic>
                </a-card>
            </a-col>
            <a-col :span="12">
                <a-card>
                    <a-statistic
                        title="Idle"
                        :value="9.3"
                        :precision="2"
                        suffix="%"
                        class="demo-class"
                        :value-style="{ color: '#cf1322' }"
                    >
                        <template #prefix>
                            <arrow-down-outlined />
                        </template>
                    </a-statistic>
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>
<script>
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons-vue';
export default {
    name: "UserWorker",
    components: {
        ArrowUpOutlined,
        ArrowDownOutlined,
    },
}
</script>

<style scoped>

</style>