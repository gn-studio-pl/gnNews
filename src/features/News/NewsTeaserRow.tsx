import React, { FC } from 'react'
import { NApi } from '../../app/services/newsApi.interface'
import { TextBold, Text } from '../../components'

interface INewsTeaserRowProps {
  article: NApi.IArticle
  onClick: () => void
  publicationTime: string
}

const NewsTeaserRow: FC<INewsTeaserRowProps> = ({
  article,
  onClick,
  publicationTime
}) => {
  return (
    <button
      className="py-4 pl-4 desktop:flex justify-start
                  border-b-lightgray border-b border-solid hover:bg-lightgray transition ease-in-out duration-300 shadow-md"
      type="button"
      onClick={onClick}
      key={article.url}>
      {/* title */}
      <div className="w-full mobile:flex tablet:flex desktop:w-3/5 text-left pb-2">
        <Text>Title:&nbsp;</Text>
        <TextBold>{article?.title}</TextBold>
      </div>

      {/* source */}
      <div className="w-full text-left desktop:text-center mobile:flex tablet:flex desktop:w-1/5 pb-2">
        <Text>Source:&nbsp;</Text>
        <TextBold>{article?.source.name}</TextBold>
      </div>

      {/* publication time */}
      <div className="w-full text-left desktop:text-center  mobile:flex tablet:flex desktop:w-1/5 pb-2">
        <Text>Publication time:&nbsp;</Text>
        <TextBold>{publicationTime}</TextBold>
      </div>
    </button>
  )
}

export default NewsTeaserRow
