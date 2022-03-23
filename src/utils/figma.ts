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

export const getChildren = async (token, fileKey, nodeId) => {
  const id = decodeURIComponent(nodeId)
  const {
    data: { nodes },
  } = await instanceFiles(token, fileKey).get(`/nodes?ids=${id}`)
  return {
    satus: 200,
    data: nodes[id].document.children,
  }
}

export const getComponents = async (token, fileKey, nodeId) => {
  const { satus, data } = await getChildren(token, fileKey, nodeId)

  if (satus !== 200)
    return {
      satus: 500,
      data: null,
    }

  return {
    satus: 200,
    data: data
      .filter(component => component.type === 'COMPONENT')
      .map(component => {
        return {
          id: component.id,
          type: component.type,
          characters: component.characters,
          name: component.name,
        }
      }),
  }
}

export const getTextData = async (token, fileKey, nodeId) => {
  const { satus, data } = await getChildren(token, fileKey, nodeId)

  if (satus !== 200)
    return {
      satus: 500,
      data: null,
    }

  return {
    satus: 200,
    data: data
      .filter(text => text.type === 'TEXT')
      .map(text => {
        return {
          id: text.id,
          type: text.type,
          characters: text.characters,
          name: text.name,
        }
      }),
  }
}
