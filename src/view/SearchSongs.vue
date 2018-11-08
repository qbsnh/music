<template>
    <div class="search">
        <div class="search-Main">
            <router-link to='/'>
                <div class="back">
                        <a href="javescript:;" >
                            <i class="iconfont icon-fanhui1"></i>
                        </a>
                </div>
            </router-link>
            <div class="search-box">
                <input type="text" v-model='songData' v-on:keyup='songs(songData)'> 
            </div>
            <div class="del">
                <a href="javescript:;" @click="delipt()">
                    <i class="iconfont icon-qingkong"></i>
                </a>
            </div>
            <!-- <button @click="send">搜索</button> -->
            <ssAbout ref="ss"></ssAbout>            
        </div>
    </div>
</template>
<script>
// import axios from 'axios'
import ssAbout from '@/components/ssAbout'

import store from '@/vuex/store'
import {mapState,mapMutations,mapGetters} from 'vuex';

export default {
  name: "SearchSongs",
  data(){
      return{
          songData:'',
      }
  },
  components:{
      ssAbout//搜歌列表子模块
  },
  methods:{
      ...mapMutations(['songs']),//input搜索歌曲
      delipt(){
          this.songData=""
          this.songs(this.songData)
      }
      
    },
  store,
  


};

</script>

<style scoped>
.search,
.search-Main {
  width: 100%;
}
.search-Main {
  height: 4rem;
  position: relative;
  position: absolute;
 z-index:1;

}
.search-Main .router-link-active{
    width: 4rem;
    height: 4rem;
    position: absolute;
    top: 0;
    z-index: 2;
}
.back {
  position: absolute;
  left: 0;
  width: 4rem;
  height: 4rem;
}
.back a {
  display: block;
  width: 100%;
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
}
.back a i {
  text-align: center;
  line-height: 3rem;
  font-size: 3rem;
  color: aquamarine;
}
.search-box {
  padding-left: 4rem;
  position: relative;
}
.search-box input {
  border-radius: 0;
  box-shadow: 0rem 0rem 0rem 0rem;
  outline: none;
  cursor: pointer;
  width: 98%;
  background: #ffa07a00;
  margin-top: 1.8rem;
  height: 1.8rem;
  border-bottom: 0.1rem solid #ccc;
}
.del{
    position: absolute;
    top: 0;
    right: 0;
    width: 4rem;
    height: 4rem;
}
.del a{
    display: block;
    width: 100%;
    height: 100%;
    padding: 1rem;
  
}
.del a i{
        font-size: 2.6rem;
        line-height: 3rem;
        text-align: center;
        color: aquamarine;
}
</style>
