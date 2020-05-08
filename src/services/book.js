import { apiRequest } from "../configs/apiMiddleware";

export default {
  getAll: (searchText) => apiRequest("GET", `/book`, { query: { search: searchText } }),
  getOne: (id) => apiRequest("GET", `/book/${id}`),
  create: (body) => apiRequest("POST", `/book`, { body }),
  update: (id, body) => apiRequest("PUT", `/book/${id}`, { body }),
  remove: (id) => apiRequest("DELETE", `/book/${id}`),
};
