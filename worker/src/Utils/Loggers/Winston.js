const {format, transports, createLogger, config} = require(`winston`);
const {printf, combine, timestamp, colorize} = format;

const customFormatter = printf((info) => {
    const format = `${ info.timestamp } - ${ info.level }: ${ info.message }`;

    if (typeof info.meta === `string`) {
        return `${ format }: '${ info.meta }'`;
    }

    if (typeof info.meta !== `undefined`) {
        return `${ format }:\n ${ JSON.stringify(info.meta) }`;
    }

    return format;
});

const uppercaseLevel = printf((info) => {
    info.level = info.level.toUpperCase();

    return info;
});

const logger = createLogger({
    levels: config.syslog.levels,
    level: `debug`,
    format: combine(
        uppercaseLevel,
        timestamp({format: `YYYY-MM-DD HH:mm:ss:SSS`}),
        colorize(),
        customFormatter
    ),
    transports: [
        new transports.Console()
    ]
});

module.exports = logger;
