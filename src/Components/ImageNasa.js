import React from "react";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function ImageNasa(props) {
    return(
        <div id="content-media">
            <Zoom overlayBgColorEnd='rgba(40, 44, 52, 1)'>
                <source srcSet={props.hdUrl} media="(max-width: 800px)"/>
                <picture>
                    <img src={props.url} alt={props.title} />
                </picture>
            </Zoom>
        </div>
    );
}