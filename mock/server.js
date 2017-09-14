const app = require('koa')();
const router = require('koa-router')();

const listData = require('./list/datasource.js');
router.get('/api/list',function *(next){
	console.log('模拟数据：'+ listData);
	this.body = listData;
});

//获取我的页面中tab列表
const myTabs = require('./my/tabs.js')
router.get('/api/my/tabs', function *(next){
	this.body = myTabs
})

//获取我的帮助qaq
const qaq = require('./qaq/qaq.js')
router.get('/api/qaq', function *(next){
	this.body = qaq
})

//获取浏览历史
const historys = require('./history/data.js')
router.get('/api/history',function *(next){
	this.body = historys
})

// router.post('url',function *(next){
// 	//获取参数
// 	this.body = {
// 		errno : 0,
// 		msg : 'ok'
// 	}
// });

//开始服务并生成路由
app.use(router.routes())
	.use(router.allowedMethods());
app.listen(3000);