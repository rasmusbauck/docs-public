import React from 'react'

type VideoPlayerProps = {
  source: string,
  type: string,
  width: string
}

export default function VideoPlayer({source, type, width}: VideoPlayerProps) {
  return (
    <video controls style={{
      width: width
    }}>
      <source src={source} type={type} />
    </video>)
}