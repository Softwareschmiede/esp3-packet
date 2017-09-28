# esp3-packet
This module parses a vaild esp3 buffer to an esp3 packet.
It splits all information out of the buffer, except of the "user data".
Therefore you need to know the EEP.

## Usage
```javascript
const ESP3Packet = require('esp3-packet');
...
const packet = new ESP3Packet(buffer);
```

## Packet structure
	raw
	syncByte
	rawHeader
	header
		dataLength
		optionalLength
		packetType
	crc8h
	rawData
	data
		rorg
		userData
		senderId
		status
	rawOptionalData
	optionalData
		subTelNum
		destinationId
		dBm
		securityLevel
	crc8d
