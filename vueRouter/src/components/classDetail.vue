<template>
    <div>
        这是一个{{tab}}页面
    </div>
</template>    
<script>
  export default{
    name:"index",
    data(){
        return{
            tab:""
        }
    },
    created(){
        this.tab=this.$route.params.con;
    }
  }
</script>  
<style>

</style>
        