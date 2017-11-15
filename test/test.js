const ESP3Packet = require('../');

describe('test', function() {
    const buf = Buffer.from('55000a0701eba508282d800181383f0003ffffffff4400f6', 'hex');
    
    const espPacket = new ESP3Packet();
    const packet = espPacket.parse(buf);

    console.log(packet);
});
