const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const process = require('process');
const config = require('./' + process.argv[2]);

function generateUrlsFromXML(parentElement, urlElement) {
  return [];
}

config.urls.forEach(function(url){
  request(url, function(error, response, html){
      if(!error){
          var $ = cheerio.load(html);


          $(config.titleSelector).each(function(i, item){
            console.log($(item).html());
          })

          $(config.emailSelector).each(function(i, item){
            console.log($(item).html());
          })



      }
  })
})
