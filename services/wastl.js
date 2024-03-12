const { copyFileSync } = require('fs');
const cfg = require('../config.json');
const https = require('https');
const { WastlObject } = require('../object/wastl');

class WastlService {
    constructor() { }
    // this._getData().then((data) => {
    //     data
    // });

    getWastl() {
        return new Promise((resolve, reject) => {
            let url = cfg.wastl.url;
            if (cfg.wastl.bzk) {
                url = `${url}?id=bezirk_${cfg.wastl.bzk}`;
            }
            https.get(
                url,
                (resp) => {
                    if (resp.statusCode !== 200) {
                        console.error(`Error: ${resp.statusCode}`);
                        resp.resume();
                        reject();
                    }
    
                    let data = '';
                    resp.on('data', (chunk) => {
                        data += chunk;
                    });
                    resp.on('end', () => {
                        let wastl = JSON.parse(data)["Einsatz"];
                        let wastlElements = [];
    
                        wastl.forEach(element => {
                            if(element.o == cfg.wastl.city || cfg.wastl.city == "") {
                                let mapedElement = new WastlObject();
                                mapedElement.id = element.i;
                                mapedElement.systemId = element.n;
                                mapedElement.message = element.m;
                                mapedElement.type = element.a;
                                mapedElement.city = element.o;
                                mapedElement.bzk = element.b;
                                mapedElement.date = element.d;
                                mapedElement.time = element.t;
                                wastlElements.push(mapedElement);
                            }
                        });
                        resolve(wastlElements);
                    });
                }
            );
        });
    }

    getType(type) {
        let typeString = type.replace(/[0-9]/g, '');
        return typeString.toLowerCase();
    }
}

module.exports = { WastlService };