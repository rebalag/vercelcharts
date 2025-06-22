"use client"

import { useState, useEffect } from "react"

interface ChartDataParams {
  duration: string
  clienttype: string
}

interface ChartDataPoint {
  month: string
  desktop: number
  mobile: number
}

interface PieChartDataPoint {
  browser: string
  visitors: number
  fill: string
}

export function useChartData(params: ChartDataParams) {
  const [data, setData] = useState<ChartDataPoint[]>([])
  const [pieData, setPieData] = useState<PieChartDataPoint[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)

        const url = new URL("/v1/fetchdata", window.location.origin)
        url.searchParams.append("duration", params.duration)
        url.searchParams.append("clienttype", params.clienttype)

        const response = await fetch(url.toString())

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const jsonData = await response.json()

        // Transform the API data to match our chart format
        if (jsonData.chartData) {
          setData(jsonData.chartData)
        }

        if (jsonData.pieData) {
          // Add fill colors for pie chart
          const pieDataWithColors = jsonData.pieData.map((item: any, index: number) => ({
            ...item,
            fill: `var(--color-chart-${index + 1})`,
          }))
          setPieData(pieDataWithColors)
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [params.duration, params.clienttype])

  return { data, pieData, loading, error }
}
