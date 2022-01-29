import React, { Fragment } from "react";
import { useRecoilValue } from "recoil";
import {absolutPath} from './../../../../../atoms/absolutePath'
import YouTube from "react-youtube";
import './style.scss'
// import './style.scss';

// <YouTube
//   videoId={string}                  // defaults -> null
//   id={string}                       // defaults -> null
//   className={string}                // defaults -> null
//   containerClassName={string}       // defaults -> ''
//   title={string}                    // defaults -> null
//   opts={obj}                        // defaults -> {}
//   onReady={func}                    // defaults -> noop
//   onPlay={func}                     // defaults -> noop
//   onPause={func}                    // defaults -> noop
//   onEnd={func}                      // defaults -> noop
//   onError={func}                    // defaults -> noop
//   onStateChange={func}              // defaults -> noop
//   onPlaybackRateChange={func}       // defaults -> noop
//   onPlaybackQualityChange={func}    // defaults -> noop
// />

const VideoPost = (props)=>{
    const videoPath = props.videoPath;
    const description = props.description;
    let path = useRecoilValue(absolutPath)
    // let thumb = `https://img.youtube.com/vi/${videoPath}/maxresdefault.jpg`;
    let link = "https://www.youtube.com/embed/"+videoPath;
    console.log(link)
    const renderVideo = () =>{
        const opts = {
            // height: '100%',
            // width: '100%',
            playerVars: {
              // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            },
        };
        return <div className="youtubeVideo"><YouTube videoId={videoPath} opts={opts} /></div>;
    }
    const renderVideoEmbed = ()=>{
        return(<div className="youtubeVideo"><iframe width="560" height="315" src={link} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe></div>)
    }
    const _onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      }
    // console.log(thumb.toString())
    return(
            <Fragment>
                {renderVideoEmbed()}
            </Fragment>
    )
}
export default VideoPost;