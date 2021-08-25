const { createLogger, format, transports } = require('winston');

const {
  combine, timestamp: datetime, printf,
} = format;

// @ts-ignore
const Format = printf((args: any) => `${args.timestamp} [${args.label}] ${args.level}: ${args.message}`);

export default createLogger({
  format: combine(
    datetime(),
    Format,
  ),
  transports: [
    new transports.Console(),
    new transports.File(
      {
        filename: 'app.log',
        maxsize: 5120000, // bites
        maxFiles: 5,
      },
    ),
  ],
});
