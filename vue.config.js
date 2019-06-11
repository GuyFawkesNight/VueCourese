const path = require('path')
const resolve = dir =>path.join(__dirname,dir);

const BASE_URL= process.env.NODE_ENV == 'production'?'/iview-admin':'/';

module.exports  = {
	lintOnSave:false,
	publicPath:BASE_URL,
	//使用@符号代替src，_c代替src/components
	chainWebpack:config=>{
		config.resolve.alias
		.set('@',resolve('src'))
		.set('_c',resolve('src/components'))
	},
	// 打包时不生成.map文件
	productionSourceMap:false,

	//解决跨域问题
	devServer:{
		proxy:'http://localhost:4000'
	}
}