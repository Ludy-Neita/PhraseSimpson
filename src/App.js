import Container from "./Components/Container";
import Header from "./Components/Header";
import Welcome from "./Components/Welcome";
import CharacteresContainer from "./Components/CharacteresContainer";
import { useState } from "react";

function App() {

  // pedir a la api

  const [character, Setcharacter] = useState(null); // traer el useState

  const reqApi = async () => {
    const api = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=3"); // 3 significa la cant de citas o de frases que van a obtener en el vector
    const frase = await api.json();
    Setcharacter(frase); // con la frase (lo de la API) setiando el hook el useState para otener ese estado y pasarlo
  };

  //console.log(character); // esto coloca el null, el valor que tiene en el useState


  return (

    <Container>

      {/*dentro de <p> Recibiendo children desde container*/}
      
      {/* {!character ? ():()} y esto depende de acción que se haga aparece un compoenete u otro*/}

      {/*  <Welcome   reqApi= {reqApi}/> invoco la funcion array con 3 posiciones.*/}

      {/* <CharacteresContainer character = {character}/> {/* props son estados comunicar entre componentes, es le estado a psar es el hook*/}

      <Header />

      {!character ? (
        <Welcome reqApi={reqApi} />
      ) : (
        <CharacteresContainer character={character} reqApi={reqApi} />
      )}

    </Container>
  );
}

export default App;


