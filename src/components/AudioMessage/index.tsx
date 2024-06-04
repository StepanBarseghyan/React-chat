import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import s from "./styles.module.scss";

interface AudioMessageProps {
  audioUrl: string;
}

const AudioMessage: React.FC<AudioMessageProps> = ({ audioUrl }) => {
  const waveformRef = useRef<HTMLDivElement | null>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);
  const [remainingTime, setRemainingTime] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isWaveSurferReady, setIsWaveSurferReady] = useState<boolean>(false);

  useEffect(() => {
    if (waveformRef.current) {
      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "#E6FF94",
        progressColor: "#40A578",
        cursorColor: "#ffffff",
        height: 30,
        barHeight: 2,
      });

      wavesurfer.current.on("ready", () => {
        setIsWaveSurferReady(true);
        setRemainingTime(wavesurfer.current!.getDuration());
      });

      wavesurfer.current.on("play", () => {
        setIsPlaying(true);
      });

      wavesurfer.current.on("pause", () => {
        setIsPlaying(false);
      });

      wavesurfer.current.on("finish", () => {
        setIsPlaying(false);
      });

      wavesurfer.current.on("audioprocess", () => {
        if (wavesurfer.current) {
          const currentTime = wavesurfer.current.getCurrentTime();
          const duration = wavesurfer.current.getDuration();
          setRemainingTime(duration - currentTime);
        }
      });

      wavesurfer.current.load(audioUrl);
    }

    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
        setIsWaveSurferReady(false);
      }
    };
  }, [audioUrl]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const playPause = () => {
    if (wavesurfer.current) {
      if (wavesurfer.current.isPlaying()) {
        wavesurfer.current.pause();
      } else {
        wavesurfer.current.play();
      }
    }
  };

  return (
    <>
      <button className={s.btn} onClick={playPause}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <div className={s.waves} ref={waveformRef} />
      {remainingTime !== null && (
        <p className={s.time}> {formatTime(remainingTime)}</p>
      )}
    </>
  );
};

export default AudioMessage;
