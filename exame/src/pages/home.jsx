import Menu from '../Componentes/menu'
// Define o tamanho desejado para a imagem em pixels
const larguraDesejada = 500; // largura em pixels
const alturaDesejada = 500; // altura em pixels

export default ()=>{
    return(
        <>

        <Menu />

        <hr/>
        <h1>AS PRINCIPAIS TECNOLOGIAS DO MUNDO ATUAL!</h1>
        <h2>ESTÁ É A PÁGINA HOME Da Tech-learning,  DELA VOCÊ VAI SE GUIAR ENTRE TODAS AS PÁGINAS </h2>
       
        <img src="https://s24534.pcdn.co/carreira-sucesso/wp-content/uploads/sites/3/2022/06/Design-sem-nome-8.jpg" alt="Imagem de inteligencia artificial "style={{ width: larguraDesejada, height: alturaDesejada }} />
        <h3> Machine Learning é uma disciplina da área da Inteligência Artificial que, por meio de algoritmos, dá aos computadores a capacidade de identificar padrões em dados massivos e fazer previsões (análise preditiva).</h3>
        </>
    )
}
