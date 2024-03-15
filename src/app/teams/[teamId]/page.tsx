'use client'

import { useParams } from 'next/navigation'
import React from 'react'

const TeamPage = () => {
  const { teamId } = useParams()

  return <div>teamId : {teamId}</div>
}

export default TeamPage
