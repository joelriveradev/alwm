'use client'

import { createContext, useContext, useMemo, useReducer, useRef } from 'react'
import { Song, getScriptureSongs } from '@/lib/songs'

interface PlayerState {
  autoplaying: boolean
  playing: boolean
  duration: number
  currentTime: number
  song: Song | null
}

interface PublicPlayerActions {
  autoplay: () => void
  play: (song?: Song) => void
  pause: () => void
  toggle: (song?: Song) => void
  seekBy: (amount: number) => void
  seek: (time: number) => void
  isPlaying: (song?: Song) => boolean
  reset: () => void
}

export type PlayerAPI = PlayerState & PublicPlayerActions

const enum ActionKind {
  SET_META = 'SET_META',
  PLAY = 'PLAY',
  PAUSE = 'PAUSE',
  SET_CURRENT_TIME = 'SET_CURRENT_TIME',
  SET_DURATION = 'SET_DURATION',
  RESET = 'RESET',
  AUTOPLAY = 'AUTOPLAY',
}

type Action =
  | { type: ActionKind.AUTOPLAY }
  | { type: ActionKind.SET_META; payload: Song }
  | { type: ActionKind.PLAY }
  | { type: ActionKind.PAUSE }
  | { type: ActionKind.SET_CURRENT_TIME; payload: number }
  | { type: ActionKind.SET_DURATION; payload: number }
  | { type: ActionKind.RESET }
const AudioPlayerContext = createContext<PlayerAPI | null>(null)

function audioReducer(state: PlayerState, action: Action): PlayerState {
  switch (action.type) {
    case ActionKind.SET_META:
      return { ...state, song: action.payload }
    case ActionKind.PLAY:
      return { ...state, playing: true }
    case ActionKind.PAUSE:
      return { ...state, playing: false }
    case ActionKind.SET_CURRENT_TIME:
      return { ...state, currentTime: action.payload }
    case ActionKind.SET_DURATION:
      return { ...state, duration: action.payload }
    case ActionKind.RESET:
      return {
        ...state,
        playing: false,
        duration: 0,
        currentTime: 0,
        song: null,
      }
    case ActionKind.AUTOPLAY:
      return { ...state, autoplaying: !state.autoplaying }
  }
}

export function AudioProvider({ children }: { children: React.ReactNode }) {
  let [state, dispatch] = useReducer(audioReducer, {
    autoplaying: false,
    playing: false,
    duration: 0,
    currentTime: 0,
    song: null,
  })

  let playerRef = useRef<React.ElementRef<'audio'>>(null)

  let actions = useMemo<PublicPlayerActions>(() => {
    return {
      reset() {
        dispatch({ type: ActionKind.RESET })
      },
      play(song) {
        if (song) {
          dispatch({ type: ActionKind.SET_META, payload: song })

          if (playerRef.current && playerRef.current.currentSrc !== song.url) {
            let playbackRate = playerRef.current.playbackRate
            playerRef.current.src = song.url
            playerRef.current.load()
            playerRef.current.pause()
            playerRef.current.playbackRate = playbackRate
            playerRef.current.currentTime = 0
          }
        }

        playerRef.current?.play()
      },
      pause() {
        playerRef.current?.pause()
      },
      toggle(song) {
        this.isPlaying(song) ? actions.pause() : actions.play(song)
      },
      seekBy(amount) {
        if (playerRef.current) {
          playerRef.current.currentTime += amount
        }
      },
      seek(time) {
        if (playerRef.current) {
          playerRef.current.currentTime = time
        }
      },
      autoplay() {
        dispatch({ type: ActionKind.AUTOPLAY })
      },
      isPlaying(song) {
        return song
          ? state.playing && playerRef.current?.currentSrc === song.url
          : state.playing
      },
    }
  }, [state.playing])

  let api = useMemo<PlayerAPI>(
    () => ({ ...state, ...actions }),
    [state, actions],
  )

  return (
    <>
      <AudioPlayerContext.Provider value={api}>
        {children}
      </AudioPlayerContext.Provider>

      <audio
        ref={playerRef}
        onPlay={() => dispatch({ type: ActionKind.PLAY })}
        onPause={() => dispatch({ type: ActionKind.PAUSE })}
        onEnded={async () => {
          const { song, autoplaying } = state

          if (song && autoplaying) {
            const songs = await getScriptureSongs()
            const currentSongID = Number(song.id)

            if (currentSongID < songs.length - 1) {
              const nextSong = songs[currentSongID + 1]
              actions.play(nextSong)
            } else {
              actions.play(songs[0])
            }

            actions.play()
          }
        }}
        onTimeUpdate={(event) => {
          dispatch({
            type: ActionKind.SET_CURRENT_TIME,
            payload: Math.floor(event.currentTarget.currentTime),
          })
        }}
        onDurationChange={(event) => {
          dispatch({
            type: ActionKind.SET_DURATION,
            payload: Math.floor(event.currentTarget.duration),
          })
        }}
      />
    </>
  )
}

export function useAudioPlayer(song?: Song) {
  let player = useContext(AudioPlayerContext)

  return useMemo<PlayerAPI>(
    () => ({
      ...player!,
      play() {
        player!.play(song)
      },
      toggle() {
        player!.toggle(song)
      },
      get playing() {
        return player!.isPlaying(song)
      },
    }),
    [player, song],
  )
}
