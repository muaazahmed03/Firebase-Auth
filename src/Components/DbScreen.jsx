import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./FirebaseConfig";

const DbScreen = () => {
  const [userData, setUserData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  // Get data from firestore database

  useEffect(() => {
    getDataFromDatabase();
  }, [refresh]);

  const getDataFromDatabase = async () => {
    try {
      let arr = [];
      const getData = await getDocs(collection(db, "registerUser"));

      getData.forEach((doc) => {
        console.log(doc.data());
        arr.push({
          ...doc.data(),
          id: doc.id,
        });
      });

      setUserData([...arr]);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(userData);

  //  Data save from firestore database

  const saveData = async () => {
    try {
      const userObj = {
        name: "faraz",
        age: 24,
        email: "faraz@gmail.com",
        city: "karachi",
      };

      const userObj1 = {
        name: "hamza",
        age: 20,
        email: "hamza@gmail.com",
        city: "karachi",
      };

      //   auto id generate through addDoc() method

      // setDoc()

      // const docRef = await setDoc(doc(db, "users", "123456"), userObj);

      const docRef = await addDoc(collection(db, "users"), userObj1);

      console.log(docRef);
    } catch (error) {
      console.log(error);
    }
  };

  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  //  Data save from firestore database

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      let userObj = {
        email,
        password,
        firstName,
        lastName,
      };

      const response = await addDoc(collection(db, "registerUser"), userObj);
      setRefresh(!refresh);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  //  Update data from firestore database

  const editValue = async (id) => {
    try {
      console.log(id);
      let editInput = prompt("Enter updated Value");

      let obj = {
        firstName: editInput,
      };

      const updateData = await updateDoc(doc(db, "registerUser", id), obj);
      setRefresh(!refresh);
      console.log(updateData);
    } catch (error) {
      console.log(error);
    }
  };

  //  delete data from firestore database

  const deleteData = async (id) => {
    await deleteDoc(doc(db, "registerUser", id));
    setRefresh(!refresh);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="Enter First name"
        />
        <br />
        <br />
        <input
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="Enter Last name"
        />
        <br />
        <br />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Enter email"
        />
        <br />
        <br />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="Enter password"
        />
        <br />
        <br />
        <button>Submit Data</button>
      </form>

      <div>
        {userData.map((e, i) => {
          return (
            <li>
              {e.firstName}
              <button
                onClick={() => {
                  editValue(e.id);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  deleteData(e.id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </div>
    </>
  );
};

export default DbScreen;
