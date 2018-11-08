<template>
    <div class="ssAbout" >
        <ul>
             <li v-for='(v,i) in sj' :key="i" @click='postId(v.id)'>
                <router-link to class='tz'>
                        <span class="tb">
                             <i class="iconfont icon-sousuo1"></i>
                        </span>                           
                        {{v.name}}&nbsp;&nbsp;{{v.singer}} 
                </router-link>
            </li>             
        </ul>
    </div>
</template>
<script>
import store from '@/vuex/store'
import {mapState,mapMutations,mapGetters} from 'vuex';
export default {
    name:'ssAbout',
    
    store,
    data(){
        return{

        }
    },
    methods:mapMutations(['postId']),
    computed:{
            ...mapState(["sj"]),
    },
}
</script>
<style>

.ssAbout{
    width: 100%;
   }
.ssAbout ul{
    width: 100%;
    margin-top: 0.2rem;
}
.ssAbout ul li a{
    padding-left: 1rem;
    display: block;
    width: 100%;
    height: 4rem;
    color: black;
    line-height: 4rem;
    font-size: 1.2rem;
}

.ssAbout ul li a span{
    width: 2.5rem;
    height: 4rem;
    padding: 0.5rem;
}
.ssAbout ul li a span i{
    text-align: center;
    font-size: 1.6rem;
    color: aquamarine;
}

</style>

