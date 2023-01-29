import { Suspense, useRef, useState } from 'react'

import Button from '_components/atoms/Button'
import Input from '_components/atoms/Input'
import Top from '_components/atoms/Top'
import PageWrapper from '_components/modules/PageWrapper'
import Stack from '_components/atoms/Stack'

import FigmaResults from '_components/modules/FigmaResults'
import FigmaResultsLoading from '_components/modules/FigmaResults/loading'

import { extractFileKey } from '_utils/index'

function HomePage() {
  const [isEnabledResults, setIsEnabledResults] = useState<boolean>(false)

  const tokenRef = useRef<HTMLInputElement>(null)
  const urlRef = useRef<HTMLInputElement>(null)

  // NOTE: token 기입 안 한 경우, 임시 token으로 fetch 작업 진행
  const token = tokenRef.current?.value || process.env.NEXT_PUBLIC_FIGMA_TOKEN
  const url = urlRef.current?.value || ''

  return (
    <PageWrapper>
      <div className="flex flex-col text-center mb-8">
        <Top>GET.</Top>
        <Top>YOUR.</Top>
        <Top>FIGMA.</Top>
      </div>

      <Stack>
        <Input ref={tokenRef} placeholder="Your Figma Token" />
        <Input ref={urlRef} placeholder="Your Figma URL" />

        <Button onClick={() => setIsEnabledResults(true)}>
          Get Your Figma !
        </Button>

        <Suspense fallback={<FigmaResultsLoading />}>
          <FigmaResults
            token={token || ''}
            fileKey={extractFileKey(url)}
            isEnabledResults={isEnabledResults}
          />
        </Suspense>
      </Stack>
    </PageWrapper>
  )
}

export default HomePage
