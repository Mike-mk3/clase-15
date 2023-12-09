function Frase(props) {
    return ( 

        <div className="row g-0 bg-body-secondary position-relative">
        <div className="col-md-6 mb-md-0 p-md-4">
          <img src="https://www.3presupuestos.com/fotos/wp-content/uploads/2016/04/Restaurante-cla%CC%81sico-con-suelo-de-gres-973x649.jpg" className="w-100" alt="" />
        </div>
        <div className="col-md-6 p-4 ps-md-0">
          <h1 className="mt-0 text-center">= Frase del Dia =</h1 >
          <p className="mt-0 text-center">{props.frase}</p>
        </div>
      </div>

     );
}

export default Frase;