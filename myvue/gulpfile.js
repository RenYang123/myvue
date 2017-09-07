var gulp=require("gulp");
var webserver = require("gulp-webserver");
var urlTool = require("url");
var json=[
    {
    	src:"images/s2.jpg",
    	tit1:"【天猫超市】达利园瑞士蛋糕（草莓味）240g/袋(12枚)",
        price:14.9,
        kg:0.24,
        number:1
    },
    {
    	src:"images/s3.jpg",
    	tit1:"【天猫超市】可比克薯我任性2+1袋装薯片122g休闲膨化办公室零食",
        price:10.9,
        kg:0.244,
        number:2
    },
    {
    	src:"images/s4.jpg",
    	tit1:"【天猫超市】达利园派巧克力味涂饰蛋类芯饼20枚休闲食品好享受",
        price:24.9,
        kg:0.5,
        number:1
    },
    {
    	src:"images/s3.jpg",
    	tit1:"【天猫超市】百草味多位花生210g休闲零食炒货特产香辣花生豆",
        price:14.9,
        kg:0.24,
        number:1
    }
 ]
gulp.task("shop",function(){
        gulp.src("gulp")
        .pipe(webserver({
            port:8080,
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