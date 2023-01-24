import axios from 'axios'

const getFigmaFile = async () => {
  const { data } = await axios.get(`/api/figma`)
  return data
}

export { getFigmaFile }
