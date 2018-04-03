import React from 'react';

class WordCard extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.setFocus.focus();
    }

    handleChange = (e) => {
        this.props.onChange(this.props.wordNum, this.props.lineNum, e)
      }

    render(){
        return(
            <div>
                { (this.props.selected) ? (
                    <span onClick={this.handleClick}>{this.props.value}</span>
                ) : (
                    <textarea
                        rows="1"
                        value={this.props.word} 
                        name="word-input" 
                        onChange={this.handleChange}
                        ref={(ref) => this.setFocus = ref}
                    />
                )}
            </div>
        )
    }
}

export default WordCard;