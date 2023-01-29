import React, { Suspense } from 'react'
import SSRJsonViewerLoading from './loading'

const ReactJson = React.lazy(() => import('react-json-view'))

type SSRJsonViewerProps = {
  data: object
}

function SSRJsonViewer({ data }: SSRJsonViewerProps) {
  return (
    <Suspense fallback={<SSRJsonViewerLoading />}>
      <div className="p-4 rounded-lg bg-secondary-content max-h-[32rem] overflow-auto">
        <ReactJson
          src={data}
          theme="monokai"
          displayDataTypes={false}
          style={{
            backgroundColor: 'hsl(var(--sc))',
          }}
        />
      </div>
    </Suspense>
  )
}

export default SSRJsonViewer
