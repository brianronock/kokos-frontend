import { useState, useRef, useEffect } from 'react';

export default function CustomVideoPlayer({ videoSrc, poster, defaultMuted = false }) {
  const videoRef = useRef(null);
  const controlsTimeout = useRef(null);
  const progressBarRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isMuted, setIsMuted] = useState(defaultMuted);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused || video.ended) {
      video.play();
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const scheduleAutoHide = () => {
    if (controlsTimeout.current) clearTimeout(controlsTimeout.current);
    controlsTimeout.current = setTimeout(() => {
      setShowControls(false);
    }, 2000);
  };

  const handleMouseMove = () => {
    if (!isPlaying) return;
    if (!showControls) {
      setShowControls(true);
    }
    scheduleAutoHide();
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (video) {
      setDuration(video.duration);
      setIsMuted(video.muted);
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && !isDragging) {
      setCurrentTime(video.currentTime);
      setProgress((video.currentTime / video.duration) * 100);
    }
  };

  const handleSeek = (e) => {
    const video = videoRef.current;
    const bar = progressBarRef.current;
    if (!video || !bar) return;

    const rect = bar.getBoundingClientRect();
    const x = (e.clientX || e.touches?.[0].clientX) - rect.left;
    const percentage = Math.max(0, Math.min(x / rect.width, 1));

    setProgress(percentage * 100);
    video.currentTime = percentage * video.duration;
    setCurrentTime(video.currentTime);
  };

  const handleThumbDrag = (e) => {
    if (isDragging) handleSeek(e);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    handleSeek(e);
  };

  const handleMouseUp = (e) => {
    setIsDragging(false);
    handleSeek(e);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  useEffect(() => {
    const handleGlobalMouseUp = (e) => {
      if (isDragging) {
        setIsDragging(false);
        handleSeek(e);
      }
    };
    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchend', handleGlobalMouseUp);
    return () => {
      if (controlsTimeout.current) clearTimeout(controlsTimeout.current);
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="video-wrapper" onMouseMove={handleMouseMove} onTouchStart={handleMouseMove}>
      {showControls && (
        <div className="custom-video-controls-wrapper">
          <div className="custom-video-controls" onClick={togglePlayPause}>
            {isPlaying ? (
              <svg className="pause-icon" viewBox="0 0 100 100" width="60" height="60" fill="white">
                <rect x="30" y="25" width="12" height="50" />
                <rect x="58" y="25" width="12" height="50" />
              </svg>
            ) : (
              <svg className="play-icon" viewBox="0 0 100 100" width="60" height="60" fill="white">
                <polygon points="35,25 75,50 35,75" />
              </svg>
            )}
          </div>
        </div>
      )}
      <video
        ref={videoRef}
        onClick={togglePlayPause}
        onPlay={() => {
          setIsPlaying(true);
          scheduleAutoHide();
        }}
        onPause={() => {
          setIsPlaying(false);
          setShowControls(true);
          if (controlsTimeout.current) clearTimeout(controlsTimeout.current);
        }}
        onEnded={() => {
          setIsPlaying(false);
          setShowControls(true);
          videoRef.current.load();
          if (controlsTimeout.current) clearTimeout(controlsTimeout.current);
        }}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        playsInline
        controlsList="nodownload"
        width="100%"
        poster={poster}
        muted={defaultMuted}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-time-container">
        <span className="time-label">{formatTime(currentTime)}</span>
        <div
          ref={progressBarRef}
          className="custom-progress-bar"
          onClick={handleSeek}
          onMouseDown={handleMouseDown}
          onMouseMove={(e) => isDragging && handleThumbDrag(e)}
          onTouchStart={handleMouseDown}
          onTouchMove={(e) => isDragging && handleThumbDrag(e.touches[0])}
          onTouchEnd={handleMouseUp}
        >
          <div className="progress-filled" style={{ width: `${progress}%` }} />
          <div className="progress-thumb" style={{ left: `${progress}%` }} />
        </div>
        <span className="time-label">{formatTime(duration)}</span>
        {showControls && (
          <div className="custom-video-controls mute-controls" onClick={toggleMute} title={isMuted ? "Unmute" : "Mute"}>
            {isMuted ? (
              <svg className="mute-icon" viewBox="0 0 24 24" width="24" height="24" fill="white">
                <path d="M3 9v6h4l5 5V4l-5 5H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
              </svg>
            ) : (
              <svg className="unmute-icon" viewBox="0 0 24 24" width="24" height="24" fill="white">
                <path d="M3 9v6h4l5 5V4l-5 5H3zm13.11 3.47l-1.41-1.41C15.45 10.29 16 9.23 16 8c0-2.21-1.79-4-4-4v2c1.1 0 2 .9 2 2 0 .55-.22 1.05-.59 1.41L12 10.83V20l5-5h4V9h-4.89zM21 12c0 1.77-1.02 3.29-2.5 4.03v-8.05c1.48.73 2.5 2.25 2.5 4.02z"/>
              </svg>
            )}
          </div>
        )}
      </div>
    </div>
  );
}