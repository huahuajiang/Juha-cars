<template>
  <div class="parking-add">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="停车场名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="区域">
        <CityArea  :cityAreaValue.sync="form.area"/>
      </el-form-item>
      <el-form-item label="类型">
        <el-radio-group v-model="form.resource">
          <el-radio label="室内"></el-radio>
          <el-radio label="室外"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="可停放车辆">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="禁启用">
        <el-radio-group v-model="form.resource">
          <el-radio label="禁用"></el-radio>
          <el-radio label="启用"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="位置">
        <div class="address-map">
          <AMap @lonlag="aaa"/>
        </div>
      </el-form-item>
      <el-form-item label="经纬度">
        <el-input v-model="form.lonlag"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="danger" @click="onSubmit()">确定</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import AMap from "../amap";
import CityArea from "@c/common/cityArea"
export default {
  name: "ParkingAdd",
  data() {
    return {
      form: {
        area:"",
        name: "",
        resource: "",
        lonlag: "",
      },
      
    };
  },
  components:{AMap,CityArea},
  methods:{
    aaa(data){
      console.log(data);
      this.form.lonlag=data.value;
    },
    onSubmit(){
      console.log(this.form.area)
    }
  }
};
</script>
<style lass="scss" scoped>
.address-map {
  width: 100%;
  height: 500px;
  /* border: 1px solid #ccc; */
}
</style>
