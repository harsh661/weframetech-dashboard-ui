import React from "react"

interface ProgressbarProps {
  progress: number
  withoutText?: boolean
  color?: string
}

const Progressbar = ({ progress, withoutText, color = "#6418C3" }: ProgressbarProps) => {
  return (
    <div className="flex items-center gap-3">
      {!withoutText && (
        <p className="font-bold text-white">Total Progress {progress}%</p>
      )}
      <div className={`${withoutText ? 'h-2 w-full': 'h-3 w-60'} bg-gray-700/50 rounded-full overflow-hidden relative`}>
        <div
          className="absolute h-full rounded-full"
          style={{ width: progress + "%", background: color }}
        />
      </div>
    </div>
  )
}

export default Progressbar
