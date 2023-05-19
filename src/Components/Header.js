
import styled  from "styled-components";

export default function Header() {

    return (
        <Title>
            (Desde Header)
            Las mejores frases de los Simpson
        </Title>
    )
};

const Title = styled.h1`// estilo del title

color: #e76f51;
text-align: center;
    `;