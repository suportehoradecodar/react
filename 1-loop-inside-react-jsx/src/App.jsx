import './App.css'
import db_pessoas from './data/db_pessoas';
import db_imagem from './data/db_imagem';

function App() {
  
  const elementos = [
    { id: 1, nome: 'Item 1' },
    { id: 2, nome: 'Item 2' },
    { id: 3, nome: 'Item 3' },
    { id: 4, nome: 'Item 4' },
    { id: 5, nome: 'Item 5' }
  ];

  return (
    <div className='App'>
      <div className='loop-jsx'>
        <h1>Loop dentro do JSX</h1>
        {/* Loop dentro do JSX para renderizar a lista de elementos */}
        <ul>
          {elementos.map(elemento => (
            <li key={elemento.id}>{elemento.nome}</li>
          ))}
        </ul>
      </div>
      <div className='loop-data'>
        <h1>Loop arquivo externo</h1>
        {db_pessoas.map(pessoa =>(
         <p>Nome: {pessoa.name} <br /> Idade: {pessoa.age}</p>
        ))}
      </div>

      {db_imagem.map(imagem =>(
        <div key={imagem.id}>
          <div className='laptop'>
            <img src={imagem.img} />
            <h3>Valor: {imagem.price}</h3>
          </div>
        </div>
      ))}
      
    </div>
  )
}

export default App
