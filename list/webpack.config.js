var webpack=require("webpack");
var HtmlWebpackPlugin=require("html-webpack-plugin");
module.exports={
	entry:__dirname+"/src/main.js",
	output:{
		path:__dirname+"/dist",
		filename:"[name].js"
	},
	module:{
		rules:[
          {
          	  test:/\.js$/,
          	  loader:"babel-loader"
          },
          {
          	  test:/\.vue$/,
          	  loader:"vue-loader"
          },
          {
          	  test:/\.html$/,
          	  loader:"html-loader"
          },
          {
          	  test:/\.css$/,
          	  use:["style-loader","css-loader"]
          },
          {
          	  test:/\.jpg|.png$/,
          	  loader:"url-loader"
          }
		]
	},
  devtool:"cheap-module-eval-source-map",
	devServer:{
        port:8090,
        host:"localhost",
        hot:true
	},
	plugins:[
	   new webpack.optimize.UglifyJsPlugin(),
       new webpack.HotModuleReplacementPlugin(),
       new HtmlWebpackPlugin({
       	 template:"./index.html"
       })
	]
}