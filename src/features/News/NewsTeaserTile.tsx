import React, { FC } from 'react'
import { NApi } from '../../app/services/newsApi.interface'
import { TextBold, Text, Image } from '../../components'

interface INewsTeaserTileProps {
  article: NApi.IArticle
  onClick: () => void
  publicationTime: string
}

const NewsTeaserTile: FC<INewsTeaserTileProps> = ({
  article,
  onClick,
  publicationTime
}) => {
  return (
    <button
      className="flex flex-col justify-between text-center border-lightgray border border-solid 
                 min-h-15 hover:bg-lightgray transition ease-in-out duration-300 shadow-md"
      type="button"
      onClick={onClick}
      key={article.url}>
      {/* image */}
      {article.urlToImage && (
        <Image src={article.urlToImage} title={article.title} />
      )}

      {/* title */}
      <TextBold className="px-4 py-2 text-left">
        {article?.title || 'no title'}
      </TextBold>

      <div className="p-4">
        {/* source */}
        <div className="flex pt-6">
          <Text>Source:&nbsp;</Text>
          <TextBold>{article?.source.name}</TextBold>
        </div>

        {/* publication time */}
        <div className="flex pt-2">
          <Text>Publication time:&nbsp;</Text>
          <TextBold>{publicationTime}</TextBold>
        </div>
      </div>
    </button>
  )
}

export default NewsTeaserTile
