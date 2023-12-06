function Home() {
 

  return (

    <>
      <div className="container ">
























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
      </div>



      <hr />
      <div>
        <footer>
          <p className=" d-flex  py-5   bg-body-tertiary align-items-center flex-column">Esta pagina fue elaborada por un estudiante de U-CAMP con fines educativos</p>
        </footer>
      </div>

    </>


  );
}

export default Home;