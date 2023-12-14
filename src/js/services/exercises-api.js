import axios from 'axios';

const BASE_URL = 'https://your-energy.b.goit.study/api/';

const filters = {
  bodypart: 'Body parts',
  muscles: 'Muscles',
  equipment: 'Equipment',
};

class ExercisesAPI {
  constructor({
    filter = 'muscles',
    subFilter = '',
    keyword = '',
    page = 1,
    limit = 8,
  }) {
    this.filter = filter;
    this.subFilter = subFilter;
    this.keyword = keyword;
    this.page = page;
    this.limit = limit;
    this.id = '';
  }

  async getFilters() {
    const response = await axios.get(`${BASE_URL}filters`, {
      params: {
        filter: filters[this.filter],
        page: this.page,
        limit: this.limit,
      },
    });
    return response.data;
  }

  async getExercises() {
    const response = await axios.get(`${BASE_URL}exercises`, {
      params: {
        [this.filter]: this.subFilter,
        keyword: this.keyword,
        page: this.page,
        limit: this.limit,
      },
    });
    return response.data;
  }

  async getExerciseById(id) {
    const response = await axios.get(`${BASE_URL}exercises/${id}`);
    this.id = id;
    return response.data;
  }

  async updateExerciseRating({ rate, email, review }) {
    const response = await axios.patch(
      `${BASE_URL}exercises/${this.id}/rating`,
      { rate, email, review }
    );
    return response.data;
  }

  async getQuote() {
    const response = await axios.get(`${BASE_URL}quote`);
    return response.data;
  }

  async subscribe({ email }) {
    const response = await axios.post(
      `${BASE_URL}subscription`,
      { email }
    );
    return response.data;
  }
}

const exercisesApi = new ExercisesAPI({});
export { exercisesApi };
