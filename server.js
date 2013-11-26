/**
 * Created by matt on 11/25/13.
 */

const redis = require('redis');
const zmq = require('zmq');

var puller = zmq.socket('pull').bind('tcp://localhost:3000');

