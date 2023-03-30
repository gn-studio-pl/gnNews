import React, { FC } from 'react'
import { appData } from '../../app/features/appSlice'
import { useAppSelector } from '../../app/hooks'
import { Text, TextBold } from '../../components'

interface IContentHeadingProps {
  id: string
}

const ContentHeading: FC<IContentHeadingProps> = ({ id }) => {
  const totalArticle = useAppSelector(appData.getTotalArticles)

  return !totalArticle ? (
    <Text className="text-center">No Artilce</Text>
  ) : (
    <TextBold className="text-center my-8 text-2xl">
      News from {id.toUpperCase()}
    </TextBold>
  )
}

export default ContentHeading
