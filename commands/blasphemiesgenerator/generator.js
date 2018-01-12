const mystics = require('../../assets/mystics');
const insults = require('../../assets/insults');
const animals = require('../../assets/animals');
const randomthings = require('../../assets/randomthings');

module.exports = () => {
    const randomSex = () => {
        const num = Math.random() * 10;
        return num > 6 ? 'Femminile' : 'Maschile';
    };

    const random = (jsondb, sex) => {
        const maxNum = jsondb[sex]['Total'];
        return parseInt(Math.random() * maxNum) + 1;
    };

    const sex = randomSex();
    const mystic = random(mystics, sex);
    const animal = random(animals, sex);
    const insult = random(insults, sex);
    const randomthing = random(randomthings, sex);

    return `${mystics[sex][mystic]} ${animals[sex][animal]} ${insults[sex][insult]} ${randomthings[sex][randomthing]}`;
};