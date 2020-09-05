import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';
import './index.css';

const data = {
  labels: [
    'Javascript',
    'CSS',
    'HTML'
],
datasets: [{
  data: [300, 50, 100],
  backgroundColor: [
  '#FF6384',
  '#36A2EB',
  '#FFCE56'
  ],
  hoverBackgroundColor: [
  '#FF6384',
  '#36A2EB',
  '#FFCE56'
  ]
}]
};

class App extends Component{
    render(){
        return(
            <div className="tamanho">
                <h2>Exemplo Grafico de rosca</h2>
                <Doughnut
                    data={data}
                    width={400}
                    height={400}
                />
            </div>
        );
    }
}


// export default App;
/*
export default () => (
<div>
  <h2>Exemplo Grafico de rosca</h2>
  <Doughnut
     data={data}
    width={400}
    height={400}
  />
</div>
);
*/

/* css:
// inserir className na div, display: block para habilitar o tamanho
.tamanho{
  display: block;
  width: 200px;
}
/* responsivo*/
 /*
@media (min-width: 700px){
  .tamanho{
  display: block;
  width: 500px;
  }
}
// */
