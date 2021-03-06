const serviceUrl = 'http://localhost:3000';
const url = `${serviceUrl}/jokes`;
const randomUrl = `${serviceUrl}/jokes/random`;

class JokeService {

  static async fetchJokes() {
    try {
      const response = await fetch(url, { method: 'GET' });
      const res = await response.json();
      return res;
    } catch (error) {
      console.log('Error occurred while fetching results', error);
    }
  }

  static async fetchRandomJoke() {
    try {
      const response = await fetch(randomUrl, { method: 'GET' });
      const res = await response.json();
      return res.joke;
    }catch (error) {
      console.log('Error occurred while fetching results', error);
    }
  }
}

export default JokeService;
