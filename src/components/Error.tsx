import React from 'react'
import { Text } from '../components'

const Error = () => {
  return (
    <div className="p-6 mobile:px-0 tablet:px-0 min-h-[10vh]">
      <Text className="text-center">Something went wrong!</Text>
    </div>
  )
}

export default Error
