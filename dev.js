'use strict';

require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

/* utils */
const addEventsToBot = require('./utils/addEventsToBot');

/* commands */
const onomastico = require('./commands/onomastico/onomastico');
const marcopolo = require('./commands/marcopolo/marcopolo');
const bestemmia = require ('./commands/blasphemiesgenerator/blasphemiesgenerator');
const audio = require ('./commands/audio/audio');
const spam = require ('./commands/spam/spam');

const TOKEN = process.env.TELEGRAM_TOKEN_DEV;
const options = {
    polling: true
};
const bot = new TelegramBot(TOKEN, options);

addEventsToBot(bot, [
    onomastico,
    marcopolo,
    bestemmia,
    audio,
    spam
]);