import { apiRequest } from "../configs/apiMiddleware";

export default {
  register: (body) => apiRequest("POST", "/user/register", { body }),
  login: (body) => apiRequest("POST", "/user/login", { body }),
  getBooks: () => apiRequest("GET", "/user/book"),
  addBook: (bookId) => apiRequest("POST", `/user/book/${bookId}`),
  removeBook: (bookId) => apiRequest("DELETE", `/user/book/${bookId}`),
};
