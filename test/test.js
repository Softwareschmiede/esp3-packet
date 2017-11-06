const ESP3Packet = require('../index');

describe('test', function() {
    const buf = Buffer.from('55000a0701eba508282d800181383f0003ffffffff4400f6', 'hex'); // d5
    const packet = new ESP3Packet(buf);

    console.log(packet);
});
