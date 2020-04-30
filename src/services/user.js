import { apiRequest } from "../configs/apiMiddleware";

export default {
  register: (body) => apiRequest("POST", "/user/register", body),
  login: (body) => apiRequest("POST", "/user/login", body),
  getBooks: (searchText) => apiRequest("GET", `/user/book${searchText ? `?search=${searchText}` : ""}`),
  addBook: (bookId) => apiRequest("POST", `/user/book/${bookId}`),
  removeBook: (bookId) => apiRequest("DELETE", `/user/book/${bookId}`),
};
