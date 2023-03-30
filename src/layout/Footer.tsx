import React, { useState, useEffect } from 'react'
import { appData } from '../app/features/appSlice'
import { useAppSelector } from '../app/hooks'
import { Text } from '../components'

const Footer = () => {
  const totalArticle = useAppSelector(appData.getTotalArticles)
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="desktop:ml-64 py-4 text-center">
      <Text className="mb-1">{totalArticle || 'No'}&nbsp; Articles</Text>
      <Text>{time}</Text>
    </footer>
  )
}

export default Footer
