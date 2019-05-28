const request = require("request");
const cheerio = require("cheerio");

request("https://johnpapa.net/", (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    $(".post_head").each((i, el) => {
      const title = $(el)
        .find(".post_title")
        .text()
        .replace(/\s\s+/g, '');
      
      //if white space is included between titles use reg ex:
      // .replace(/\s\s+/g, '');
      const link = $(el)
        .children('.post_title')        
        .find("a")
        .attr("href");

      const date = $(el)
        .find("time")
        .text();

      //console.log(date);
      console.log(title, link, date);
    });
  }
});
