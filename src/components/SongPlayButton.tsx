'use client'

import { useAudioPlayer } from '@/components/AudioProvider'
import { type Song } from '@/lib/songs'

export function SongPlayButton({
  song,
  playing,
  paused,
  ...props
}: React.ComponentPropsWithoutRef<'button'> & {
  song: Song
  playing: React.ReactNode
  paused: React.ReactNode
}) {
  let player = useAudioPlayer(song)

  return (
    <button
      type='button'
      onClick={() => player.toggle()}
      aria-label={`${player.playing ? 'Pause' : 'Play'} episode ${song.title}`}
      {...props}
    >
      {player.playing ? playing : paused}
    </button>
  )
}
