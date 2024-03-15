'use client'

import { useParams } from 'next/navigation'
import React from 'react'

const PlayerProfile = () => {
  const { playerId } = useParams()

  return <div className="text-2xl text-blue-400">hellooooo, {playerId}</div>
}

export default PlayerProfile
