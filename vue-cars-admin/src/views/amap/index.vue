<template>
    <div class="amap-wrap">
        <el-amap vid="amapContainer" :events="events" class="amap-demo"></el-amap>
    </div>
</template>
<script>
import { AMapManager,lazyAMapApiLoaderInstance } from 'vue-amap';
//方法
import {getLonLag} from "./common";
import {addressSetMapCenter} from "./location";
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
        const _this=this;
        lazyAMapApiLoaderInstance.load().then(()=>{
            this.map=new AMap.Map('amapContainer',{
                center:new AMap.LngLat(116.404765,39.918052),
                zoom:this.zoom
            });
            this.map.on("click",function(e){
                const lonlag=getLonLag(e);
                _this.$emit("lonlag",lonlag);
            })
        })
    },
    methods:{
        setMapCenter(value){
            addressSetMapCenter(value,this.map);
        }
    }
}
</script>
<style lang="scss">
.amap-wrap{height: 100%;}
</style>
