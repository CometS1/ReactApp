var React = require('react');

class Changer extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
        let firstName = this.props.firstName;
        return (
            <div>
                <h1 style={this.props.style}>Hello my name is {firstName}</h1>
                <h1>And {firstName} works in a button factory</h1>
                <h1>Where {firstName} fights alien ninja robots</h1>
            </div>
        )
    }
}

module.exports = Changer;