import { apiRequest } from "../configs/apiMiddleware";

export default {
  getAll: (searchText) => apiRequest("GET", `/book`, { query: { search: searchText } }),
  getOne: (id) => apiRequest("GET", `/book/${id}`),
  create: (jsonData) => apiRequest("POST", `/book`, { jsonData }),
  update: (id, jsonData) => apiRequest("PUT", `/book/data/${id}`, { jsonData }),
  setCover: (id, formData) => apiRequest("PUT", `/book/cover/${id}`, { formData }),
  remove: (id) => apiRequest("DELETE", `/book/${id}`),
};
