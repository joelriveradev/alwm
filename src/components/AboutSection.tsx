'use client'

import { useState } from 'react'

import { cn } from '@/lib/utils'
import { TinyWaveFormIcon } from '@/components/TinyWaveFormIcon'

export function AboutSection(props: React.ComponentPropsWithoutRef<'section'>) {
  let [isExpanded, setIsExpanded] = useState(false)

  return (
    <section {...props}>
      <h2 className='flex items-center font-mono text-sm font-medium leading-7 text-gray-900'>
        <TinyWaveFormIcon
          colors={['fill-gray-400', 'fill-teal-600']}
          className='h-2.5 w-2.5'
        />
        <span className='ml-2.5'>About</span>
      </h2>

      <p
        className={cn('mt-2 text-base leading-7 text-gray-700', {
          'lg:line-clamp-3': !isExpanded,
        })}
      >
        In this show, Eric and Wes dig deep to get to the facts with guests who
        have been labeled villains by a society quick to judge, without actually
        getting the full story. Tune in every Thursday to get to the truth with
        another misunderstood outcast as they share the missing context in their
        tragic tale.
      </p>

      {!isExpanded && (
        <button
          type='button'
          className='mt-2 hidden text-sm font-bold leading-6 text-gray-500 hover:text-teal-700 active:text-teal-900 lg:inline-block'
          onClick={() => setIsExpanded(true)}
        >
          Show more
        </button>
      )}
    </section>
  )
}
