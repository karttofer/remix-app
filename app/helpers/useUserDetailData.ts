// Dependencies
import { useState } from 'react'

interface DetailData {
  [key: string]: any[]
}

interface UseDetailDataProps {
  urls: string[]
  keyName: string
}

const useDetailData = () => {
  const [detailData, setDetailData] = useState<DetailData>({})

  const getDetailData = async ({ urls, keyName }: UseDetailDataProps) => {
    try {
      const dataPromises = urls.map(async (url) => {
        const response = await fetch(url)

        if (!response.ok) {
          throw new Error(`Failed to fetch data. Status: ${response.status}`)
        }

        return await response.json()
      })

      const detailsData = await Promise.all(dataPromises)

      setDetailData((prevData) => ({
        ...prevData,
        [keyName]: detailsData,
      }))

      return detailsData
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`Error fetching data: ${error.message}`)
      }
      throw error
    }
  }

  return { detailData, getDetailData }
}

export default useDetailData
