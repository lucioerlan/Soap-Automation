const { schedule } = require("node-cron");
const { SoapService } = require("../../usecases");

class ProcessExecute {
    start() {
        schedule(process.env.SCHEDULE_TIME, () => {
            SoapService.execute();
        });
    }
} // example https://crontab.cronhub.io

module.exports = new ProcessExecute();
