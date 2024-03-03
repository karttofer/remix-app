// Dependencies
import { useState } from 'react'
// Models
import { DetailData, UseDetailDataProps } from '../globals/models/globals'

/**
 * @description Will take information from Array<string> urls or a single
 * url
 */
const useDetailData = () => {
  const [detailData, setDetailData] = useState<DetailData>({})

  /**
   * @description Will fetch information from a single url or a list of urls
   * @param url String[]
   * @param keyName string
   * @returns Promise
   */
  const getDetailData = async ({
    urls,
    keyName,
  }: UseDetailDataProps): Promise<void> => {
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
