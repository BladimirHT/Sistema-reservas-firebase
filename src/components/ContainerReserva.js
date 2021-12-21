import React from "react";
import { collection, doc, deleteDoc  } from "firebase/firestore";
import { db } from "../firebaseConfig";


function ContainerReserva({ usuario }) {
  const { dateTimeEntry, name, numberPeople } = usuario;
  // const entry = dateTimeEntry.toDate();

  const onDeleteReserva = async id => {
    if (window.confirm("Estas seguro de querer eliminar tu reserva")) {
      await db.collection("usuarios").doc(id).deleteDoc();
      query.forEach((doc) => {
        documentos.push({ id: doc.id, ...doc.data() });
      });
      console.log(usuario)
    }
  };

  return (
    <div className="Container-reserva">
      <h1 id="titleReserva">
        {" "}
        <b> Mis reservas </b>
        <br />
      </h1>
      <section className="Card-Container">
        <div id="Card-data" className="Card-Container-data">
          <b>{`Quien reserva: `}</b>
          {` ${name} `}
          <br /> <b>{`Cantidad de personas: `}</b>
          {`${numberPeople}`} <br /> <b>{`Fecha de entrada:`}</b>
          {` ${dateTimeEntry.toString()}`} <br />
        </div>
        <div className="Card-Container-button">
          <button className="button-edit" type="submit">
            Editar
          </button>
          <br />
          <button className="button-delete" type="submit" onClick={() => onDeleteReserva(usuario.id)}  >
            Eliminar
          </button>
        </div>
      </section>
    </div>
  );
}
export default ContainerReserva;
