<template>
    <div class="amap-wrap">
        <el-amap vid="amapContainer" :events="events" class="amap-demo"></el-amap>
    </div>
</template>
<script>
import { AMapManager,lazyAMapApiLoaderInstance } from 'vue-amap';
export default{
    name:"Amap",
    data(){
        return{
            map:null,
            zoom:18,          
            events:{}
        }
    },
    mounted(){
        lazyAMapApiLoaderInstance.load().then(()=>{
            this.map=new AMap.Map('amapContainer',{
                center:new AMap.LngLat(116.404765,39.918052),
                zoom:this.zoom
            })
        })
    }
}
</script>
<style lang="scss">
.amap-wrap{height: 100vh;}
</style>
