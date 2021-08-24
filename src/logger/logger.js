const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const Format = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

module.exports = createLogger({
    format: combine(
        label({ label: 'Logger!' }),
        timestamp(),
        Format
    ),
    transports: [
        new transports.Console(),
        new transports.File(
            {
                filename: 'app.log',
                maxsize: 5120000, // bites
                maxFiles: 5
            }
        )
    ]
});
