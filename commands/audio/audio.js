const meSpeak = require("mespeak");
meSpeak.loadConfig(require('mespeak/src/mespeak_config.json'));
meSpeak.loadVoice(require("mespeak/voices/it.json"));
const bestemmiatore = require('../blasphemiesgenerator/generator');

module.exports = bot => {
    if (!meSpeak.isConfigLoaded()) {
        return;
    }
    const toBuffer = ab => {
        let buf = new Buffer(ab.byteLength);
        const view = new Uint8Array(ab);
        for (let i = 0; i < buf.length; ++i) {
            buf[i] = view[i];
        }
        return buf;
    };

    /**
     * Audio Test!!
     */
    bot.onText(/^\/audio/gi, msg => {
        const audio = meSpeak.speak(bestemmiatore(), {rawdata: true});
        bot.sendAudio(msg.chat.id, toBuffer(audio));
    });

};