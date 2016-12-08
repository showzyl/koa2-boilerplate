/**
 * Created by showzyl on 2016/12/7.
 */

'use strict'


const router = require('koa-router')();

const article = require('./article');

router.get('/', async function (ctx, next) {
	ctx.state = {
		title: 'koa2 title'
	};

	await ctx.render('index', {
		user: 'lizi'
	});
});

router.get('/t', article);

module.exports = router;









