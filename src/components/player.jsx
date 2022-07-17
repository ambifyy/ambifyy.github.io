import React from 'react';
import ReactPlayer from 'react-player';
import Blur from 'react-blur';
import './legit.css';

class Player extends React.Component {
    state = {
        url: "https://youtu.be/2VrAp-jhJh8",
        isPlaying: false,
        volume: 1,
        brightness: 50
     }

    render() {

        if(this.state.isPlaying && this.state.brightness < 100) {
            this.setState({brightness:this.state.brightness+1});
        }
        else if(!this.state.isPlaying && this.state.brightness > 50) {
            this.setState({brightness:this.state.brightness-1});
        }

        return (
            <div className="border border-primary sus3" onMouseDown={this.togglePlayback}>
                <ReactPlayer
                    url={this.state.url}
                    playing={this.state.isPlaying}
                    width='0'
                    height='0'
                    controls={false}
                    volume={this.state.volume}
                    onEnded={this.resetStates}
                />
                {/* style={{width:'100%', height:'100%', lineHeight:'100vh'}} */}
                <div id="bg-img" className='fade-in-image'>
                    {/* <img src={this.props.img} style={{filter:'brightness(' + this.state.brightness + '%)', width:'100%', height:'100%'}} /> */}
                    <img src={this.props.img} />
                </div>
                {/* <img src={this.props.img} style={{filter:'brightness(50%)'}} /> */}
                <div className="fixed-top sus1" >
                    {!this.state.isPlaying && <img id="sus2" src="images/play.png"></img>}
                </div>
            </div>
        );
    }

    togglePlayback = () => {
        this.setState({isPlaying: !this.state.isPlaying});

        // if(this.state.isPlaying) document.getElementById("bg-img").style.animationPlayState = "initial";
        // else this.setState({brightness:'100%'});
        
        document.getElementById("bg-img").style.animationPlayState = "running"
        
        if(this.props.onPlay != null && this.props.onPlay === 'function' && this.state.isPlaying) this.props.onPlay();
        else if(this.props.onPause != null && this.props.onPause === 'function' && !this.state.isPlaying) this.props.onPause();
    }

    changeURLByEvent = (e) => {
        this.setState({url: e.target.value});
    }

    changeURL = (url) => {
        this.setState({url: url});
    }

    resetStates = () => {
        this.setState({isPlaying: false});

        if(this.props.onEnd != null && this.props.onEnd === 'function') this.props.onEnd();
    }

    changeVolume = (vol) => {
        this.setState({volume:vol})
    }
}

Player.defaultProps = {
    onPlay: null,
    onPause: null,
    onEnd: null,
    img: null
}

export default Player;