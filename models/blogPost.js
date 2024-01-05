class BlogPost {
    constructor(title, content, author, date) {
      this.title = title;
      this.content = content;
      this.author = author;
      this.date = date || new Date(); 
    }
  }
  
  module.exports = BlogPost;