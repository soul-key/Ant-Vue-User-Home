<template>
    <div class="homeTit">
        <h2>热门推荐</h2>
        <p>
           <a-divider>HOT RECOMMEND</a-divider>
        </p>

    </div>
    <a-row :gutter="16" style="padding: 0 50px 20px;">
        <a-col :span="6">
            <a-card hoverable class="ant-col-sm-18">
                <template #cover>
                    <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                </template>
                <a-card-meta title="Europe Street beat">
                    <template #description>www.instagram.com</template>
                </a-card-meta>
            </a-card>
        </a-col>
        <a-col :span="6">
            <a-card hoverable class="ant-col-sm-18">
                <template #cover>
                    <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                </template>
                <a-card-meta title="Europe Street beat">
                    <template #description>www.instagram.com</template>
                </a-card-meta>
            </a-card>
        </a-col>
        <a-col :span="6">
            <a-card hoverable class="ant-col-sm-18">
                <template #cover>
                    <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                </template>
                <a-card-meta title="Europe Street beat">
                    <template #description>www.instagram.com</template>
                </a-card-meta>
            </a-card>
        </a-col>
        <a-col :span="6">
            <a-card hoverable class="ant-col-sm-18">
                <template #cover>
                    <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                </template>
                <a-card-meta title="Europe Street beat1">
                    <template #description>www.instagram.com</template>
                </a-card-meta>
            </a-card>
        </a-col>
    </a-row>
</template>

<script>
export default {
    name: "HomeRecommend"
}
</script>

<style scoped>
.homeTit {
    padding: 20px 0;
    text-align: center;
    color: #404040;
}
.ant-col-sm-18{
    margin: 0 auto;
}
</style>
<style>
.ant-card-meta-detail{
    text-align: center;
}
</style>