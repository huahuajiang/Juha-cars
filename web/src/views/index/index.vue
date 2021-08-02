<template>
  <div>
    <!--cars data渲染-->
    <!-- <Cars /> -->
    <!--地图-->
    <Map />
    <!--导航-->
    <Navbar />
    <!--会员-->
    <!-- <div id="children-view" :class="[show?'open':'']"> -->
    <div id="children-view" :class="{ open: show }">
      <router-view />
    </div>
  </div>
</template>
<script>
import Map from "../amap/index";
import Cars from "../cars/index";
import Navbar from "@c/navbar/index";
export default {
  name: "Index",
  components: { Map, Cars, Navbar },
  data() {
    return {
      //show:false
    };
  },
  computed: {
    show() {
      const router = this.$route;
      return router.name === "Index" ? false : true;
    },
  },
  mounted() {
    document.addEventListener("mouseup", (e) => {
      const userCon = document.getElementById("children-view");
      if (userCon && !userCon.contains(e.target)) {
        this.$router.push({
          name: "Index",
        });
      }
    });
  },
  watch: {
    // "$route":{
    //     handler(newValue){
    //         const routerName=newValue.name;
    //         this.show=routerName==="Index"?false:true;
    //     }
    // }
  },
};
</script>
<style lang="scss">
#children-view {
  position: fixed;
  top: 0;
  bottom: 0;
  right: -600px;
  z-index: 101;
  width: 410px;
  background-color: #34393f;
  @include webkit(transition, all 0.3s ease 0s);
  @include webkit(box-shadow, all 0.3s ease 0s);
  &.open {
    right: 0;
  }
}
</style>
