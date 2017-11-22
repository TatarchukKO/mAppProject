class Article {

  constructor(title = '', content = '', tags = [], imgs = []) {
    this.title = title;
    this.content = content;
    this.tags = tags;
    this.imgs = imgs;
  }

  get() {
    return {
      title: this.title,
      content: this.content,
      tags: this.tags,
      imgs: this.imgs
    };
  }

  set(title = '', content = '', tags = [], imgs = []) {
    this.title = title;
    this.content = content;
    this.tags = tags;
    this.imgs = imgs;
  }
  
}

// let a = new Article('a', 'b', ['t'], ['i']);
// console.log(a.get());
// a.set('title', 'content', ['tags'], ['imgs']);
// console.log(a.get());

module.exports = Article;