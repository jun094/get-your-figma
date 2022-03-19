import { useState } from 'react'
import type { NextPage } from 'next'

import Result from 'src/components/Result'
import { getDocument } from 'src/utils/figma'

import auth from 'auth.json'

const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false)

  const [res, setRes] = useState({
    status: 0,
    data: {},
  })
  const [activeState, setActiveState] = useState('')

  const [figmaToken, setFigmaToken] = useState(auth.FIGMA_TOKEN)
  const [figmaFileKey, setFigmaFileKey] = useState(auth.FIGMA_FILE_KEY)
  const [figmaNodeId, setFigmaNodeId] = useState(auth.FIGMA_NODE_ID)

  const handleInput = e => {
    const { value, id } = e.target

    if (id === 'figmaToken') return setFigmaToken(value)
    if (id === 'figmaFileKey') return setFigmaFileKey(value)
    setFigmaNodeId(value)
  }

  const handleClick = async e => {
    setIsLoading(true)

    try {
      const response = await getDocument(figmaToken, figmaFileKey)

      setRes({
        status: response.status,
        data: response.data,
      })
    } catch (err: any) {
      const { response } = err

      console.log(response)
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
          <button
            className="flex items-center justify-center text-sm w-64 rounded-md shadow py-3 px-2 text-white bg-indigo-600"
            onClick={handleClick}
          >
            get figma !
          </button>

          <Result res={res} />
        </>
      )}
    </div>
  )
}

export default Home
