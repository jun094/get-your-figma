import { useQuery } from '@tanstack/react-query'

import { QUERY_KEY } from '_constants/index'
import { FigmaResultType } from '_types/figma'

import { getFigmaFile } from './api'

//*** GET figma file
const useGetFigmaFile = ({ token, fileKey }: FigmaResultType) => {
  return useQuery({
    queryKey: [QUERY_KEY.FIGMA_file, token, fileKey],
    queryFn: () => getFigmaFile({ token, fileKey }),
  })
}

export { useGetFigmaFile }
