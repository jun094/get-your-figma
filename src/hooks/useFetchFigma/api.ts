import axios from 'axios'
import { FigmaResultType } from '_types/figma'

type FileKeyType = Pick<FigmaResultType, 'fileKey' | 'token'>

const getFigmaFile = async ({ token, fileKey }: FileKeyType) => {
  const { data } = await axios.get(`/api/figma/${fileKey}`)
  return data
}

export { getFigmaFile }
