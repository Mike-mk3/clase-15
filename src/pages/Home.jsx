function Home() {


  return (

    <>
      <div className="container ">



        <div className="row g-0 bg-body-secondary position-relative">
          <div className="col-md-6 mb-md-0 p-md-4">
            <img src="https://www.3presupuestos.com/fotos/wp-content/uploads/2016/04/Restaurante-cla%CC%81sico-con-suelo-de-gres-973x649.jpg" className="w-100" alt="" />
          </div>
          <div className="col-md-6 p-4 ps-md-0">
            <h1 className="mt-0 text-center">= Frase del Dia =</h1 >
            <p className="mt-0 text-center">
            Algo más valioso que todas las riquezas que hay sobre la tierra, es tomar una copa de vino en el momento preciso.
            </p>
          </div>
        </div>



        <hr />



        <form>
          <div className="mb-3">
            <h2>Registrate Con Nosotros</h2>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <label htmlFor="exampleInputEmail1" className="form-label">Direccion Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">WhatssApp</label>
            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <button type="submit" className="btn btn-primary">ENVIAR</button>
        </form>
        <hr />



        <h2>Haz tu Reservacion en:</h2>
        <table className="py-4 d-flex bg-body-tertiary  flex-column align-items-center">

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
      <td >San Luis Potosi</td>
 
    </tr>
  </tbody>
</table>



        <hr />
      </div>




      <div>
   
      </div>

    </>


  );
}

export default Home;