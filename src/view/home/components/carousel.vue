<template>
    <a-carousel autoplay>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
    </a-carousel>
</template>

<script>
export default {
    name: "HomeCarousel"
}
</script>

<style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
    text-align: center;
    height: 320px;
    line-height: 320px;
    background: #364d79;
    overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
    color: #fff;
}
</style>