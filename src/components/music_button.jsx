import React from 'react';
import ReactPlayer from 'react-player';
import Blur from 'react-blur';
import './legit.css';

class MusicButton extends React.Component {
    state = {
        className: "btn btn-lg m-1 shadow-lg my-2", 
        url: this.props.audioUrl,
        isPlaying: false,
        volume: 1,
        isToggled: false
     }

    render() {

        return (
            <div>
                <button className={this.state.className} onClick={this.togglePlayback}>{this.props.text}</button>
                <ReactPlayer
                    url={this.state.url}
                    playing={this.state.isPlaying}
                    width='0'
                    height='0'
                    controls={false}
                    volume={this.state.volume}
                    onEnded={this.props.onEnd != null && typeof this.props.onEnd === 'function' ? this.props.onEnd : null}
                />
            </div>
        );
    }

    togglePlayback = () => {
        this.setState({url: this.props.audioUrl});
        this.setState({isPlaying: !this.state.isPlaying});

        if(this.state.isToggled) {
            this.setState({isToggled: false, className : "btn btn-lg m-1 shadow-lg "})
        }else{
            this.setState({isToggled: true, className: "btn btn-primary btn-lg m-1 shadow-lg "});
        }
    }
}

MusicButton.defaultProps = {
    audioUrl:"",
    text: "",
    onEnd: null
}


export default MusicButton;