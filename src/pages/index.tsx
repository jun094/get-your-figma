import { Suspense, useState } from 'react'

import Button from '@components/atoms/Button'
import Input from '@components/atoms/Input'
import FigmaResults from '@components/modules/FigmaResults'

function HomePage() {
  const [isGetData, setIsGetData] = useState(false)

  return (
    <div className="flex flex-col">
      <Input />
      <Button onClick={() => setIsGetData(prev => !prev)}>
        Get Your Figma !
      </Button>

      <Suspense fallback={<h1>loading...</h1>}>
        <FigmaResults isGetData={isGetData} />
      </Suspense>
    </div>
  )
}

export default HomePage
