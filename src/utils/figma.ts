import axios from 'axios'

const instanceFiles = (token, fileKey) =>
  axios.create({
    baseURL: `https://api.figma.com/v1/files/${fileKey}`,
    headers: {
      'X-FIGMA-TOKEN': token,
    },
  })

const instanceImages = (token, fileKey) =>
  axios.create({
    baseURL: `https://api.figma.com/v1/images/${fileKey}`,
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

export const getSvgData = async (token, fileKey, nodeId) => {
  const { satus, data } = await getChildren(token, fileKey, nodeId)
  const ids = data.map(item => item.id).join(',')

  const res = await instanceImages(token, fileKey).get(
    `?ids=${ids}&format=svg&svg_include_id=false`,
  )
  const { images } = res.data

  return {
    status: 200,
    datas: data.map(item => {
      return {
        id: item.id,
        name: item.name,
        url: images[item.id],
      }
    }),
  }
}
