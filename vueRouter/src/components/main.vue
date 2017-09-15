<template>
    <div class="wrap">
    <header>
        <i class="iconfont">&#xe68e;</i>
        <p><i class="iconfont">&#xe729;</i><input type="text" placeholder="观察|嘟嘟|鬼故事"></p>
        <i class="iconfont">&#xe6b3;</i>
        <i class="iconfont">&#xe707;</i>
    </header>
    <section>
        <router-view></router-view>
    </section>
    <footer>
        <ul>
            <router-link tag="li" to="/" active-class="on"><i class="iconfont">&#xe6cd;</i><span>首页</span></router-link>
            <router-link tag="li" to="/listen" active-class="on"><i class="iconfont">&#xe6ea;</i><span>我听</span></router-link>
            <li><span></span></li>
            <router-link tag="li" to="/find" active-class="on"><i class="iconfont">&#xe6f7;</i><span>发现</span></router-link>
            <router-link tag="li" to="/sign" active-class="on"><i class="iconfont">&#xe6cc;</i><span>未登录</span></router-link>
            <div class="po"><div></div></div>
        </ul>
    </footer>
</div>
</template>    
<script>
  export default{
    name:"index",
    data(){
        return{
            tab:"发现页"
        }
    }

  }
</script>  
<style>
 .on{
     color:#FD5544;
 }
</style>
        