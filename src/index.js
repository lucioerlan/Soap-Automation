require("dotenv").config();

const { logger } = require("../src/utils/logger");
const ProcessExecute = require("./main/tasks");

class Application {
    static async start() {
        try {
            logger.info("Application in execution");

            ProcessExecute.start();
        } catch (err) {
            logger.error(err);
        }
    }
}

Application.start();
