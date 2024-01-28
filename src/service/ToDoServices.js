import axios from "axios";
import { APIUrl } from "./APIConfig";

export const todoService = {
  getAll: async () => {
    try {
      const respone = await axios.get(APIUrl.todo.getAllToDo);
      console.log("URL---" + JSON.stringify(respone.data));
      return respone.data;
    } catch (error) {
      console.log("Error---" + error.message);
      throw error;
    }
  },

  updateToDo: async (id, data) => {
    try {
      const respone = await axios.put(APIUrl.todo.getAllToDo + "/" + id, data, {
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      return respone.data;
    } catch (error) {
      console.log("Error---" + error.message);
      throw error;
    }
  },
};
