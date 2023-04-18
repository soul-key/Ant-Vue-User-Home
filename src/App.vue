<template>
    <router-view></router-view>
</template>

<script>

export default {
  name: 'App'
}
</script>
<style>
html::-webkit-scrollbar { /*此处设置滚动条的宽度和高度，宽度为纵向滚动条设置，高度为横向滚动条设置，设置为0的滚动条消失*/
    width: 4px;
    height: 4px;
}
html::-webkit-scrollbar-thumb {/*滚动条滑块样式*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
}
html::-webkit-scrollbar-track {/*滚动条轨道样式*/
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);
}
body{
    position: static;
    overflow-x:hidden;
    overflow-y:auto !important;
    width: 100% !important;
}
.ant-menu{
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
}
</style>