"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useChartContext } from "./chart-provider"

export function ChartControls() {
  const { duration, clienttype, setDuration, setClienttype } = useChartContext()

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle>Chart Controls</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="duration" className="text-sm font-medium">
            Duration
          </label>
          <Select value={duration} onValueChange={setDuration}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1month">1 Month</SelectItem>
              <SelectItem value="3months">3 Months</SelectItem>
              <SelectItem value="6months">6 Months</SelectItem>
              <SelectItem value="1year">1 Year</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="clienttype" className="text-sm font-medium">
            Client Type
          </label>
          <Select value={clienttype} onValueChange={setClienttype}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select client type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Clients</SelectItem>
              <SelectItem value="desktop">Desktop Only</SelectItem>
              <SelectItem value="mobile">Mobile Only</SelectItem>
              <SelectItem value="enterprise">Enterprise</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  )
}
