'use client'

import { useParams } from 'next/navigation'
import React from 'react'

const GamePage = () => {
  const { gameId } = useParams()

  return <div>gameId : {gameId}</div>
}

export default GamePage
