/**
 * Created by showzyl on 2016/12/7.
 */

'use strict'


const router = require('koa-router')();

router.get('/', async function (ctx, next) {
	ctx.state = {
		title: 'koa2 title'
	};

	await ctx.render('index', {
		user: 'John'
	});
});

module.exports = router;


// module.exports = function (path, app, router) {
// 	console.log(path, app, router);
// 	router.get(path, function () {
// 		console.log('index');
// 		const me = this;
// 		// this.body = '首页';
// 		app.use(async function () {
// 			await me.render('index', {
// 				user: 'John'
// 			});
// 		});
//		
// 		// app.use(async function (ctx) {
// 		// 	console.log(ctx);
// 		// 	await ctx.render('index', {
// 		// 		user: 'John'
// 		// 	});
// 		// });
// 	});
// 	// this.body = '首页'
// };








