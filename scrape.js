
const request = require('request');
const cheerio = require('cheerio');

request('https://johnpapa.net/', (error, response, html) => {

    if (!error && response.statusCode == 200) { 
        //console.log(html);
        const $ = cheerio.load(html);

        const siteHeading = $('.post_head');
        //console.log(siteHeading.html()); 
        //console.log(siteHeading.text());    

        const ouptut = siteHeading.find('h1').text();
        console.log(ouptut);
    }
});
