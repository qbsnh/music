<template>
    <div class="banner">
        
        <mt-swipe :auto="4000">
            <mt-swipe-item><img src="http://p1.music.126.net/rkC6HyUdSik1YC6pEMD_iw==/109951163652964202.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="http://p1.music.126.net/kRhmhavKL70pmTTE1lZ5Gw==/109951163653372712.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="http://p1.music.126.net/lyxXrIs-hC0pQcnDOowr8Q==/109951163651367860.jpg" alt=""></mt-swipe-item>
        </mt-swipe>
    </div>

</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "mint-ui";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  name: "banners",
  data() {
    return {};
  },
  methods: {
  
}
};
</script>

<style >
.banner {
  width: 100%;
  position: relative;
  height: 13.5rem;
}
.mint-swipe .mint-swipe-items-wrap{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #92e2d4;
}
/* .mint-swipe .mint-swipe-item{
    position: absolute;
     width: 100%;
    height: 100%;
} */

.banner img {
    position: absolute;
    width: 100%;
    height: 13.5rem;
}


</style>

