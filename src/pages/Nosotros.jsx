import { useState } from "react";

function Nosotros(){
    
    const [loading, setLoading] = useState(true);

    return (

        <div className="vh-100">
            <div className="h-100 d-flex align-items-center justify-content-center flex-column">
                <h1>NUESTRA BIENVENIDA</h1>
                <hr />
                <h4 className="text-center">Hola que tal Estimado Cliente!
                Nosotros Somos una empresa que se dedica a realizar platillos especificos de la mejor calidad, dandoles nuestra formula secreta a cada platillo para satisfacer a nuestros clientes y se vayan con un Gran Sabor de Boca.</h4>
                <hr />
                <h1>¡BUEN PROVECHO!</h1>

            </div>
        </div>
    );
}

export default Nosotros;