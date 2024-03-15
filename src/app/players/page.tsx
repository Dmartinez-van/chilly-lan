import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import React from 'react'

const Players = () => {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-6xl">
          List of players
        </h1>
      </div>
    </MaxWidthWrapper>
  )
}

export default Players
