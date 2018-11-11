项目名称:csf

项目类型:音乐app
 
 fun()处理
 store() vuex数据库
项目规划:
    一 歌曲搜索功能(模块)
        1. input:v-model='歌名' 
        2. v-on :key up=fun(歌名) => axios 获取相关歌曲信息的列表{response} => data {搜歌生成相关列表songlist =response, store(sl=this.songlist)}
        3. li v-for(v,i in sl) @click=( jsfun(v.id) ,store(id=this.id)添加id进入数据仓库) jsfun =>axios处理歌名 歌手 图片 歌词

    二 每日推荐

    
        1. 全局组件=> 
    三 歌单 
        1.创建歌单
        2.推荐歌单

    四 排行榜 每日推荐
    end 歌曲播放功能(模块)
   
