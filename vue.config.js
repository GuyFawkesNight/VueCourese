const path = require('path')
const resovle = dir =>path.join(__dirname,dir);

const BASE_URL= process.env.NODE_ENV == 'production'?'/iview-admin':'/';

module.exports  = {
	lintOnSave:false,
	baseUrl:BASE_URL,
	//使用@符号代替src，_c代替src/components
	chainWebpack:config=>{
		config.resovle.alias
		.set('@',resovle('src'))
		.set('_c',resovle('src/components'))
	},
	// 打包时不生成.map文件
	productionSourceMap:false,

	//解决跨域问题
	devServer:{
		proxy:'http://localhost:4000'
	}
}