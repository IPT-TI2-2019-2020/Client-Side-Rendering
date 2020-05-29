import { apiRequest } from "../configs/apiMiddleware";

export default {
  register: (jsonData) => apiRequest("POST", "/user/register", { jsonData }),
  login: (jsonData) => apiRequest("POST", "/user/login", { jsonData }),
  getBooks: () => apiRequest("GET", "/user/book"),
  addBook: (bookId) => apiRequest("POST", `/user/book/${bookId}`),
  removeBook: (bookId) => apiRequest("DELETE", `/user/book/${bookId}`),
};
