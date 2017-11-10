const tasksServiceUrl = 'http://localhost:3000';
const tasksUrl = `${tasksServiceUrl}/foos`;


class FooService {

  static async fetchFoos() {
    try {
      const response = await fetch(tasksUrl, { method: 'GET' });
      return await response.json();
    } catch (error) {
      console.log('Error occurred while fetching results', error);
    }
  }
}

export default FooService;
