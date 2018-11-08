<template>
    <div class="csf">
        <header>
            <div>
                <div class="system topicon">
                    <a href="javascript:;">
                        <i class="iconfont icon-xitongcaidan i1"></i>
                    </a>
                </div>
               <div class="ipt">
                    
                     <router-link to='/search'>
                        <input placeholder="搜索音乐"/>
                     </router-link>
               </div>

                <div class="playList topicon">
                    <a href="javascript:;">
                        <i class="iconfont icon-music i2"></i>
                    </a>
                </div>
            </div>
        </header>

        <banners></banners>
        
    </div>
</template>
<script>
import banners from '@/components/banner'

export default {
  name: "HomePage",
  data() {
    return {
       }
  },
  components:{
      banners
  }
   

};

</script>
<style scoped>
    
    .csf,header{
        width: 100%;
    }
    header>div:nth-child(1){
        width: 100%;
        height: 5rem;
        position: relative;
        background: -webkit-gradient(linear,0 50%,100% 50%,from(#ace),to(#f96));/*Old gradient for webkit*/;
    }
    .topicon{
        width: 4rem;
        height: 5rem;
        position: absolute;
       
    }
    .topicon a{
        display: block;
        width: 100%;
        height: 100%;
        padding: 1rem;
        box-sizing: border-box;
    }
    .topicon a i{
        line-height: 3rem;
        text-align: center;
    }
    .i1{
        font-size: 2rem;
        color: aquamarine;
    }
    .i2{
        font-size: 2.1rem;
        color: aquamarine;
    }
    .system{

        left: 0;
    }
    .playList{
        right: 0;
        top: 0;
    }
    .csf .ipt{
        position: relative;
        height: 100%;
        padding: 0 4rem;
        
    }
    .csf .ipt input{
        height: 2.6rem;
        width: 100%;
        margin-top: 1.2rem;
        border-radius: 0.6rem;
        padding: 0 1rem;
        box-sizing: border-box;
        font-size: 1.4rem;
    }


    
</style>



