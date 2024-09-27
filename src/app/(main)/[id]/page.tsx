import { cache } from 'react'
import { notFound } from 'next/navigation'

import { Container } from '@/components/Container'
import { SongPlayButton } from '@/components/SongPlayButton'
import { PauseIcon } from '@/components/PauseIcon'
import { PlayIcon } from '@/components/PlayIcon'
import { getScriptureSongs } from '@/lib/songs'
import { Lyrics } from '@/components/Lyrics'

interface Props {
  params: { id: string }
}

const getSong = cache(async (id: string) => {
  const allSongs = await getScriptureSongs()
  const song = allSongs.find((song) => song.id === id)
  return song ?? notFound()
})

export async function generateMetadata({ params }: Props) {
  return {
    title: await getSong(params.id).then(({ title }) => title),
  }
}

export default async function Song({ params }: Props) {
  const song = await getSong(params.id)
  const { id, title, scripture, description } = song

  return (
    <article className='py-16 lg:py-36'>
      <Container>
        <header className='flex flex-col'>
          <div className='flex items-center gap-6'>
            <SongPlayButton
              song={song}
              className='group relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-teal-950 hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-700 focus:ring-offset-4'
              playing={
                <PauseIcon className='h-7 w-7 fill-white group-active:fill-white/80' />
              }
              paused={
                <PlayIcon className='h-7 w-7 fill-white group-active:fill-white/80' />
              }
            />

            <div className='flex flex-col'>
              <h1 className='mt-2 text-4xl font-bold text-gray-900'>{title}</h1>

              <p className='order-first font-mono text-sm leading-7 text-gray-500'>
                {scripture}
              </p>
            </div>
          </div>

          <p className='ml-20 mt-3 text-lg font-medium leading-8 text-gray-500'>
            {description}
          </p>
        </header>

        <hr className='my-12 border-gray-200' />

        <Lyrics id={id} />
      </Container>
    </article>
  )
}
