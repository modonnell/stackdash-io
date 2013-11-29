/**
 * Created by matt on 11/25/13.
 */

const redis = require('redis');
const client = redis.createClient();

const queue = 'stackdash:beaver';

process.on('SIGINT', function() {
  console.log('Got SIGINT.  Press Control-D to exit.');
  process.exit(1);
});

function readQueue () {
  client.blpop([queue,0], function (queueName, line) {
    // do stuff
    console.log('log line: ' + line + "\n");
    readQueues();
  });
}

readQueue();
