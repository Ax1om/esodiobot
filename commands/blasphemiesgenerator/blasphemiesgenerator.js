const bestemmiatore = require('./generator');

module.exports = bot => {

  /**
   * Return random blasphemie
   * Rule: Mystic + animal + insults + random thing
   */
  bot.onText(/^\/bestemmia/i, msg => {
    bot.sendMessage(
      msg.chat.id,
      bestemmiatore()
    );
  });
};