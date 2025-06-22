import { ChartArea } from "@/components/chart-area"
import { ChartBar } from "@/components/chart-bar"
import { ChartLine } from "@/components/chart-line"
import { ChartPie } from "@/components/chart-pie"
import { ChartProvider } from "@/components/chart-provider"
import { ChartControls } from "@/components/chart-controls"

export default function Page() {
  return (
    <ChartProvider>
      <div className="flex min-h-svh items-start justify-center p-6">
        <div className="w-full max-w-6xl">
          <ChartControls />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ChartLine />
            <ChartBar />
            <ChartArea />
            <ChartPie />
          </div>
        </div>
      </div>
    </ChartProvider>
  )
}
