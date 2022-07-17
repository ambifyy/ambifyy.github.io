import React from 'react';

class ToggleButton extends React.Component {
    state = { 
        isToggled : false,
        className : "btn btn-lg m-1 shadow-lg",
        music: new Audio(this.props.audioFile)
    }
    render() { 
        return (
            <div className="">
                <button className={this.state.className + " " +this.props.className} onClick={this.toggle} >{this.props.text}</button>
            </div>
        );
    }

    toggle = () => {
        if(this.state.isToggled) {
            this.setState({isToggled: false, className : "btn btn-lg m-1 shadow-lg "})
            this.state.music.pause();
        }else{
            this.setState({isToggled: true, className: "btn btn-primary btn-lg m-1 shadow-lg "});
            this.state.music.play();
            this.state.music.loop = true; 
            this.state.music.volume = 0.2; 

        }

        if(this.props.callback != null && typeof this.props.callback == 'function') this.props.callback();  
        }
}

ToggleButton.defaultProps = {
    className: "",
    text: "button",
    callback: null
};
 
export default ToggleButton;