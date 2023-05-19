import styled from "styled-components";
import Character from "./Character";

export default function CharacteresContainer(props) {

    const { character, reqApi } = props; // crear el props, llamandolos del app.js
    //console.log (character);
    // se pone el reqApi para ponerlo luego en el botton y el botton es para que al dar click me recargue otros personajes en la pag

    //{character.map.((character, index)=>(<p> Haciendo el map.</p>))} recorrer el vector de los characteres, sale tres veces poque dijimo en la API que 3 veces

    // <Character /> esto se borra
    return (
        <>
            <ContainerCharacter>

                Desde caracter container

                {character.map((character, index) => (
                    <Character dataCharacter={character} key={index} />
                ))}

            </ContainerCharacter>

            <ContainerButton>
                <Button onClick={reqApi}>Recargar personaje</Button>
            </ContainerButton>
        </>

    );
}

const ContainerCharacter = styled.div`
        display: flex;
        `;

const ContainerButton = styled.div`
        width:100%;
        text-align:center;
        color:blue;
        `;

const Button = styled.button`
        width:250px;
        background-color:#e76f51;
        color: #fff;
        border: none;
        padding:10px 20px;
        border-radius: 20px;
        font-size: 18px;
        margin-top: 40px;
        transition: all 0.2s ease-out;
        &:hover{cursor:pointer; background-color: #1c0950;}
        `;
