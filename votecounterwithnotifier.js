var request = require('request');
const notifier = require('node-notifier');
setInterval(voteTracker, 600000);


function voteTracker()
{
   request('https://www.nodeknockout.com/entries/309-ogu/vote/stats', function (error, response, body) {
   var result=JSON.parse(body);
	   notifier.notify({
       'title': 'Supriseee',
        'message': 'Vote count:'+result.vote_count
        });
console.log(result.vote_count);
});
}

