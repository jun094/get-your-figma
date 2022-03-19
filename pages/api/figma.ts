import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { figmaToken, figmaFileKey, figmaNodeId } = req.body

  console.log(figmaToken, figmaFileKey, figmaNodeId)

  const headers = {
    'X-FIGMA-TOKEN': figmaToken,
  }
  const instanceFiles = () =>
    axios.create({
      baseURL: `https://api.figma.com/v1/files/${figmaFileKey}`,
      headers,
    })
  // const getComponents = async () => {
  // 	const res = await instanceFiles().get(
  // 		`/nodes?ids=${decodeURIComponent('0%3A1')}`,
  // 	);
  // 	return res;
  // };
  // const getTextData = async () => {
  // 	const componets = await getComponents();

  // 	return componets.map((comp) => {
  // 		return {
  // 			id: comp.id,
  // 			name: comp.name,
  // 			ko:
  // 				comp.children[0].type === 'TEXT'
  // 					? comp.children[0].name
  // 					: '유효하지 않은 타입',
  // 		};
  // 	});
  // };

  try {
    const response = await instanceFiles().get(
      `/nodes?ids=${decodeURIComponent('0%3A1')}`,
    )
    console.log(response)
    res.status(201).json({
      data: JSON.stringify(response),
    })
  } catch (e) {
    console.log(e)
    return res.status(e.code).send({
      message: e.message,
    })
  }
}
