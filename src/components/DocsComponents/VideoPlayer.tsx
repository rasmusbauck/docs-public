import React from 'react'

type VideoPlayerProps = {
  source: string,
  width: string
}

export default function VideoPlayer({source, width}: VideoPlayerProps) {
  return (
    <video controls style={{
      width: width
    }}>
      <source src={source} type="video/mp4" />
    </video>)
}