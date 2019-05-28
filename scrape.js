
const request = require('request');
const cheerio = require('cheerio');

request('https://johnpapa.net/', (error, response, html) => {

    if (!error && response.statusCode == 200) { 
        //console.log(html);
        const $ = cheerio.load(html);

        const siteHeading = $('.post_head');
        const blogDescription = $('.blog_description');
        //console.log(siteHeading.html()); 
        //console.log(blogDescription.text());    

        //const ouptut = siteHeading.find('h1').text();
        //const ouptut = siteHeading.children('h1').text();
        // const output = siteHeading.children('h1')
        //     .next()
        //     .text();

        // const descOutput = blogDescription.children('p')
        //     .next()
        //     .text();
        //console.log(descOutput);

        $('.navMenu_list a').each((i, el) => {
            const item = $(el).text();
            const link = $(el).attr('href');

            //console.log(item);
            //console.log(link);
            console.log(item, link);

        });

    }
});
