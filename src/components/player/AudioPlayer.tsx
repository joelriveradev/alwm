'use client'

import Link from 'next/link'

import { useEffect, useRef, useState } from 'react'
import { useAudioPlayer } from '@/components/AudioProvider'
import { ForwardButton } from '@/components/player/ForwardButton'
import { PlayButton } from '@/components/player/PlayButton'
import { RewindButton } from '@/components/player/RewindButton'
import { AutoplayButton } from '@/components/player/AutoplayButton'
import { Slider } from '@/components/player/Slider'
import { X } from 'lucide-react'

function parseTime(seconds: number) {
  let hours = Math.floor(seconds / 3600)
  let minutes = Math.floor((seconds - hours * 3600) / 60)
  seconds = seconds - hours * 3600 - minutes * 60
  return [hours, minutes, seconds]
}

function formatHumanTime(seconds: number) {
  let [h, m, s] = parseTime(seconds)
  return `${h} hour${h === 1 ? '' : 's'}, ${m} minute${
    m === 1 ? '' : 's'
  }, ${s} second${s === 1 ? '' : 's'}`
}

export function AudioPlayer() {
  let player = useAudioPlayer()

  let wasPlayingRef = useRef(false)

  let [currentTime, setCurrentTime] = useState<number | null>(
    player.currentTime,
  )

  useEffect(() => {
    setCurrentTime(null)
  }, [player.currentTime])

  if (!player.song) {
    return null
  }

  function handleClose() {
    player.pause()
    player.seek(0)
    player.reset()
  }

  return (
    <div className='relative flex items-center gap-6 bg-white/90 px-4 py-4 pr-2.5 shadow shadow-slate-200/80 ring-1 ring-slate-900/5 backdrop-blur-sm md:px-6 md:pr-2.5'>
      <button
        className='absolute right-3 top-2 rounded-full p-1 hover:bg-neutral-100'
        onClick={handleClose}
        aria-label='Close audio player'
      >
        <X size={20} className='text-neutral-400' />
      </button>

      <div className='hidden md:block'>
        <PlayButton player={player} />
      </div>

      <div className='mb-[env(safe-area-inset-bottom)] flex flex-1 flex-col gap-3 overflow-hidden p-1'>
        <Link
          href={`/${player.song.id}`}
          className='truncate text-center text-sm font-bold leading-6 md:text-left'
          title={player.song.title}
        >
          {player.song.title}
        </Link>

        <div className='flex justify-between gap-6'>
          <div className='flex items-center md:hidden'></div>

          <div className='flex flex-none items-center gap-4'>
            <RewindButton player={player} />

            <div className='md:hidden'>
              <PlayButton player={player} />
            </div>

            <ForwardButton player={player} />
          </div>

          <Slider
            label='Current time'
            maxValue={player.duration}
            step={1}
            value={[currentTime ?? player.currentTime]}
            onChange={([value]) => setCurrentTime(value)}
            onChangeEnd={([value]) => {
              player.seek(value)
              if (wasPlayingRef.current) {
                player.play()
              }
            }}
            numberFormatter={{ format: formatHumanTime } as Intl.NumberFormat}
            onChangeStart={() => {
              wasPlayingRef.current = player.playing
              player.pause()
            }}
          />

          <AutoplayButton player={player} />
        </div>
      </div>
    </div>
  )
}
