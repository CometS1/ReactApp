var React = require ('react');

class Test extends React.Component{
    constructor(props) {
        super(props);
        
        this.nameChanger = this.nameChanger.bind(this);
      }

    nameChanger(e){
        const name = e.target.value;
        this.props.onChange(name);
    }

    componentWillReceiveProps(nextProps) {
		alert("Check out the new props I am going to get: " + nextProps.name);
	  }


    render(){
        const farewell = this.props.farewell;

        return (
        <div>
            <h1>
          Hey my name is {this.props.name}!
        </h1>
            <select id="great-names" onChange={this.nameChanger}>
        <option value="Frarthur">
          Frarthur
        </option>

        <option value="Gromulus">
          Gromulus
        </option>

        <option value="Thinkpiece">
          Thinkpiece
        </option>
      </select></div>
      )
    }  
}

module.exports = Test;