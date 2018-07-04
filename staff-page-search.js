const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const process = require('process');
const config = require('./' + process.argv[2]);

let staff = [];

config.urls.forEach(function(url){
  request(url, function(error, response, html){
      if(!error){
          var $ = cheerio.load(html);




          $(config.staffItem).each(function(i, item){
            let jobTitle = $(item).find(config.jobTitleSelector).html();
            let email = $(item).find(config.emailSelector).html();
            let link = $(item).find(config.linkSelector).attr("href");

            if (email && jobTitle) {
              staff.push({
                "jobTitle": jobTitle,
                "email": email,
                "link": link,
              })
            }
          })







      }
  })
})

setTimeout(function(){
  console.log(JSON.stringify(staff, null, 4));
  console.log(staff.length)
}, 10000)
