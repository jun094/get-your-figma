import Textarea from '_components/atoms/Textarea'

import { useGetFigmaFile } from '_hooks/useFetchFigma'
import { FigmaResultType } from '_types/figma'

type FigmaResultsProps = FigmaResultType

function FigmaResults({ token, fileKey }: FigmaResultsProps) {
  const { data, isError } = useGetFigmaFile({
    token,
    fileKey,
  })

  if (isError) return <h1>error:(</h1>
  return <Textarea value={JSON.stringify(data)} />
}

export default FigmaResults
