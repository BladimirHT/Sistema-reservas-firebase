import React from "react";
import { Home } from "./Home";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const MisReservas = () => {
  const addReserva = async (reservaObject) => {
    await addDoc(collection(db, "usuarios"), reservaObject);
  };

  return (
    <div>
      <Home addOrEditReserva={addReserva} />
    </div>
  );
};

export default MisReservas;
