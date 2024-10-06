import Link from 'next/link'

import { Container } from '@/components/Container'
import { SongPlayButton } from '@/components/SongPlayButton'
import { type Song } from '@/lib/songs'

function PauseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden='true' viewBox='0 0 10 10' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M1.496 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H2.68a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H1.496Zm5.82 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H8.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H7.316Z'
      />
    </svg>
  )
}

function PlayIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden='true' viewBox='0 0 10 10' {...props}>
      <path d='M8.25 4.567a.5.5 0 0 1 0 .866l-7.5 4.33A.5.5 0 0 1 0 9.33V.67A.5.5 0 0 1 .75.237l7.5 4.33Z' />
    </svg>
  )
}
export function SongEntry({ song }: { song: Song }) {
  const { id, title, description, scripture } = song
  const label = `${Number(id) + 1}. ${title}`

  return (
    <article aria-labelledby={`song-${id}-title`} className='py-10 sm:py-12'>
      <Container>
        <div className='flex flex-col items-start'>
          <p className='text-xs'>{scripture}</p>

          <h2
            id={`song-${id}-title`}
            className='mt-2 text-lg font-bold text-hunter'
          >
            <Link href={`/${id}#lyrics`} prefetch>
              {label}
            </Link>
          </h2>

          <p className='mt-1 text-base leading-7 text-neutral-600'>
            {description}
          </p>

          <div className='mt-4 flex items-center gap-4'>
            <SongPlayButton
              song={song}
              className='flex items-center gap-x-3 text-sm font-bold leading-6 text-teal-600 hover:text-teal-800 active:text-teal-900'
              playing={
                <>
                  <PauseIcon className='h-2.5 w-2.5 fill-current' />
                  <span aria-hidden='true'>Listen</span>
                </>
              }
              paused={
                <>
                  <PlayIcon className='h-2.5 w-2.5 fill-current' />
                  <span aria-hidden='true'>Listen</span>
                </>
              }
            />
            <span
              aria-hidden='true'
              className='text-sm font-bold text-slate-400'
            >
              /
            </span>

            <Link
              href={`/${id}#lyrics`}
              className='flex items-center text-sm font-bold leading-6 text-teal-600 hover:text-teal-800 active:text-teal-900'
              aria-label={`Show lyrics for ${title}`}
              prefetch
            >
              Show lyrics
            </Link>
          </div>
        </div>
      </Container>
    </article>
  )
}
