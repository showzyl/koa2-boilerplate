/**
 * Created by showzyl on 2016/12/9.
 */

'use strict'

module.exports = async function (ctx, next) {
	await ctx.render('t', {
		user: 'ttttttt'
	});
};








