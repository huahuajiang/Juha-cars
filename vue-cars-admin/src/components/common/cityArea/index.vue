<template>
    <el-cascader
          v-model="value"
          :options="cascader_options"
          :props="cascader_props"
          @change="changeVaule"
        ></el-cascader>
</template>
<script>
import {GetCity} from "@/api/common";
export default {
    data(){
        return{
            value:"",
            cascader_options:[],
            cascader_props:{
                lazy:true,
                lazyLoad(node,resolve){
                console.log(node)
                const level=node.level;
                //请求参数
                const requestData={};

                const jsonType={
                    0:{type:"province"},
                    1:{type:"city",code:"province"},
                    2:{type:"area",code:"city"}
                }
                if(jsonType[level].code){
                    requestData[`${jsonType[level].code}_code`]=node.value
                }
                //type
                requestData.type=jsonType[level].type;
                //省市区的接口
                GetCity(requestData).then(resonse=>{
                    const data=resonse.data.data;
                    //类型
                    const type=jsonType[level].type.toUpperCase();
                    //自定义value、label
                    data.forEach(item=>{
                        item.value=item[`${type}_CODE`];
                        item.label=item[`${type}_NAME`];
                        //最后一层选择
                        if(level===2){item.leaf=level>=2;}
                    })
                    //返回节点数据
                    resolve(resonse.data.data);
                })
                }
            }
        }
    },
    methods:{
        changeVaule(value){
            this.$emit("update:cityAreaValue",value.join())
        }
    },
    props:{
        cityAreaValue:{
            type:String,
            default:""
        }
    }
}
</script>