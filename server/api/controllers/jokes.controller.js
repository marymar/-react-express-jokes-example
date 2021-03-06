const host = 'https://api.icndb.com';
const jokesUrl = `${host}/jokes?escape=javascript`;
const randomUrl = `${host}/jokes/random?escape=javascript`;
const request = require('request');

const mongoose = require('mongoose');
const Jokes = mongoose.model('Jokes');

exports.jokes = async (req, res) => {
    request(jokesUrl, { json: true }, async (err, response, body) => {
        if (err) {
            const randomJoke = await getOneFromDB();
            res.json({ joke: randomJoke });
        } else {
            res.json(body.value);
        }
    });
};

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

