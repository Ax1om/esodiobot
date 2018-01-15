const moment = require('moment');

module.exports = bot => {

    /**
     * Ripete n volte un messaggio in chat
     * Usage: /spam 'quantitàMessaggi' 'Messaggio'
     */

    bot.onText(/^\/spam\s-([ms])([1-9][0-9]*)\s(.+)/i, (msg, match) => {
        const spamType = match[1];
        const messageQuantity = parseInt(match[2]);
        const word  = match[3];
        let message = '', i=0;

            if (spamType === 's') {
                for (i = 0; i < messageQuantity; i++) {
                    message += word + ' ';
                }
                bot.sendMessage(
                    msg.chat.id,
                    message
                );
            }
            if (spamType === 'm') {
                if(messageQuantity <= 10) {
                    for (i = 0; i < messageQuantity; i++) {
                        bot.sendMessage(
                            msg.chat.id,
                            word
                        );
                    }
                } else {
                    bot.sendMessage(
                        msg.chat.id,
                        'Superato limite di 10 messaggi di spam, Marco Pollo si arrabbia e il server esplode.\nSpamma a tua mamma.'
                    );
                }
            }

    });
};
