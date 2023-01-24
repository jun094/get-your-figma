import { useQuery } from '@tanstack/react-query'

import { QUERY_KEY } from '@constants/index'
import { getFigmaFile } from './api'

//*** GET figma file
const useGetFigmaFile = (options: any) => {
  const { enabled = false } = options || {}

  return useQuery({
    queryKey: [QUERY_KEY.FIGMA_file],
    queryFn: getFigmaFile,
    enabled,
  })
}

export { useGetFigmaFile }
