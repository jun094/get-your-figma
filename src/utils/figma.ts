import axios from 'axios'

export const instanceFiles = (token, fileKey) =>
  axios.create({
    baseURL: `https://api.figma.com/v1/files/${fileKey}`,
    headers: {
      'X-FIGMA-TOKEN': token,
    },
  })

export const getDocument = async (token, fileKey) => {
  const res = await instanceFiles(token, fileKey).get(
    `/nodes?ids=${decodeURIComponent('0%3A1')}`,
  )
  return res
}

export const getComponents = async (fileKey, nodeId) => {
  const {
    data: { nodes },
  } = await instanceFiles(fileKey).get(
    `/nodes?ids=${decodeURIComponent(nodeId)}`,
  )
  return nodes[nodeId].document.children
}

export const getTextData = async (fileKey, nodeId) => {
  const componets = await getComponents(fileKey, nodeId)

  return componets.map(comp => {
    return {
      id: comp.id,
      name: comp.name,
      ko:
        comp.children[0].type === 'TEXT'
          ? comp.children[0].name
          : '유효하지 않은 타입',
    }
  })
}
