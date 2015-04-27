const jade = require('jade');
const homeHtml = jade.compileFile('./areas/home/home.jade', {});

console.log(homeHtml);

function* Index() {
    this.body = homeHtml({
        title: 'Look Ma!'
    });
}

module.exports = {
    get: {
        index: Index
    }
}