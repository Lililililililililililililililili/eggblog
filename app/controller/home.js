'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      const data = { 
        name: 'eggblog',
        id: '123456',
        interest: 'eat'  
    };
      yield this.ctx.render('list.nj', data);
    }
    * query() {
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
      yield this.ctx.render('list.nj', dataList);
    }
    * data(data) {
      this.ctx.body = 'hello, ' + decodeURIComponent(data.url.substring(1));
    }
  }
  return HomeController;
};
