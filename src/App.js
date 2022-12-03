import { useState } from "react";
import { useEffect } from "react";
import ImageContext from "./context/ImageContext";
import Image from "./components/Image";

//TODO: AGREGAR A STATE
let contador = 1;

export default function App() {


  //*DONE TODO: Agregar let api  como estado
  const [apiURL, setApiURL] = useState(`https://rickandmortyapi.com/api/character/${contador}`);

  // let api = `https://rickandmortyapi.com/api/character/${contador}`;

  const cambiarDatos = () => {
    if (contador > 0){
      setApiURL(`https://rickandmortyapi.com/api/character/${contador}`);
      fetch(apiURL)
      .then((response) => response.json())
      .then((data) => setImageURL(data.image))
      ;
    }else{
      contador = 1;
    }
    
  };
  
  //*DONE TODO: Colocar use effect para cambiarDatos
  useEffect(() => {
    cambiarDatos();
  });
  const [imageURL, setImageURL] = useState(apiURL.image);
  //TODO: Mostrar lo datos de la imagen
  const [imageText, setImageTExt] = useState(true);
  //TODO: Cambiar enabled/disabled botón si es menor a 0 o ha llegado al limite
  const [btnStatus, setBtnStatus] = useState(true);

  return (
    <>
      <ImageContext.Provider value={imageURL}>
      <div className="App">
        <h1>Rick y Martín</h1>
        <h2>Dale al botón para cambiar de imagen!</h2>
        <Image
          alt="Se acabaron las imagenes :("
        />
      </div>
    </ImageContext.Provider>
    <button
      onClick={() => {
          contador --;
          cambiarDatos();
      }}
      >
      Anterior
    </button>
    <button
      onClick={() => {
        contador ++;
        cambiarDatos();
      }}
      >
      Siguiente
    </button>
    </>
  );
};
