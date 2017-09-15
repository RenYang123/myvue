<template>
    <div>
          <ul class="uls">            
            <router-link :to="{name:'hot'}" tag="li" active-class="On">热门</router-link> 
            <router-link tag="li" :to="{name:'part'}" active-class="On">分类</router-link> 
            <router-link tag="li" :to="{name:'jing'}" active-class="On">精品</router-link>
            <router-link tag="li" :to="{name:'zhi'}" active-class="On">直播</router-link>
            <router-link tag="li" :to="{name:'guang'}" active-class="On">广播</router-link>    
        </ul> 
         <div>
              <router-view></router-view>  
        </div>          
    </div>
</template>    
<script>
  export default{
    name:"index",
    data(){
        return{
            tab:"首页"
        }
    },
   
  }
</script>  
<style>
.On{
    color:#FD5544;
    border-bottom:1px solid #FD5544;
}
</style>
        