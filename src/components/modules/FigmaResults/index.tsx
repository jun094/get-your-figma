import Textarea from '@components/atoms/Textarea'
import { useGetFigmaFile } from '@hooks/useFetchFigma'

type FigmaResultsProps = {
  isGetData: boolean
}
function FigmaResults({ isGetData = false }: FigmaResultsProps) {
  const { data } = useGetFigmaFile({ enabled: isGetData })

  return <Textarea value={JSON.stringify(data)} />
}

export default FigmaResults
