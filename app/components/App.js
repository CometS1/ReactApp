var React = require('react');

var styles1 = require('./styles').styles1;
var styles2 = require('./styles').styles2;

class App extends React.Component{
	
    render () { 

		return(
			<div class="container-fluid">
				<span class="glyphicon glyphicon-envelope"></span>
				<button type="button" class="btn btn-success">Basic</button>
			Chocolate {1 + 1}
			</div>
		);
     }
};

module.exports = App;