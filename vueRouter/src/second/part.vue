<template>
    <ul class="lis">
         <template v-for="i in list">  
            <router-link tag="li" :to="{name:'classDetail',params:{con:i.txt}}"><i class="iconfont">&#xe68e;</i><span>{{i.txt}}</span></router-link>
        </template> 
    </ul> 
</template>    
<script>
//  var arr=[
//      {
//          bac:"#B8DCB1",
//          txt:"音乐",
//          icon:"&#xe68e;"
//      },
//      {
//          bac:"#D9B598",
//          txt:"历史",
//          icon:"&#xe68e;"
//      },
//       {
//          bac:"#B59AF7",
//          txt:"情感生活",
//          icon:"&#xe68e;"
//      },
//      {
//          bac:"#F1D784",
//          txt:"人文",
//          icon:"&#xe68e;"
//      },
//         {
//          bac:"#E6DEB2",
//          txt:"付费精品",
//          icon:"&#xe68e;"
//      },
//         {
//          bac:"#93E8DE",
//          txt:"脱口秀",
//          icon:"&#xe68e;"
//      },
//         {
//          bac:"#F798BA",
//          txt:"娱乐",
//          icon:"&#xe68e;"
//      },
//         {
//          bac:"#99EEEA",
//          txt:"英语",
//          icon:"&#xe68e;"
//      },
//         {
//          bac:"#73A0E3",
//          txt:"教育培训",
//          icon:"&#xe68e;"
//      },
//         {
//          bac:"#A2D3F1",
//          txt:"小语种",
//          icon:"&#xe68e;"
//      },
//         {
//          bac:"#8EB5F7",
//          txt:"商业财经",
//          icon:"&#xe68e;"
//      },
//         {
//          bac:"#F19296",
//          txt:"健康养牛",
//          icon:"&#xe68e;"
//      },
//         {
//          bac:"#BAECF3",
//          txt:"国学书院",
//          icon:"&#xe68e;"
//      },
//         {
//          bac:"#FC888D",
//          txt:"3D体验馆",
//          icon:"&#xe68e;"
//      },
//         {
//          bac:"#79B0EA",
//          txt:"头条",
//          icon:"&#xe68e;"
//      },
//         {
//          bac:"#EDA785",
//          txt:"广播剧",
//          icon:"&#xe68e;"
//      }

//  ]
  export default{
    name:"index",
    data(){
        return{
            list:""
        }
    },
     beforeRouteEnter(to,from,next){
        next((vm)=>{
            vm.axios.get("/some").then(function(data){
                vm.list=data.data;
                console.log(vm.list)
                // console.log(data)
            })
        })
      }
  }
</script>  
<style>

</style>
        