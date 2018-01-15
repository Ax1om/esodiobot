const saints = require('../../assets/saints');
const moment = require('moment');
module.exports = bot => {
  /**
   * Ritorna il tuo onomastico
   * Usage: /onomastico 'dataDiNascita' ['formatDate']
   */
  bot.onText(/^\/onomastico(\s([\d\-\/]+)\s*([dDmMyY\-\/]+)?)?/i, (msg, match) => {
    const birthDateString = match[2];
    const parsedFormatDate = match[3];
    const validFormatDate = parsedFormatDate || 'DD-MM-YYYY';

    if (!birthDateString) {
      bot.sendMessage(
        msg.chat.id,
        `Uso: /onomastico dataDiNascita [formatoData]`
      );
      return;
    }

    if (!moment(birthDateString, validFormatDate).isValid()) {
      bot.sendMessage(
        msg.chat.id,
        `Errore ${birthDateString} non ha un formato di data valido, usare un formato ISO-8601`
      );
      return;
    }

    const birthDate = moment(birthDateString, validFormatDate);
    const birthDay = birthDate.date();
    const birthMonth = birthDate.month() + 1;

    bot.sendMessage(
      msg.chat.id,
      saints[birthMonth][birthDay]
    );
  });
};