import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { collection, onSnapshot, getDocs, addDoc } from "firebase/firestore";

function Home() {

  const [datosTabla, setDatosTabla] = useState([]);
  const [formulario, setFormulario] = useState({
    nombre: "",
    cuantos: "",
    fecha: ""
  });

  const cargarDatos = async () => {
    console.log("cargar datos");
    const datos = await getDocs(collection(db, "reservaciones"));
    let datosFormateados = datos.docs.map((doc) => {
      return doc.data();
    });
    setDatosTabla(datosFormateados);
    console.log(datosFormateados);
  }

  useEffect(() => {
    cargarDatos()
  }, []);



  const handleInputChange = (event) => {
    setFormulario({
      ...formulario,
      [event.target.name]: event.target.value
    });
  }


const guardarReservacion = async (event)=> {
  event.preventDefault();
  console.log(formulario);
  await addDoc(collection(db, "reservaciones" ), formulario);
}


  return (

    <>
      <div className="container ">


        <br />
        <div className="row g-0 bg-body-secondary position-relative">
          <div className="col-md-6 mb-md-0 p-md-4">
            <img src="https://www.3presupuestos.com/fotos/wp-content/uploads/2016/04/Restaurante-cla%CC%81sico-con-suelo-de-gres-973x649.jpg" className="w-100" alt="" />
          </div>
          <div className="col-md-6 p-4 ps-md-0">
            <h1 className="mt-0 text-center">= Frase del Dia =</h1 >
            <p className="mt-0 text-center">
              "Algo más valioso que todas las riquezas que hay sobre la tierra, es tomar una copa de vino en el momento preciso"
            </p>
          </div>
        </div>

        <br />
        <br />


        <div className="container ">
          <h1>Haz tu reservacion Aqui:</h1>
          <form onSubmit={guardarReservacion} className=" bg-body-secondary">
            <div className="mb-2 ">
              <label className="form-label">Nombre</label>
              <input type="text" className="form-control" name="nombre" onChange={handleInputChange}/>
              <label className="form-label mt-4">Fecha</label>
              <input type="date" className="form-control" name="fecha" onChange={handleInputChange}/>
              <label className="form-label mt-4">¿Cuantas Personas?</label>
              <input type="number" className=" form-control"name="cuantos" onChange={handleInputChange}/>

            </div>

            <button type="submit" className="btn btn-primary mt-3">Reservar</button>
          </form><br />

          <hr />

          <table className="table text-center table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Fecha</th>
                <th scope="col">Cuantos</th>
              </tr>
            </thead>
            <tbody>
              {
                datosTabla.map((row, index) => {
                  return (
                    <tr key={index}>
                      <th >{index + 1}</th>
                      <td>{row.nombre}</td>
                      <td>{row.fecha}</td>
                      <td>{row.cuantos}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table></div>

        <hr />


        <br />




        <br />



        <h2>Contactanos en:</h2>
        <table className="py-4 d-flex   bg-body-secondary  flex-column align-items-center">

          <tbody>
            <tr>
              <th >WhatssApp:</th>
              <td >444-333-56-56</td>

            </tr>
            <tr>
              <th >Correo:</th>
              <td>Restaurant123@gmail.com</td>

            </tr>
            <tr>
              <th >Facebook:</th>
              <td>Restaurant MK</td>

            </tr>
            <tr>
              <th >Ubicacion:</th>
              <td >Hidalgo 36, San Luis Potosi, Mexico</td>

            </tr>
          </tbody>
        </table>



        <br />
      </div>
      <br /><br />



      <div>

      </div>

    </>


  );
}

export default Home;