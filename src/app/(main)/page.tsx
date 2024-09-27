import { Container } from '@/components/Container'
import { getScriptureSongs } from '@/lib/songs'
import { SongEntry } from '@/components/SongEntry'

export default async function Home() {
  const scriptureSongs = await getScriptureSongs()

  return (
    <div className='px-8 pb-12 pt-8 sm:pb-4 lg:px-0 lg:pt-12'>
      <Container>
        <h1 className='hidden text-2xl font-bold leading-7 text-slate-900 lg:block'>
          Scripture Songs
        </h1>
      </Container>

      <div className='divide-y divide-neutral-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100'>
        {scriptureSongs.map((song) => (
          <SongEntry key={song.id} song={song} />
        ))}
      </div>
    </div>
  )
}

export const revalidate = 10
