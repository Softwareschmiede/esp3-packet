# esp3-packet
This module parses vaild esp3 buffer to esp3 packetes.
It extracts all information out of the buffer, except of the "user data".
Therefore you need to know the EEP.

## Usage
```javascript
const ESP3Packet = require('esp3-packet');
...
const packet = new ESP3Packet(buffer);
```

## Packet structure
```javascript
{
    raw: Buffer,
    syncByte: '55',
    rawHeader: Buffer,
    header: {
        dataLength: Number,
        optionalLength: Number,
        packetType: String
    },
    crc8h: String,
    rawData: Buffer,
    data: {
        rorg: String,
        userData: Buffer,
        senderId: String,
        status: String
    },
    rawOptionalData: Buffer,
    optionalData: {
        subTelNum: Number,
        destinationId: String,
        dBm: Number,
        securityLevel: Number
    },
    crc8d: String
}
  ```
