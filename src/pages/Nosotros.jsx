import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../components/Loading";


function Nosotros() {


    const [nosotros, setNosotros] = useState([]);
    const [loading, setLoading] = useState(false);



const getNosotros = async () => {
    try {
        const response = await axios.get(`nosotros`, {headers});
        setNosotros (response.data.data);
    } catch (error) {
    }
    setLoading (true);
};

    useEffect(() => {
        console.log("entro a usseefect");
    }, []);



    if (loading) {
        return (<Loading />)
    }






    return (

        <div className="container">
            <div className="">
                <div className="h-100 d-flex align-items-center justify-content-center flex-column">
                    <hr />
                    <h1>NUESTRA BIENVENIDA</h1>
                    <hr />
                    <h4 className="text-center">Hola que tal Estimado Cliente!
                        Nosotros Somos una empresa que se dedica a realizar platillos especificos de la mejor calidad, dandoles nuestra formula secreta a cada platillo para satisfacer a nuestros clientes y se vayan con un Gran Sabor de Boca.</h4>
                    <hr />
                    <h1>¡BUEN PROVECHO!</h1>

                </div>
            </div>
        </div>
    );
}

export default Nosotros;