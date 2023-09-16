import React from "react"

type Props = {
  count: number
  reverse?: boolean
}

const People = ({ count, reverse }: Props) => {
  let peopleCount = count
  const width = count * 32 + 'px'
//   if the count is more than 5 only show 5 elements at max
  if (count >= 5) {
    peopleCount = 5
  }
  return (
    <div className="items-center relative inline-block h-10 border-inherit" style={{width: width}}>
      {Array.from({ length: peopleCount }).map((_, index) => {
        const position = reverse ? count - index - 1 : index
        return (
          <div
            key={index}
            className={`w-10 h-10 flex items-center justify-center rounded-full bg-off-white border-2 border-inherit absolute ${
              peopleCount >= 5 && reverse && "first:bg-accent-pink"
            }`}
            style={{ left: `${position * 30}px`, zIndex: count - index }}
          >
            {position === count - 1 && peopleCount >= 5 && (
              <span className="font-bold text-white">5+</span>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default People
