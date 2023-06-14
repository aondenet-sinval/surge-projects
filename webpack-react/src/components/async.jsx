import React, { Suspense } from 'react';

const App = () => {
  const LazyAsyncComponent = React.lazy(() => import('./AsyncComponent'));

  return (
    <div>
      <h1>App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyAsyncComponent />
      </Suspense>
    </div>
  );
};

export default App;
// ok tudo bem mas seria melhor fazer isso com um componente App separado do index.js
// Sim, é uma boa prática separar a lógica do seu aplicativo em componentes menores e independentes. Para implementar o code splitting usando um componente separado App, você pode seguir os seguintes passos:
//
// Crie um novo arquivo App.js e mova a lógica do seu aplicativo para esse arquivo:
//
// Observe que estamos usando a mesma lógica que foi apresentada anteriormente, mas agora estamos exportando o componente App para ser usado no arquivo index.js.
//
// Modifique o arquivo index.js para importar o componente App de forma assíncrona:
// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import ons from 'onsenui';
// import 'onsenui/css/onsenui.css';
// import 'onsenui/css/onsen-css-components.css';
//
// const container = document.getElementById('root');
// const root = createRoot(container);
//
// const LazyApp = React.lazy(() => import('./App'));
//
// ons.ready(() => {
//   root.render(
//     <React.StrictMode>
//       <Suspense fallback={<div>Loading...</div>}>
//         <LazyApp />
//       </Suspense>
//     </React.StrictMode>
//   );
// });
// Observe que estamos usando a mesma lógica que foi apresentada anteriormente, mas agora estamos importando o componente App de forma assíncrona. Usamos a função React.lazy para criar um componente assíncrono. Em seguida, usamos a função import do JavaScript para carregar o componente de forma assíncrona.
//
// Ao executar o Webpack, ele irá gerar um arquivo bundle.js contendo apenas o código necessário para renderizar a página inicial da sua aplicação, e um arquivo separado contendo o código do componente App. Quando o usuário acessa a página, o código necessário para renderizar a página inicial é baixado, e o código do componente App só é baixado quando o componente é carregado, economizando tempo de carregamento da página e reduzindo o tamanho do arquivo inicial.
