const validFigmaFileKey = (url: string): boolean =>
  url.split('/').indexOf('file') >= 0

const extractFigmaFileKey = (url: string): string => {
  const urlSplit = url.split('/')
  const fileIndex = urlSplit.indexOf('file')

  if (fileIndex === -1) return ''
  return urlSplit[fileIndex + 1]
}

export { validFigmaFileKey, extractFigmaFileKey }
