import React, { FunctionComponent } from 'react'

type ResultProps = {
  res: any
}
type DataType = {
  data: any
}

const CutomConsole: FunctionComponent = function () {
  console.log(
    '%c=============\nGet.\nYour.\nFigma:)\n=============\n',
    'color:white; font-size:25px; background:black',
  )
  return <></>
}
const Intro: FunctionComponent = function () {
  return <CutomConsole />
}
const Success: FunctionComponent<DataType> = function ({ data }) {
  console.log(data)
  return <h1>Success :) Check your console ! </h1>
}
const Fail: FunctionComponent<DataType> = function ({ data }) {
  console.log(data)

  return <h1>Fail :( Check your console ! </h1>
}

const Result: FunctionComponent<ResultProps> = function ({ res }) {
  const { status, data } = res
  if (status === 0) return <Intro data={data} />
  if (status === 200) return <Success data={data} />
  return <Fail data={data} />
}

export default Result
