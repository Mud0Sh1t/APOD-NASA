import TitleNasa from "./TitleNasa";
import ImageNasa from "./ImageNasa";
import CopyrightNasa from "./CopyrightNasa";
import ExplanationNasa from "./ExplanationNasa";
import VideoNasa from "./VideoNasa";
import React from "react";

export default function ContentNasa(props) {
    const data = props.data;
    const mediaType = data.media_type;
    const copyright = data.copyright;
    if(mediaType === "image"){
        if(copyright !== undefined){
            return (
                <div id="content-apod-nasa">
                    <ImageNasa url={data.url} hdUrl={data.hdurl} title={data.title} />
                    <TitleNasa title={data.title} />
                    <ExplanationNasa explanation={data.explanation} />
                    <CopyrightNasa copyright={data.copyright}/>
                </div>
            );
        }else{
            return (
                <div id="content-apod-nasa">
                    <ImageNasa url={data.url} hdUrl={data.hdurl} title={data.title} />
                    <TitleNasa title={data.title} />
                    <ExplanationNasa explanation={data.explanation} />
                </div>
            );
        }
    } else if (mediaType === "video"){
        if(copyright !== undefined){
            return (
                <div id="content-apod-nasa">
                    <VideoNasa url={data.url}/>
                    <TitleNasa title={data.title}/>
                    <ExplanationNasa explanation={data.explanation}/>
                    <CopyrightNasa copyright={data.copyright}/>
                </div>
            );
        }else {
            return (
                <div id="content-apod-nasa">
                    <VideoNasa url={data.url}/>
                    <TitleNasa title={data.title}/>
                    <ExplanationNasa explanation={data.explanation}/>
                </div>
            );
        }
    }
}