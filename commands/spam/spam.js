const moment = require('moment');

module.exports = bot => {

    /**
     * Ripete n volte un messaggio in chat
     * Usage: /spam 'quantitàMessaggi' 'Messaggio'
     */

    bot.onText(/^\/spam\s-([ms])([1-9][0-9]*)\s(.+)/g, (msg, match) => {
        const spamType = match[1];
        const messageQuantity = parseInt(match[2]);
        const word  = match[3];
        let message = '', i=0;
        console.log('spamType', spamType);
        console.log('messageQuantity', messageQuantity);

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
                        setTimeout(function () {
                            bot.sendMessage(
                                msg.chat.id,
                                word
                            );
                        }, 2000);
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