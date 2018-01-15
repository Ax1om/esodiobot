const moment = require('moment');
const bestemmiatore = require('../blasphemiesgenerator/generator');
const marcolopolo = require('../marcopolo/generator');

module.exports = bot => {

    const commands = {
        'bestemmia': bestemmiatore,
        'marco': marcolopolo,
    };

    /**
     * Ripete n volte un messaggio in chat
     * Usage: /spam 'quantitàMessaggi' 'Messaggio'
     */

    bot.onText(/^\/spam\s-([msc])([1-9][0-9]*)\s(.+)/i, (msg, match) => {
        const spamType = match[1];
        const messageQuantity = parseInt(match[2]);
        const word  = match[3];
        let message = '', i=0;

        switch (spamType) {
            case 's':
                for (i = 0; i < messageQuantity; i++) {
                    message += word + ' ';
                }
                bot.sendMessage(
                    msg.chat.id,
                    message
                );
                break;
            case 'm':
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
                break;
            case 'c':
                if(commands[word]){
                    if(messageQuantity <= 10) {
                        for (i = 0; i < messageQuantity; i++) {
                            commands[word](bot, msg)
                        }
                    } else {
                        bot.sendMessage(
                            msg.chat.id,
                            'Superato limite di 10 messaggi di spam, Marco Pollo si arrabbia e il server esplode.\nSpamma a tua mamma.'
                        );
                    }
                }
                break;
        }


    });
};
