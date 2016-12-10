/**
 * Created by showzyl on 2016/12/7.
 */

'use strict'

const log4js = require('log4js');
const router = require('koa-router')();
const article = require('./article');


log4js.loadAppender('file');
var logger = log4js.getLogger('index');
logger.info('index is in.');

router.get('/', async function (ctx, next) {
	logger.info('success');
	ctx.state = {
		title: 'koa2 title'
	};
	
	await ctx.render('index', {
		user: 'lizi'
	});
});

router.get('/t', article);

module.exports = router;









