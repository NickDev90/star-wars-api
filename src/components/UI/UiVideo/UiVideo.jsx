import PropTypes from 'prop-types';
import cn from 'classnames';
import styles from './UiVideo.module.css';
import { useRef, useEffect } from 'react';

const UiVideo = ({src, classes, playbackRate = 1.0}) => {

    const videoRef = useRef(null);

    useEffect (() => {
        videoRef.current.playbackRate = playbackRate;
    }, [])

    return (
        <video 
            className={cn(styles.video, classes)}  
            loop 
            autoPlay 
            muted
            ref={videoRef}
        >
            <source src={src}/>
        </video>
    );
}

UiVideo.propTypes = {
    src: PropTypes.string,
    classes: PropTypes.string,
    playbackRate: PropTypes.number,
}

export default UiVideo;