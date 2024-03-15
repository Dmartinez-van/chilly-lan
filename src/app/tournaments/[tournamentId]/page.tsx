'use client'

import { useParams } from 'next/navigation'
import React from 'react'

const TorunamentPage = () => {
  const { tournamentId } = useParams()

  return <div>tournamentId : {tournamentId}</div>
}

export default TorunamentPage
