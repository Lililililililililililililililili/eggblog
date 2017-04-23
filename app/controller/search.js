module.exports = function* (ctx) {
       const type = this.query.type;
       const q = this.query.q;
       if(type === 'bing') {
         this.redirect(`http://cn.bing.com/search?q=${q}`);
       } else {
         this.redirect(`https://www.goole.co.kr/search?q=${q}`);
       }
}