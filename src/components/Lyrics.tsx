interface Props {
  id: string
}

export async function Lyrics({ id }: Props) {
  const lyrics: { stanzas: Array<string> } = await import(
    `../lib/lyrics/${id}.json`
  )

  return (
    <div className='pl-20' id='lyrics'>
      <p className='mb-7 font-medium'>Lyrics</p>

      {lyrics.stanzas.map((stanza, i) => (
        <p
          key={i}
          className='mb-4 text-lg text-neutral-500 antialiased last:mb-0'
        >
          {stanza}
        </p>
      ))}
    </div>
  )
}
