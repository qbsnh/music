import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
Vue.use(Vuex);
const state ={
    sj:null,
    id:null,
    ids:new Array(),
    pid:null,
    songName:null,
    singer:null,
    imgs:null,
    time:new Array(),
    lrc:null,
    count:null
}
const mutations = {//数据的更改操作



   
    songs(s,songData){
        axios.get('https://api.bzqll.com/music/tencent/search?key=579621905&s='+ songData+'&limit=10'
        )
        .then(function (response) {
            console.log(response)
        state.sj=response.data.data 

        console.log(state.sj)
        // console.log(response.data.data.singer)
         
        })
        .catch(function (error) {
            console.log(error);
        })
    },
    postId(s,ids){
        state.id = ids
        state.ids.push(ids)
        console.log(state.ids)
        function getUserAccount(){
            return axios.get('https://api.bzqll.com/music/tencent/song?key=579621905&id='+state.id);
          }
        function getUserPermissions() {
            return axios.get('https://api.bzqll.com/music/tencent/lrc?key=579621905&id='+state.id);
        }
        axios.all([getUserAccount(), getUserPermissions()])
            .then(axios.spread(function (acct, perms) {
                // 两个请求现在都执行完成
                state.pid = JSON.parse(acct.request.response).data.url

                state.songName=JSON.parse(acct.request.response).data.name
                state.singer=JSON.parse(acct.request.response).data.singer
                state.imgs=JSON.parse(acct.request.response).data.pic
                //处理歌词
                state.lrc=perms.data
                state.lrc=state.lrc.split('[')
                state.lrc.splice(0,6)
                for(let i=0,l=state.lrc.length;i<l;i++){
                    state.time.push(state.lrc[i].substring(0,state.lrc[i].indexOf(']')));
                    state.lrc[i]=state.lrc[i].substr(state.lrc[i].indexOf(']')+1);
                } 
                console.log(state.time,state.lrc)                 
                
            }));
        
       
    },
    lrc(s,id){
        console.log(this.id)
        this.id=state.id
        console.log(this.id)
    }
 
}


// const getters={
    
    
// }
export default new Vuex.Store({
    mutations,
    // sj
    state,
    // getters
})