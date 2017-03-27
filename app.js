/**
 * Created by showzyl on 2016/12/7.
 */

'use strict';

const Koa = require('koa');
const router = require('koa-router')();
const logger = require('koa-logger');
const assets = require('koa-static');
const views = require('koa-views');
const port = 3100;

const app = new Koa();

// middleware logger
app.use(logger());

// middleware assets
app.use(assets(__dirname + '/assets/'));

// middleware router
app.use(router.routes());

// template engine
app.use(views(__dirname + '/views', { map: {html: 'nunjucks' }}));

// all routes
app.use(async (ctx, next) => {
	await require('./routes/').routes()(ctx, next)
});


app.listen(port, () => {
	console.log(`open http://127.0.0.1:${port}`)
});










