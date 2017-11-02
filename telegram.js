const EEP = require('./eep/eep');

module.exports = function(data) {
    //console.log(data);

    if (data.rorg === 'f6') {
        //const t21 = parseInt(data.status, 16) << 26 >>> 31;
        //const nu = parseInt(data.status, 16) << 27 >>> 31;

        return EEP['f60203'](data.rawUserData);
    }

    if (data.rorg === 'd5') {
        return EEP['d50001'](data.rawUserData);
    }

    if (data.rorg === 'a5') {

        return EEP['a502'](data.rawUserData);
    }

    return null;
};