import React from "react";

export default function VideoNasa(props) {
    return(
        <div id="content-media">
            <iframe title="Video APOD NASA" width="600" height="350" src={props.url} frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
            </iframe>
        </div>
    );
}