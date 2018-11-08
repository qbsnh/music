<template>
    <div class="play">
        
        <div class="bottom-audio"  >
            <img :src="imgs" alt="">
            
                <div class="singmess" @click="removeba">
                    <p>{{songName}}</p>
                    <p>{{singer}}</p> 
                </div>

               <span class="bf">
                    <i class="iconfont icon-bofang" @click="vuetouch()" ref='i'>
                        <audio :src="pid" ref="audio" autoplay></audio>
                    </i>
                </span>    
                <span class="singlb">
                    <i class="iconfont icon-yinle101 "></i>
                </span>
               
        </div>
           
        <div class="Player-center" ref=playing>

                <div class="Player-top">
                    <span @click="back"><i class="iconfont icon-fanhui1" ></i></span>
                    <div>
                        <p>{{singer}}</p>
                        <p>{{songName}}</p>
                    </div>
                </div>

                <div class="SongsLrc">
                    <ul ref='ulLrc'>
                      
                    </ul>
                </div>
                
                <div class="Player-bottom">
                    <span><i class="iconfont icon-xunhuanbofang"></i></span>
                    <span><i class="iconfont icon-diyiyeshouyeshangyishou" @click="prev()"></i></span>
                    <span>
                        <i class="iconfont icon-bofang1" @click="vuetouch()" ref="ib"></i>
                    </span><!--全屏播放界面的播放暂停键-->
                    <span><i class="iconfont icon-zuihouyiyemoyexiayishou" @click="next()"></i></span>
                    <span><i class="iconfont icon-liebiao"></i></span>
                </div>
                <div class="progress-bar">
                    <ul >
                        <span class="ptime"></span>
                        <div class="pmove"></div>
                        <li class="pbar"></li>
                        <span class="alltime"></span>
                    </ul>
                </div>
            </div>
    </div>
</template>

<script>
import axios from "axios";
import store from "@/vuex/store";
import jquery from 'jquery'

import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: "Playing",
  data() {
    return {
      flag: true
    };
  },
  computed: {
    ...mapState(["pid", "songName", "singer", "imgs",'lrc']) //歌曲数据
  },
  store,
  methods: {
    vuetouch() {
      if (this.flag) {
        console.log(this.$refs.audio);
        this.$refs.audio.pause();
        this.$refs.i.className = "icon-plus-pause iconfont";
        this.$refs.ib.className='icon-stop iconfont'
        this.flag = !this.flag;
      } else {
        this.$refs.audio.play();
        this.$refs.i.className = "icon-bofang iconfont";
        this.$refs.ib.className='icon-bofang1 iconfont'
        this.flag = !this.flag;
      }

    },

    removeba() {

        var that=this
        that.$refs.ulLrc.innerHTML=''
        console.log(that.$refs.ulLrc)
        this.$refs.playing.style.display = "block";
        let lrcs=store.state.lrc
        console.log(lrcs)
        let arr=new Array()//时间

        let now =null

        let arrlrc=new Array()//处理时间
        var txt=null

        for(var i=0;i<lrcs.length;i++){
            
                    txt=lrcs[i].split(']')
                    var lis=document.createElement('li')
                    lis.innerHTML=txt[1]
                    that.$refs.ulLrc.appendChild(lis)
                    arr[i]=txt[0]

            }
        // console.log(lrcs)
        // console.log(arr)
        for(var i=0;i<arr.length;i++){
        arrlrc[i]=arr[i].slice(0,2)*60+arr[i].slice(3,7)*1//
        }
        // console.log(arrlrc)
        this.$refs.audio.addEventListener('timeupdate',function(){

            let adtime=this.currentTime
            // console.log(adtime)
            for(var i=0;i<arrlrc.length;i++){
                if(adtime>=arrlrc[i]){
                    // arr[i].style
                    // console.log(i)
                for(var j=0;j<arrlrc.length;j++){
                    that.$refs.ulLrc.querySelectorAll('li')[j].style.color='rgb(244, 244, 244)'
                }
                that.$refs.ulLrc.querySelectorAll('li')[i].style.color='#97ffb5'
                that.$refs.ulLrc.style.top=200-that.$refs.ulLrc.querySelectorAll('li')[i].offsetTop+'px'
                }else{
                    // console.log('0000000')
                }
            }
            })
    
        },
        back() {
        this.$refs.playing.style.display = "none";
        },
        /* this.$refs.audio.addEventListener('timeupdate',function(){

        }) */
        next(){
            for(let k = 0; k < ids.length; k++){
                if(ids[k] == id){
                    count = k;
                }
            }

        }
    }

};
</script>

<style>
.play {
    min-width: 320px;
    max-width: 640px;
    width: 100%;
    margin: 0 auto;
    position: absolute;
    bottom: 0;
        height: 100%;
}
.play .bottom-audio {
  width: 100%;
  height: 4rem;
  position: absolute;
  bottom: 0;
  z-index: 0;
  background:-webkit-gradient(linear, 0 0, 100% 100%, from(#d7ebff),to(#f7e9e2));
}
.bottom-audio img {
  display: block;
  width: 3rem;
  height: 3rem;
  position: absolute;
  border-radius: 1.5rem;
  left: 0.5rem;
  bottom: 0.4rem;
}
.bottom-audio .singmess {
  box-sizing: border-box;
  width: 100%;
  padding-left: 4rem;
  height: 100%;
  padding-top: 0.6rem;
}
.bottom-audio .singlb {
  right: 0;
}
.bottom-audio .bf {
  right: 3rem;
}
.bottom-audio span {
  display: block;
  width: 3rem;
  height: 3rem;
  position: absolute;
  bottom: 0;
}
.bottom-audio span i {
  text-align: center;
  color: aquamarine;
  line-height: 3rem;
  font-size: 2rem;
}

.bottom-audio a {
  color: #333;
}
audio {
  height: 100%;
  width: 100%;
}
.Player-center {
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: none;
  /* filter: blur(0.4px) brightness(0.8); */

  /* background:rgb(224, 241, 242); */
  background: -webkit-gradient(linear, 0 0, 100% 100%, from(#ace),to(#ffb48f));
}
.Player-top{
    width: 100%;
    height: 3rem;
}
.Player-top span{
    width: 2rem;
    height:2rem;
    padding: 0.5rem;
    position: absolute;
    left: 0;
}
.Player-top span i{
    font-size: 2.6rem;
    text-align: center;
}
.Player-top div{
    height: 3rem;
    width: 100%;
    box-sizing: border-box;
    padding-left: 4rem;
}
.SongsLrc{
    margin-top: 1rem;
    width: 100%;
    height: 80%;
    position: relative;
    overflow: hidden;
}
.SongsLrc ul{
    width: 100%;
    margin: auto;
    list-style: none;
    position: absolute;
    top: 200px;
    transition: top 0.1s;

}
.SongsLrc ul li{
    text-align: center;
    font-size: 1.6rem;
}
.Player-bottom{
    position: absolute;
    bottom:1rem;
    width: 100%;
    display: flex;
    justify-content: space-around;

}
.Player-bottom .icon-stop{
    font-size: 2rem;
}
.Player-bottom i{
    color: white;
}
.Player-bottom .icon-xunhuanbofang{
    font-size: 2rem;
}
.Player-bottom .icon-diyiyeshouyeshangyishou{
    font-size: 2rem;
}
.Player-bottom .icon-bofang1{
    font-size: 2rem;
}
.Player-bottom .icon-zuihouyiyemoyexiayishou{
    font-size: 2rem;
}
.Player-bottom .icon-liebiao{
    font-size: 1.7rem;
}
</style>
