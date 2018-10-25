const Logger = require(`./Loggers/Winston`);

/**
 * There's a bug in winston causing meta-data to be wrongly attached, so therefore this wrapper
 * Also it limits what logging-levels are available.
 */

class Log {
    /**
     * Log a message with severity-level debug
     *
     * @param {string} message
     * @param {*} [meta]
     */
    static debug(message, meta) {
        Logger.debug(message, {meta: meta});
    }

    /**
     * Log a message with severity-level warning
     *
     * @param {string} message - The message
     * @param {*} [meta]
     */
    static warning(message, meta) {
        Logger.warning(message, {meta: meta});
    }

    /**
     * Log a message with severity-level error
     *
     * @param {string} message - The message
     * @param {*} [meta]
     */
    static error(message, meta) {
        Logger.error(message, {meta: meta});
    }

    /**
     * Log a message with severity-level info
     *
     * @param {string} message
     * @param {*} [meta]
     */
    static info(message, meta) {
        Logger.info(message, {meta: meta});
    }
}

module.exports = Log;
