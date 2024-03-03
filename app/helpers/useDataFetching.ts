// Dependencies
import { useState, useEffect } from 'react'

// Models
import { IFetchDataResult } from '../globals/models/globals'

/**
 * @description get information from a certain endpoint then return data, loading, or error
 * @param url string
 * @returns Object<data, loading, error>
 */
const useDataFetching = (url: string): IFetchDataResult => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        const result = await response.json()
        setData(result)
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, loading, error }
}

export default useDataFetching
