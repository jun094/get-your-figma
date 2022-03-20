import React, { FunctionComponent } from 'react'

type ResultProps = {}

const Intro: FunctionComponent = function ({ data }) {
  console.log('========')
  console.log('HI :) THIS IS GET FIGMA')
  console.log('========')
  return <></>
}
const Success: FunctionComponent = function ({ data }) {
  console.log('!!!!success!!!!')
  console.log(data)
  return <h1>Success :) Check your console ! </h1>
}
const Fail: FunctionComponent = function ({ data }) {
  console.log('ㅜㅜㅜㅜㅜfailㅜㅜㅜㅜ')
  console.log(data)

  return <h1>Fail :( Check your console ! </h1>
}

const Result: FunctionComponent<ResultProps> = function ({ res }) {
  const { status, data } = res

  console.log(res)

  if (status === 0) return <Intro data={data} />
  if (status === 200) return <Success data={data} />
  return <Fail data={data} />
}

export default Result
