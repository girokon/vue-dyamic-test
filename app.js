const Koa = require('koa');
const views = require('koa-views');
const app = new Koa();

app.use(views(__dirname + '/views', {
    map: {
        html: 'nunjucks'
    }
}));


app.use(async (ctx) => {
    if (ctx.query.table) {
        await ctx.render('table.html')
    } else {
        await ctx.render('index.html')
    }

});

app.listen(3001);