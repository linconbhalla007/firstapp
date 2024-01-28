import React from "react";

const baseURL = "http://localhost:8080"; //this is for local
//const baseURL ="http://localhost:8080/";  //This is for Prod
//const baseURL ="http://localhost:8080/";   // this is for SIT

export const APIUrl = {
  todo: {
    getAllToDo: `${baseURL}/toDO`,
    updateToDO: `${baseURL}/toDO`,
    createToDO: `${baseURL}/toDO`,
    deleteToDO: `${baseURL}/toDO`,
    deleteToDOMultiple: `${baseURL}/toDO/multiple?ids=`,
  },

  todoEmployee: {
    getAllEmployee: `${baseURL}/employees`,
    updateEmployee: `${baseURL}/toemployees`,
    createEmployee: `${baseURL}/employees`,
    deleteEmployee: `${baseURL}/employees`,
    deleteTEmployeeMultiple: `${baseURL}/employees/multiple?ids=`,
  },
};
