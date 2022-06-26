import React from 'react';

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: this.props.value
    }
}

changeToGrey = () => {
    const newColor = '#333'
    this.setState({
        color: newColor
    })

}

    render() {
        return (
            <div className='cell' onClick={this.changeToGrey} style={{backgroundColor: this.state.color}}>
            </div>
        );
    }
}

export default Cell;
