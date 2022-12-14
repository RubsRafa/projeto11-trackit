import { Link } from "react-router-dom";
import styled from "styled-components"

export default function Footer() {
    return (
        <>
            <Rodape>
                <Link to={'/habitos'}>
                    <h1>Hábitos</h1>
                </Link>
                <Link to={'/hoje'}>
                    <div>
                        <h2>Hoje</h2>
                    </div>
                </Link>
                <Link to={'/historico'}>
                    <h1>Histórico</h1>
                </Link>
            </Rodape>
        </>
    )
}
const Rodape = styled.div`
width: 100%;
height: 70px;
display: flex;
background-color: #FFFFFF;
justify-content: space-between;
position: fixed;
bottom: 0;
left: 0;
div{
    width: 91px;
    height: 91px;
    border-radius: 50%;
    background-color: #52B6FF;
    text-align: center;
    box-sizing: border-box;
    h2{
        padding: 25px;
        font-family: Lexend Deca, sans-serif;
        font-size: 18px;
        color: #FFFFFF;
    }
}
h1{
    padding: 25px;
    font-family: Lexend Deca, sans-serif;
    font-size: 18px;
    color: #52B6FF;
}
`;
