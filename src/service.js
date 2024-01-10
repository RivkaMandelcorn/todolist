import axios from 'axios';

const apiUrl = "http://localhost:5161";
// var id = 0;
const service = {
  getTasks: async () => {
    const result = await axios.get(`${apiUrl}/items`);
    // id = result.data.size;
    return result.data;
  },
  addTask: async (name,id) => {
    const newItem = {
      id: id,
      name: name,
      isComplete: false
    };
      const response = await axios.post(`${apiUrl}/items`, newItem);
      return response.data;
  }
,  
  updateTask: async (item, isComplete) => {
    const updatedItem = {
      id: item.id,
      name: item.name,
      isComplete: isComplete
    }
    const result = await axios.put(`${apiUrl}/items/${item.id}`, updatedItem);
    return result.data;
  },
  deleteTask: async (id) => {
    const result = await axios.delete(`${apiUrl}/items/${id}`);
    return result.data;
  }
};

export default service;
