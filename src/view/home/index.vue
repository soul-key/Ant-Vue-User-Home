<template>
    <a-layout>
        <a-layout-header>
            <HomeMenu></HomeMenu>
        </a-layout-header>
        <a-layout-content>
            <HomeCarousel></HomeCarousel>
            <HomeRecommend></HomeRecommend>
            <home-kefu></home-kefu>
        </a-layout-content>
        <a-layout-footer>
            <HomeFooter></HomeFooter>
        </a-layout-footer>
    </a-layout>
</template>
<script>
import {defineComponent} from 'vue';
import HomeMenu from "@/view/home/components/menu.vue";
import HomeCarousel from "@/view/home/components/carousel.vue";
import HomeRecommend from "@/view/home/components/recommend.vue";
import HomeFooter from "@/view/home/components/footer.vue";
import HomeKefu from "@/view/home/components/kefu.vue";
export default defineComponent({
    name: "HomeIndex",
    components: {HomeKefu, HomeFooter, HomeRecommend, HomeCarousel, HomeMenu},
    setup() {
    },
});
</script>
<style scoped>
.ant-layout-header{
    padding: 0;
    height: 42px;
    line-height: 42px;
}
</style>
<style>
.ant-affix{
    width: 100% !important;
}
</style>