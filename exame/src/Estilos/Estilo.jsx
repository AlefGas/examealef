import styled from "styled-components";
export const lightTheme = {
    corFundo: '#008B8B',
    corTexto: 'BLACK',
    corTitulo: 'white'
}

export const darkTheme = {
    corFundo: '#14213D',
    corTexto: 'BLACK',
    corTitulo: '#fffdd0'
}

// Criando uma div
export const Container = styled.div`
    background-color: ${props => props.theme.corFundo};
    color: ${props => props.theme.corTexto};
`
// Criando um botão
export const Button = styled.button`
    padding: 5px;
    border: none; /* Removendo a borda padrão do botão */
    border-radius: 5px; /* Adicionando borda arredondada */
    background-color: #FF4500;
    color: white;
    margin: 2px;
    cursor: pointer; /* Adicionando cursor pointer para indicar que é clicável */
`
// Criando um título
export const TitlePage = styled.h1`
    color: #666;
    font-size: 25px;
    margin-bottom: 10px; /* Adicionando uma margem inferior para separar dos elementos seguintes */
`



export const InformacoesCep = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
`
// Criando uma div para formulários
export const DivForm = styled.div`
    background-color: #FFF;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Adicionando uma sombra sutil */
    margin: 20px;
`


export const HomeContainer = styled.div`
    text-align: center;
`;

export const HomeTitle = styled.h1`
    color: #666;
    font-size: 25px;
    margin-bottom: 10px;
`;

export const HomeSubtitle = styled.h2`
    color: #666;
    font-size: 18px;
`;

export const HomeImage = styled.img`
    width: 500px;
    height: 500px;
    margin-top: 20px;
    border-radius: 8px; /* Adicionando uma borda arredondada à imagem */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Adicionando uma sombra sutil à imagem */
`;

export const HomeSeparator = styled.hr`
    margin: 20px 0;
`;

export const HomeContent = styled.div`
    padding: 20px;
`;









