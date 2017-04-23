'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = 'hi, egg';
    }
    * query() {
      // this.ctx.body = 'hello world!';
       const type = this.query.type;
       const q = this.query.q || 'nodejs';
       if(type === 'bing') {
         redirect(`http://cn.bing.com/search?q=${q}`);
       } else {
         redirect(`https://www.goole.co.kr/search?q=${q}`);
       }
    }
    * list() {
      const dataList = {
        list: [
          { id: 1, title: 'this is news 1', url: '/news/1' },
          { id: 2, title: 'this is news 2', url: '/news/2' },
          { id: 3, title: 'this is news 3', url: '/news/3' },
        ],
      };
      yield this.ctx.render('list.tpl', dataList);
    }
    * data(data) {
      // console.log(require('../../config/config.test.js').prod);
      this.ctx.body = 'hello, ' + decodeURIComponent(data.url.substring(1));
    }
  }
  return HomeController;
};
