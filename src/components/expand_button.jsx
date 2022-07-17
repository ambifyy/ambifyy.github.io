import React from 'react';

class ExpandButton extends React.Component {
    state = { 
        isToggled : false,
        className : "btn btn-lg m-1 shadow-lg",
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
            document.querySelector('.bgDiv').style.width = '100vw';
            document.querySelector('.bgDiv').style.height = '100vh';
            document.querySelector('.image-bg').style.width = 'auto';
            document.querySelector('.image-bg').style.maxWidth = '70vw';
            document.querySelector('.image-bg').style.height = '80vh';
            document.querySelector('.image-bg').style.marginTop = '6vh';
            document.querySelector('.header1').style.display = 'block';
            document.querySelector('.panel').style.marginTop = '30vh';
            document.querySelector('.panel').style.marginLeft = '88vw';
            document.exitFullscreen();
        }else{
            this.setState({isToggled: true, className: "btn btn-primary btn-lg m-1 shadow-lg "});
            document.querySelector('.bgDiv').style.width = '100vw';
            document.querySelector('.bgDiv').style.height = '100vh';
            document.querySelector('.image-bg').style.width = '100vw';
            document.querySelector('.image-bg').style.maxWidth = '100vw';
            document.querySelector('.image-bg').style.height = '100vh';
            document.querySelector('.image-bg').style.marginTop = '0vh';
            document.querySelector('.header1').style.display = 'none';
            document.querySelector('.panel').style.marginTop = '35vh';
            document.querySelector('.panel').style.marginLeft = '90vw';

            document.documentElement.requestFullscreen();
        }

        if(this.props.callback != null && typeof this.props.callback == 'function') this.props.callback();  
        }
}

export default ExpandButton;