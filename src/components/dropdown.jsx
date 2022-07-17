import React from 'react';
import Select from 'react-select';

class Dropdown extends React.Component {
    state = {
        options: []
    }

    max_results = 30;
    api_key = "AIzaSyBPtrNB8nsJqHvt2zQyMrf-lHpNT0dJbyM";
    playlistID = "PLKXiUa8-8I4YahF-3I9DplW_HbOi70ese";

    base_url = "https://youtu.be/"


    componentDidMount() {
        let url = 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults='+this.max_results+'&playlistId='+this.playlistID+'&key='+this.api_key;
        fetch(url)
        .then(res => res.json())
        .then(json => this.setState({options:this.formatPlaylist(json)}));
    }

    formatPlaylist = (playlist) => {
        const playlist_items = playlist['items'];
        let options = [];
        playlist_items.forEach((element) => {
            options.push({'value': this.base_url + element['contentDetails']['videoId'], 'label': element['snippet']['title']});
        });
        return options;
    }

    render() {
        return (
            <Select options={this.state.options} isSearchable={true} placeholder="select a song" onChange={this.selectSong} />
        );
    }

    selectSong = (newSong) => {
        if(this.props.onSelect != null && typeof this.props.onSelect === 'function') this.props.onSelect(newSong['value']);
    }


}

Dropdown.defaultProps = {
    onSelect: null
}


export default Dropdown;