const { WastlService } = require("./services/wastl.js");
const cfg = require('./config.json');

class App {
    constructor() {
        this.wastlService = new WastlService();
    }

    wastl = [];
    intervall = {
        wastl: null
    }

    run() {
        this.initWastl();
    }


    initWastl() {
        let wastlUpdateIntervall = cfg.wastl.updateInterval;
        if(cfg.wastl.updateInterval < 20) {
            wastlUpdateIntervall = 20;
        }

        this.getWastl();
        this.intervall.wastl = setInterval(() => {
            this.getWastl();
        }, wastlUpdateIntervall * 1000);
    }

    getWastl() {
        this.wastlService.getWastl().then((data) => {
            if(JSON.stringify(this.wastl) != JSON.stringify(data)) {
                this.wastl = data;
                this.outputStatus();
            }
        });
    }

    outputStatus() {
        if(this.wastl.length > 0) {
            this.wastl.forEach(element => {
                let icon = "🚨"
                switch (this.wastlService.getType(element.type)) {
                    case 'b':
                        icon = "🔥";
                        break;
                    
                    case 't':
                        icon = "🔨";
                        break;

                    case 's':
                        icon = "🧪";
                        break;

                    case 'd':
                        icon = "🚒";
                        break;

                    case 'sof':
                        icon = "💣";
                        break;

                    case 'z':
                        icon = "🚧";
                        break;
                
                    default:
                        break;
                }
                console.log(
                    `--- EINSATZ ---\n` +
                    `Alarmstufe: ${icon} ${element.type}\n` +
                    `Alarmierungstext: ${element.message}\n` +
                    `Zeitpunkt: ${element.date} ${element.time}\n` +
                    `Ort: ${element.city}\n`
                );
            });
            console.log(`*** ${new Date().toDateString()} ***`);
        }
    }

}

const myApp = new App();
myApp.run();
