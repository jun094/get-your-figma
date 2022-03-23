import axios from 'axios'

export const instanceFiles = (token, fileKey) =>
  axios.create({
    baseURL: `https://api.figma.com/v1/files/${fileKey}`,
    headers: {
      'X-FIGMA-TOKEN': token,
    },
  })

export const getFiles = async (token, fileKey, nodeId) => {
  const res = await instanceFiles(token, fileKey).get(
    `/nodes?ids=${decodeURIComponent(nodeId)}`,
  )
  return res
}

export const getComponents = async (token, fileKey, nodeId) => {
  const id = decodeURIComponent(nodeId)
  const {
    data: { nodes },
  } = await instanceFiles(token, fileKey).get(`/nodes?ids=${id}`)
  return {
    satus: 200,
    data: nodes[id].document.children,
  }
}

export const getTextData = async (token, fileKey, nodeId) => {
  const componets = await getComponents(token, fileKey, nodeId)

  const obj = componets.map(component => {
    return {
      status: 200,
      data: {
        asdf: 'asdf',
      },
    }
  })

  return {
    satus: 200,
    data: obj,
  }
}
