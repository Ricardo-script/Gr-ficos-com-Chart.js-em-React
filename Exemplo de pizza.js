import React, { Component } from 'react';
import {Pie} from 'react-chartjs-2';


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
            <div>
                <h2>Pie Example</h2>
                <Pie
                    data={data}
                    width={400}
                    height={400}
                />
	        </div>
        );
    }
}

export default App;

/*
    export default () => (
	<div>
		<h2>Pie Example</h2>
		<Pie
			data={data}
			width={400}
			height={400}
		/>
	</div>
);

*/

/* responsivo*/
 /*
@media (min-width: 700px){
  .tamanho{
  display: block;
  width: 500px;
  }
}
// */