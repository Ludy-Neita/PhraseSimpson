import styled from "styled-components";
export default function Character(props) {

    const { dataCharacter } = props; // crear el props, llamandolos del CharacterContainer.js
    const { character, image, quote } = dataCharacter;

    console.log(dataCharacter); // me trae la frase

    return (
        <ContentCharacter>
            (Desde Character)
            <Title> {character} </Title>

            <ContentImage>
                <Image src={image} alt={character} />
            </ContentImage>

           <Phrase>{quote}</Phrase> 

        </ContentCharacter>
    )

};

const ContentCharacter = styled.div`
        padding: 20px;
        border: 1px solid #2a9d8f;
        border-radius:20px;
        width: 300px;
        text-align: center;
        margin: 10px;
        &: hover {filter: brightness(40%)};
        `;

const Title = styled.h2`
        color: #264653;
        height:40px;
        justify-content: center;
        align-items:center;
        display: flex;
        `;

const ContentImage = styled.div`
        height:250px;
        justify-content: center;
        align-items:center;
        display: flex;
        `;

const Image = styled.img`
        width:130px;
        height:auto;
        `;

const Phrase = styled.h4`
        color: #2a9d8f;
        height: 100px;
        `;

