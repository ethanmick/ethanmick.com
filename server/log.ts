import { createLogger, format, transports } from 'winston'
const { colorize, errors, splat, combine, timestamp, printf } = format

export default createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    errors({ stack: true }),
    splat(),
    colorize(),
    printf(
      ({ timestamp, level, message }) => `[${timestamp}] ${level}: ${message}`
    )
  ),
  transports: [new transports.Console()]
})
