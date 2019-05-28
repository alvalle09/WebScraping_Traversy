const request = require("request");
const cheerio = require("cheerio");
const fs = require('fs');

// Start streamin to csv file
const writeStream = fs.createWriteStream('post.csv');

// Write headers
// use backticks to avoid using concatenation
writeStream.write(`Title,Link,Date \n`);



request("https://johnpapa.net/", (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    $(".post_head.post").each((i, el) => {
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
      //console.log(title, link, date);

    // Write to csv
    writeStream.write(`${title}, ${link}, ${date} \n`);
    });
  }

  console.log('Scraping done....');
});
