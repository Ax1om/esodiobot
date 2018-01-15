const photoGenerator = require('./generator');

module.exports = bot => {
  /**
   * Marco Polo!!
   */
  bot.onText(/^\/marco/i, msg => {
      photoGenerator(bot, msg);
  });
};