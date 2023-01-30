import axios from 'axios'

const TOKEN = process.env.FIGMA_TOKEN

export default async function handler(request, response) {
  const { method } = request
  const { fileKey } = request.query

  if (!fileKey) return response.status(400)

  if (method === 'GET') {
    try {
      const { data } = await axios.get(
        `https://api.figma.com/v1/files/${fileKey}`,
        {
          headers: {
            'X-FIGMA-TOKEN': TOKEN,
          },
        },
      )

      return response.status(200).json({ data })
    } catch (e) {
      response.status(500).json({ error: 'failed to load data' })
    }
  }
}
