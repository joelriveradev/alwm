import { AssemblyAI } from 'assemblyai'
import fs from 'fs/promises'
import path from 'path'

const client = new AssemblyAI({
  apiKey: process.env.ASSEMBLY_AI_API_KEY as string,
})

async function transcribe(filePath: string) {
  const fileBuffer = await fs.readFile(filePath)

  const { text } = await client.transcripts.transcribe({
    audio: fileBuffer,
    speech_model: 'best',
    language_code: 'en',
  })

  return text
}

export async function GET() {
  try {
    const songs = await fs.readdir('public/songs')

    for (const song of songs) {
      const filePath = path.join('public/songs', song)
      const transcript = await transcribe(filePath)
      const id = song.split('.')[0]

      if (transcript) {
        await fs.writeFile(`src/lib/transcripts/${id}.txt`, transcript)
      }
    }
  } catch (error) {
    console.error(error)
    return new Response('Failed to transcribe songs', { status: 500 })
  }

  return new Response('Transcripts saved', { status: 200 })
}
