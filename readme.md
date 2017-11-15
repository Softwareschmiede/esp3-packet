# esp3-packet
This module parses esp3 buffer to esp3 packetes.
It extracts all information out of the buffer, except of the "user data".

## Usage
```javascript
const ESP3Packet = require('esp3-packet');
...
const packet = new ESP3Packet(buffer);
```

## Option
You can set a 'simple' or 'advanced' output mode.
Default is simple mode.

```javascript
const packet = new ESP3Packet(buffer, 'advanced'); // simple or advanced
```


## Packet structure
Simple output mode:
```javascript
{
    data: {
        rorg: String,
        userData: Buffer,
        senderId: String,
        status: String
    },
    optionalData: {
        subTelNum: Number,
        destinationId: String,
        dBm: Number,
        securityLevel: Number
    }
}
  ```

Advanced output mode:
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
