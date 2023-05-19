import styled from "styled-components";
import Imagen from "../img/the-simpson.png"; // doble . porque esta en segundo nivel jerarquico

export default function Welcome(props) {

  const {reqApi} = props; // crear el props, llamandolos del app.js

  return (

    <ContentLogo>

      <WelcomeText>
       (Desde welcome) Bienvenido, para utilizar las frases da cick sobre la imagen
      </WelcomeText>

      <Image src={Imagen} alt="Familia Simpsons" onClick = {reqApi} />{/* probar que funciona en consola cuando doy click {()=> console.log("Click sobre la imagen")}, y poner reqApi para saber que trae el array */}

    </ContentLogo>
  )
};
const Image = styled.img`// estilo pero si importo el styled.

    width: 450px;
    height: auto;
    &: hover {cursor: pointer;}
    `;

const ContentLogo = styled.div`// estilo pero si importo el styled.

    width: 100%;
    text-align:center;
    &: hover {cursor: pointer;}
    `;

const WelcomeText = styled.p`

  color: #2a9d8f;
  text-align: center;
  font-weight: 900;
  padding: 50px 0 10px 0;
  font-size: 20px;
`;
