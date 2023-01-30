import SSRJsonViewer from '_components/atoms/SSRJsonViewer'

import { useGetFigmaFile } from '_hooks/useFetchFigma'
import { FigmaResultType } from '_types/figma'

type FigmaResultsProps = FigmaResultType

function FigmaResults({ token, fileKey }: FigmaResultsProps) {
  const { data, isError } = useGetFigmaFile({
    token,
    fileKey,
  })

  if (isError) return <h1>error:(</h1>
  return <SSRJsonViewer data={data} />
}

export default FigmaResults
