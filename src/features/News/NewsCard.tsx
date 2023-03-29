import React from 'react'
import { appData } from '../../app/features/appSlice'
import { useAppSelector } from '../../app/hooks'
import { Text, TextBold } from '../../components'

const NewsCard = () => {
  const article = useAppSelector(appData.getArticle)

  return (
    <div className="news-card">
      <TextBold className="pb-4">{article?.description}</TextBold>

      <div className="pb-2">
        <Text>Author:&nbsp;</Text>
        <Text>{article?.author}</Text>
      </div>

      <div>
        <Text>Source:&nbsp;</Text>
        <Text>{article?.url}</Text>
      </div>
    </div>
  )
}

export default NewsCard
