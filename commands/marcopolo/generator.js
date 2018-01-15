const { capitalize } = require('../../utils/utils');

module.exports = (bot, msg) => {
    const gaussianRandom = () => {
        let rand = 0;
        for (let i = 0; i < 6; i += 1) {
            rand += Math.random();
        }
        return rand / 6
    };

    const isExtracted = probability => {
        const random = Math.ceil(gaussianRandom() * 100);
        return random <= probability || random >= (100 - probability)
    };

    const isPolloExtracted = isExtracted(30);
    const imageName = isPolloExtracted ? 'pollo' : 'polo';
    const imageNumber = isPolloExtracted ? '' : Math.ceil(Math.random() * 10);
    const photo = `${__dirname}/../../resources/images/marcopolo/${imageName}${imageNumber}.jpg`;

    bot.sendPhoto(msg.chat.id, photo, {
        caption: `${capitalize(imageName)}!`
    });
};