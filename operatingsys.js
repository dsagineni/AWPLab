//node.js program using os module to display os name,hostname,cpu architecture,total memory and free memory
const os = require('os');

console.log("Operating System Name:", os.type());
console.log("Hostname:", os.hostname());
console.log("CPU Architecture:", os.arch());
console.log("Total Memory:", os.totalmem(), "bytes");
console.log("Free Memory:", os.freemem(), "bytes");