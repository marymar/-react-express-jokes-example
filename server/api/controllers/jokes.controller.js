const host = 'https://api.icndb.com';
const url = `${host}/jokes`;
const randomUrl = `${host}/jokes/random?escape=javascript`;
const request = require('request');

const mongoose = require('mongoose');
const Jokes = mongoose.model('Jokes');

exports.randomJoke = async (req, res) => {
    request(randomUrl, { json: true }, async (err, response, body) => {
        if (err) {
            const randomJoke = await getOneFromDB();
            res.json({ joke: randomJoke });
        } else {
            saveToDB(body.value);
            res.json({ joke: body.value.joke });
        }
    });
};

const getOneFromDB = async () => {
    const jokes = await Jokes.find();
    const index = Math.floor(Math.random() * jokes.length);
    return jokes[index].joke;
}

const saveToDB = async (data) => {
    const newJoke = new Jokes(data);
    const joke = await newJoke.save();
    return newJoke;
}

