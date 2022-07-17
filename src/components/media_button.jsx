import React from 'react';
//TODO theoretically could have skip forward and skip back along with 10 seconds forward back, but for now, just play
class MediaButton extends React.Component {
    state = {}

    render() {
        return (
            <div>
                <button onClick={typeof this.props.callback == 'function' ? this.props.callback: none}  >
                    {this.props.text}
                </button>
            </div>
        );
    }


}
MediaButton.defaultProps = {
    callback: null,
    text: "Media Button"
}
