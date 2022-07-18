class Runoob {
    constructor(name, url) {
      this.name = name;
      this.url = url;
      this.year = 2022
    }
    age(bron) {
        
        return this.year - bron;
      }
  }
   
  let site = new Runoob("菜鸟教程",  "https://www.runoob.com");
  console.log(site.age(1999))