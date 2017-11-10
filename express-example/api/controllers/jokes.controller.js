const host = 'https://api.icndb.com';
const url = `${host}/jokes`;
const randomUrl = `${host}/jokes/random?escape=javascript`;
const http = require('http-request');

const mongoose = require('mongoose');
const Jokes = mongoose.model('Jokes');

exports.randomJoke = async (req, res) => {
    http.get(randomUrl, function (error, jokes) {
        console.log(`error ${error}`);

        if (error) {
            //get from db
            Jokes.find({}, (err, jokes) => {
                if (err)
                res.sendStatus(err);
                console.log(`from db ${jokes}`);
                const index = Math.ceil(Math.random() * jokes.length);

                res.json({value: {joke: jokes[index].joke}});
            });
        } else {
            const data = jokes.buffer.toString();

            // save in db
            var newJokes = new Jokes(JSON.parse(data).value);
            newJokes.save((err, joke) => {
                console.log(`joke saved ${joke}`);
            });

            res.write(data);
            res.end();
        }
    });
};

