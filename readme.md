# esp3-packet
This module parses esp3 buffer to esp3 packetes.
It extracts all information out of the buffer, except of the "user data".

## Usage
```javascript
const ESP3Packet = require('esp3-packet');
...
const espPacket = new ESP3Packet();
const packet = espPacket.parse(buffer);
```

## Constructor
```javascript
new ESP3Packet(true); // Extended output enabled
new ESP3Packet(false); // Extended output disabled (default)
```

## Methods
### setExtendedOutput(boolean)
* `boolean` **<Boolean>** A boolean for enable or disable the extended output.
```javascript
espPacket.setExtendedOutput(true); // Extended output enabled
espPacket.setExtendedOutput(false); // Extended output disabled (default)
```
Enables or disables the extended output.

### parse(buffer)
* `buffer` **<Buffer>** A buffer object
```javascript
console.log(espPacket.parse(buffer));
```
Returns a parsed packet or `null` if the buffer isn't vaild.
A `TypeError` will be thrown if the buffer isn't set.


## Packet structure
Default output:
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

Extended output:
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
