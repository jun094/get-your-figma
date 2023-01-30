import { Suspense, useRef, useState } from 'react'

import Button from '_components/atoms/Button'
import Input from '_components/atoms/Input'
import Top from '_components/atoms/Top'
import PageWrapper from '_components/modules/PageWrapper'
import Stack from '_components/atoms/Stack'
import Toast from '_components/atoms/Toast'
import SSRJsonViewrLoading from '_components/atoms/SSRJsonViewer/loading'

import FigmaResults from '_components/modules/FigmaResults'

import { validFigmaFileKey, extractFigmaFileKey } from '_utils/index'

function HomePage() {
  const tokenRef = useRef<HTMLInputElement>(null)
  const urlRef = useRef<HTMLInputElement>(null)

  const [isShowResult, setIsShoResult] = useState<boolean>(false)
  const [isShowToast, setIsShowToast] = useState<boolean>(false)

  // NOTE: token 기입 안 한 경우, 임시 token으로 fetch 작업 진행
  const tokenValue = (tokenRef.current?.value ||
    process.env.NEXT_PUBLIC_FIGMA_TOKEN) as string
  const urlValue = urlRef.current?.value || ''
  const fileKey = extractFigmaFileKey(urlValue)

  const handleClickButton = () => {
    // invalid
    if (!urlRef.current?.value || !validFigmaFileKey(urlRef.current?.value)) {
      setIsShoResult(false)
      setIsShowToast(true)
    }
    // valid
    else {
      setIsShoResult(true)
      setIsShowToast(false)
    }
  }

  return (
    <>
      <Toast
        isShowToast={isShowToast}
        status="error"
        message="Please enter correct Figma URL"
      />
      <PageWrapper>
        <div className="flex flex-col text-center mb-8">
          <Top>GET.</Top>
          <Top>YOUR.</Top>
          <Top>FIGMA.</Top>
        </div>

        <Stack>
          <Input ref={tokenRef} placeholder="Your Figma Token" />
          <Input
            ref={urlRef}
            placeholder="Your Figma URL"
            onFocus={() => setIsShowToast(false)}
          />

          <Button onClick={handleClickButton}>Get Your Figma !</Button>

          {isShowResult && (
            <Suspense fallback={<SSRJsonViewrLoading />}>
              <FigmaResults token={tokenValue} fileKey={fileKey} />
            </Suspense>
          )}
        </Stack>
      </PageWrapper>
    </>
  )
}

export default HomePage
