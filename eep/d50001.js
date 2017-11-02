module.exports = function(rawUserData) {
    const teach = [true, false];
    const state = ['open', 'closed'];

    const learnBit = rawUserData.readUInt8() << 28 >>> 31; // Offset = 4, size = 1
    const stateBit = rawUserData.readUInt8() << 31 >>> 31; // Offset = 7, size = 1

    return {
        type: 'contact',
        teach: teach[learnBit], // 0 = true, 1 = false
        state: state[stateBit] // 0 = open, 1 = closed
    }

};