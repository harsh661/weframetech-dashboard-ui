import React from 'react'

interface ProgressbarProps {
    progress: number
}

const Progressbar = ( {progress}: ProgressbarProps) => {
  return (
    <div className='flex items-center gap-3'>
        <p className='font-bold text-white'>Total Progress {progress}%</p>
        <div className='w-60 h-3 bg-gray-700/50 rounded-full overflow-hidden relative'>
            <div className='absolute h-full bg-accent-purple rounded-full' style={{width: progress + '%'}}/>
        </div>
    </div>
  )
}

export default Progressbar