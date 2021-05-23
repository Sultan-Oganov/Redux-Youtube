import React from 'react';
import { Link } from 'react-router-dom';

const Video = (props) => {
    const videoId = props.match.params.id
    console.log(videoId)
    return (
        <div>
            <Link to="/" style={{ display: "block" }}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1280px-YouTube_full-color_icon_%282017%29.svg.png" width="200" height="150" alt="" /></Link>
            <iframe width="1036" height="583" src={`https://www.youtube.com/embed/${videoId}?list=RDgG0x3yDZSZQ`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
};

export default Video;