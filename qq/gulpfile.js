var gulp=require("gulp");
var webserver = require("gulp-webserver");
var urlTool = require("url");
var json=[
    {
    	src:"images/s1.jpg",
    	tit1:"QQ看点",
    	tit2:"[精选]西安版迪丽热巴 逗比王宝强",
        time:"下午7:19",
    },
    {
    	src:"images/s2.jpg",
    	tit1:"腾讯新闻",
    	tit2:"萌妹子叫“黄埔军校”开学3天火了",
        time:"下午7:18",
    },
    {
    	src:"images/s3.jpg",
    	tit1:"时光不老，我们不散",
    	tit2:"[有关注内容]纯情小美女：对了哦",
        time:"下午7:18",
    },
    {
    	src:"images/s4.jpg",
    	tit1:"一声问候",
    	tit2:"朋友生日要到了，送个祝福吧",
        time:"下午5:25",
    },
    {
    	src:"images/s5.jpg",
    	tit1:"李泽",
    	tit2:"在干嘛呢？",
        time:"下午6:10",
    },
    {
    	src:"images/s6.jpg",
    	tit1:"公子扶苏",
    	tit2:"哈哈哈",
        time:"下午5:19",
    },
    {
    	src:"images/s7.jpg",
    	tit1:"刘倩倩",
    	tit2:"ok",
        time:"下午4:04",
    }
 ]
gulp.task("shop",function(){
        gulp.src("gulp")
        .pipe(webserver({
            port:8090,
            middleware:function(req,res,next){
                var method=req.method,
                    pathName=urlTool.parse(req.url).pathname;
                    console.log(method)
                    if(method=="GET"){
                         res.setHeader('Access-Control-Allow-Origin','*');
                        switch(pathName){
                            case "/index":
                                res.setHeader('content-type','text/html;charset="utf-8"');
                                res.write(JSON.stringify(json));
                                res.end();
                            break;
                        }

                    }else if(method=="POST"){
                        res.writeHead("Access-Control-Allow-Origin","*");
                    }else if(method=="OPTIONS"){
                       res.writeHead(200,{
                        "Content-Type":"application/json",
                        'Access-Control-Allow-Origin':'*',
                        'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE',
                        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
                    });
                    res.end(); 
                    }
            }
        }))
    })
gulp.task("default",["shop"]);