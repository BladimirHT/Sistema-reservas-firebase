import React, { useState, useEffect } from "react";
import ContainerReserva from "./ContainerReserva";
import { db } from "../firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";

function Listado() {
  const [ContainerReservas, setContainerReservas] = useState([]);
  const documentos = [];
  const leerContainerReservas = async () => {
    try {
      const query = await getDocs(collection(db, "usuarios"));
      query.forEach((doc) => {
        documentos.push({ id: doc.id, ...doc.data() });
      });
      setContainerReservas(documentos);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    leerContainerReservas();
  }, []);
  //console.log(documentos);
  return (
    <div>
      { ContainerReservas.map((usuario) => (
        <ContainerReserva key={usuario.id} usuario={usuario} />
      ))}
    </div>
  );
}
export default Listado;
