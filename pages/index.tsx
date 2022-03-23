import { useState } from 'react'
import type { NextPage } from 'next'

import Result from 'src/components/Result'
import Button from '../src/components/Button'
import { getDocument } from 'src/utils/figma'

const FIGMA_TOKEN = process?.env.NEXT_PUBLIC_FIGMA_TOKEN || ''
const FIGMA_FILE_KEY = process?.env.NEXT_PUBLIC_FIGMA_FILE_KEY || ''
const FIGMA_NODE_ID = process?.env.NEXT_PUBLIC_FIGMA_NODE_ID || ''

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [res, setRes] = useState({
    status: 0,
    data: {},
  })
  //const [activeState, setActiveState] = useState('')

  const [figmaToken, setFigmaToken] = useState(FIGMA_TOKEN)
  const [figmaFileKey, setFigmaFileKey] = useState(FIGMA_FILE_KEY)
  const [figmaNodeId, setFigmaNodeId] = useState(FIGMA_NODE_ID)

  const handleInput = (e: any) => {
    const { value, id } = e.target

    if (id === 'figmaToken') return setFigmaToken(value)
    if (id === 'figmaFileKey') return setFigmaFileKey(value)
    setFigmaNodeId(value)
  }

  const handleClick = async () => {
    setIsLoading(true)

    try {
      const response = await getDocument(figmaToken, figmaFileKey)

      setRes({
        status: response.status,
        data: response.data,
      })
    } catch (err: any) {
      const { response } = err
      setRes({
        status: response.status,
        data: response.data,
      })
    }

    setIsLoading(false)
  }

  return (
    <div className="flex items-center justify-center flex-col">
      <span className="flex mb-3">
        <label>token</label>
        <input
          className="border-solid border-solid border-2 border-sky-500 "
          id="figmaToken"
          value={figmaToken}
          onChange={handleInput}
        />
      </span>
      <span className="flex mb-3">
        <label>file key</label>
        <input
          className="border-solid border-solid border-2 border-sky-500 "
          id="figmaFileKey"
          value={figmaFileKey}
          onChange={handleInput}
        />
      </span>
      <span className="flex mb-3">
        <label>file node id</label>
        <input
          className="border-solid border-solid border-2 border-sky-500 "
          id="figmaNodeId"
          value={figmaNodeId}
          onChange={handleInput}
        />
      </span>

      {isLoading ? (
        <h3>loading...</h3>
      ) : (
        <>
          <div className="flex">
            <Button className="mr-2" onClick={handleClick}>
              Get Documnet
            </Button>
            <Button className="mr-2" onClick={handleClick}>
              Get Component
            </Button>
            <Button className="mr-2" onClick={handleClick}>
              Get Text
            </Button>
            <Button className="mr-2" onClick={handleClick}>
              Get Svg
            </Button>
          </div>

          <Result res={res} />
        </>
      )}
    </div>
  )
}

export default Home
