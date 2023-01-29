const extractFileKey = (url: string) => {
  const urlSplit = url.split('/')
  const fileIndex = urlSplit.indexOf('file')

  return urlSplit[fileIndex + 1]
}

export { extractFileKey }
