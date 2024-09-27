import Image from 'next/image'
import Link from 'next/link'

import { AboutSection } from '@/components/AboutSection'
import { AudioProvider } from '@/components/AudioProvider'
import { AudioPlayer } from '@/components/player/AudioPlayer'
import { TinyWaveFormIcon } from '@/components/TinyWaveFormIcon'
import { Waveform } from '@/components/Waveform'

function SpotifyIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden='true' viewBox='0 0 32 32' {...props}>
      <path d='M15.8 3a12.8 12.8 0 1 0 0 25.6 12.8 12.8 0 0 0 0-25.6Zm5.87 18.461a.8.8 0 0 1-1.097.266c-3.006-1.837-6.787-2.252-11.244-1.234a.796.796 0 1 1-.355-1.555c4.875-1.115 9.058-.635 12.432 1.427a.8.8 0 0 1 .265 1.096Zm1.565-3.485a.999.999 0 0 1-1.371.33c-3.44-2.116-8.685-2.728-12.755-1.493a1 1 0 0 1-.58-1.91c4.65-1.41 10.428-.726 14.378 1.7a1 1 0 0 1 .33 1.375l-.002-.002Zm.137-3.629c-4.127-2.45-10.933-2.675-14.871-1.478a1.196 1.196 0 1 1-.695-2.291c4.52-1.374 12.037-1.107 16.785 1.711a1.197 1.197 0 1 1-1.221 2.06' />
    </svg>
  )
}

function ApplePodcastIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden='true' viewBox='0 0 32 32' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M27.528 24.8c-.232.592-.768 1.424-1.536 2.016-.44.336-.968.664-1.688.88-.768.232-1.72.304-2.904.304H10.6c-1.184 0-2.128-.08-2.904-.304a4.99 4.99 0 0 1-1.688-.88c-.76-.584-1.304-1.424-1.536-2.016C4.008 23.608 4 22.256 4 21.4V10.6c0-.856.008-2.208.472-3.4.232-.592.768-1.424 1.536-2.016.44-.336.968-.664 1.688-.88C8.472 4.08 9.416 4 10.6 4h10.8c1.184 0 2.128.08 2.904.304a4.99 4.99 0 0 1 1.688.88c.76.584 1.304 1.424 1.536 2.016C28 8.392 28 9.752 28 10.6v10.8c0 .856-.008 2.208-.472 3.4Zm-9.471-6.312a1.069 1.069 0 0 0-.32-.688c-.36-.376-.992-.624-1.736-.624-.745 0-1.377.24-1.737.624-.183.2-.287.4-.32.688-.063.558-.024 1.036.04 1.807v.009c.065.736.184 1.72.336 2.712.112.712.2 1.096.28 1.368.136.448.625.832 1.4.832.776 0 1.273-.392 1.4-.832.08-.272.169-.656.28-1.368.152-1 .273-1.976.337-2.712.072-.776.104-1.256.04-1.816ZM16 16.375c1.088 0 1.968-.88 1.968-1.967 0-1.08-.88-1.968-1.968-1.968s-1.968.88-1.968 1.968.88 1.967 1.968 1.967Zm-.024-9.719c-4.592.016-8.352 3.744-8.416 8.336-.048 3.72 2.328 6.904 5.648 8.072.08.032.16-.04.152-.12a35.046 35.046 0 0 0-.041-.288c-.029-.192-.057-.384-.079-.576a.317.317 0 0 0-.168-.232 7.365 7.365 0 0 1-4.424-6.824c.04-4 3.304-7.256 7.296-7.288 4.088-.032 7.424 3.28 7.424 7.36 0 3.016-1.824 5.608-4.424 6.752a.272.272 0 0 0-.168.232l-.12.864c-.016.088.072.152.152.12a8.448 8.448 0 0 0 5.648-7.968c-.016-4.656-3.816-8.448-8.48-8.44Zm-5.624 8.376c.04-2.992 2.44-5.464 5.432-5.576 3.216-.128 5.88 2.456 5.872 5.64a5.661 5.661 0 0 1-2.472 4.672c-.08.056-.184-.008-.176-.096.016-.344.024-.648.008-.96 0-.104.04-.2.112-.272a4.584 4.584 0 0 0 1.448-3.336 4.574 4.574 0 0 0-4.752-4.568 4.585 4.585 0 0 0-4.392 4.448 4.574 4.574 0 0 0 1.448 3.456c.08.072.12.168.112.272-.016.32-.016.624.008.968 0 .088-.104.144-.176.096a5.65 5.65 0 0 1-2.472-4.744Z'
      />
    </svg>
  )
}

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AudioProvider>
      <header className='bg-emerald-50/20 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-112 lg:items-start lg:overflow-y-auto xl:w-120'>
        <div className='relative z-10 mx-auto px-4 pb-4 pt-10 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-neutral-200 lg:px-8 lg:py-12 xl:px-12'>
          <Link
            href='/'
            className='relative mx-auto block w-48 overflow-hidden rounded-lg bg-neutral-200 shadow-xl shadow-neutral-200 sm:w-64 sm:rounded-xl lg:w-auto lg:rounded-2xl'
            aria-label='Homepage'
          >
            <Image
              className='w-full'
              src='/poster.png'
              width={500}
              height={500}
              alt='Add Life With Music album cover. Photo of an open Bible with a dark green background.'
              sizes='(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem'
              priority
            />
            <div className='absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl' />
          </Link>

          <div className='mt-10 text-center lg:mt-12 lg:text-left'>
            <p className='flex flex-col text-xl font-bold text-slate-900'>
              <Link href='/'>Add Life With Music</Link>

              <small className='text- text-sm font-normal antialiased'>
                Produced by Sheri Stump, October 03, 2012.
              </small>
            </p>
          </div>

          {/* <AboutSection className='mt-12 hidden lg:block' /> */}

          <section className='mt-10 lg:mt-12'>
            <h2 className='sr-only flex items-center font-mono text-sm font-medium leading-7 text-slate-900 lg:not-sr-only'>
              <TinyWaveFormIcon
                colors={['fill-teal-600', 'fill-gray-400']}
                className='h-2.5 w-2.5'
              />
              <span className='ml-2.5'>Listen</span>
            </h2>
            <div className='h-px bg-gradient-to-r from-slate-200/0 via-slate-200 to-slate-200/0 lg:hidden' />

            <ul
              role='list'
              className='mt-4 flex justify-center gap-10 text-base font-medium leading-7 text-neutral-700 sm:gap-8 lg:flex-col lg:gap-4'
            >
              {(
                [
                  [
                    'Spotify',
                    SpotifyIcon,
                    'https://open.spotify.com/artist/2EwLPVvsKhRpbCKEROBs8A',
                  ],
                  [
                    'Apple Music',
                    ApplePodcastIcon,
                    'https://music.apple.com/us/album/add-life-with-music/643028874',
                  ],
                ] as const
              ).map(([label, Icon, link]) => (
                <li key={label} className='flex'>
                  <Link
                    href={link}
                    className='group flex items-center'
                    aria-label={label}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <Icon className='h-8 w-8 fill-slate-400 group-hover:fill-slate-600' />
                    <span className='hidden sm:ml-3 sm:block'>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </header>

      <main className='border-t border-slate-200 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120'>
        <Waveform className='absolute left-0 top-0 h-20 w-full' />
        <div className='relative'>{children}</div>
      </main>

      <div className='fixed inset-x-0 bottom-0 z-10 lg:left-112 xl:left-120'>
        <AudioPlayer />
      </div>
    </AudioProvider>
  )
}
