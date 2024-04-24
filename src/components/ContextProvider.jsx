/* eslint-disable react/prop-types */
import {createContext, useEffect, useState} from "react";
import axios from 'axios';

const URL ="https://6629186654afcabd073828d7.mockapi.io/new/new/";
const Context = createContext();

export const ContextProvider= ({ children }) =>{
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

  
    const AddtoTable = (newData) => {
      setData((prevData) => [...prevData, newData]);
    };
    
    const handleFormSubmit = async (e, userData) => {
      e.preventDefault();
      await axios
        .post(URL, userData) 
        .then((response) => {
          console.log(response);
          AddtoTable(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
  
      setName("");
      setEmail("");
      setPhone("");
    };
  
    const handleUpdate = async ( id ,updatedData) => {
     await axios
        .put(URL+id, updatedData)
        .then((response) => {
          const updatedUser = response.data;
          setData((prevData) =>
            prevData.map((user) => (user.id === id ? updatedUser : user))
          );
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    };
  
    const handleDelete = async(id) => {
      await axios 
        .delete(URL+id)
        .then(() => {
          setData((prevData) => prevData.filter((user) => user.id !== id));
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    };
  
    useEffect(() => {
      axios
        .get(URL)
        .then((response) => {
          console.log(response);
          setData(response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }, []);
    console.log(data)

    return(
        <Context.Provider  value={{data,name,email,phone,setName,setData,AddtoTable,handleFormSubmit,setEmail,setPhone,handleUpdate,handleDelete}}>
           {children}
        </Context.Provider>
    )
}

export default Context;