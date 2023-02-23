import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// import React from 'react';
// import ReactDOM from 'react-dom/client'; //biblioteca q o react forneceu
// import './index.css'; //arquivos css importam sem o from
// import App from './App'; //importei o componente. //arquivos js importam com from sem .js

// const root = ReactDOM.createRoot(document.getElementById('root')); // Criando uma div com ID root
// root.render( //render significa renderizar, ou seja, exibir dentro de root tais coisas.
//   <React.StrictMode>
//     {/* <div>Olá Mundo</div> */}
//     <App/> {/*Forma de usar componentes externos que foram importados*/}
//   </React.StrictMode>
// );