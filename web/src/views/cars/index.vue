<template>
    <div class="cars-wrap">
        <div class="cars-swiper-wrap">
            <swiper class="swiper"  ref="hits" :options="swiperOption">
                <swiper-slide>
                    <CarsItem height="800px"/>
                </swiper-slide>
                <swiper-slide>
                    <CarsItem/>
                </swiper-slide>
                <swiper-slide>
                    <CarsItem/>
                </swiper-slide>
                <swiper-slide>
                    <CarsItem/>
                </swiper-slide>
                <swiper-slide>
                    <CarsItem/>
                </swiper-slide>
            </swiper>
            <div class="swiper-button-prev" @click="prev"></div>
            <div class="swiper-button-next" @click="next" slot="button-next"></div>
        </div>
        <span @click="user">cars</span>
    </div>
</template>
<script>
import CarsItem from "@c/carsList";
import {Swiper,SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
export default{
    name:"Cars",
    components:{CarsItem,Swiper,SwiperSlide},
    data(){
        return{
            swiperOption:{
                slidesPerView:3,
                spaceBetween:30,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }
        }
    },
    methods:{
        user(){
            this.$router.push({
                name:"User"
            })
        },
        prev(){
            this.$refs.hits.$swiper.slidePrev();
        },
        next(){
            this.$refs.hits.$swiper.slideNext();
        }
    }
}
</script>
<style lang="scss">
@import "./index.scss"
</style>
