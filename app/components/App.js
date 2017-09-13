var React = require('react');
var Button = require('react-bootstrap/lib/Button');
var ButtonToolbar = require('react-bootstrap/lib/ButtonToolbar');

var styles1 = require('./styles').styles1;
var styles2 = require('./styles').styles2;

class App extends React.Component{
	
		
    render () { 
			const buttonsInstance = (
				<ButtonToolbar>
					{/* Standard button */}
					<Button>Default</Button>
			
					{/* Provides extra visual weight and identifies the primary action in a set of buttons */}
					<Button bsStyle="primary">Primary</Button>
			
					{/* Indicates a successful or positive action */}
					<Button bsStyle="success">Success</Button>
			
					{/* Contextual button for informational alert messages */}
					<Button bsStyle="info">Info</Button>
			
					{/* Indicates caution should be taken with this action */}
					<Button bsStyle="warning">Warning</Button>
			
					{/* Indicates a dangerous or potentially negative action */}
					<Button bsStyle="danger">Danger</Button>
			
					{/* Deemphasize a button by making it look like a link while maintaining button behavior */}
					<Button bsStyle="link">Link</Button>
				</ButtonToolbar>
			);

		return(
			<div>
				{buttonsInstance}
			Chocolate {1 + 1}
			</div>
		);
     }
};

module.exports = App;