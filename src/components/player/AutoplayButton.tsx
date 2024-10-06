import { type PlayerAPI } from '@/components/AudioProvider'
import { Repeat } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Props {
  player: PlayerAPI
}

export function AutoplayButton({ player }: Props) {
  const { autoplay, autoplaying } = player

  return (
    <button
      type='button'
      className='relative flex h-4 w-4 items-center justify-center rounded-md p-3 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 md:order-none'
      onClick={() => autoplay()}
      aria-label='Auto play'
    >
      <div className='absolute -inset-4 md:hidden' />

      <Repeat
        size={17}
        className={cn('right-0 shrink-0 text-slate-400', {
          'text-slate-600': autoplaying,
        })}
      />
    </button>
  )
}
