import { useState } from "react"
import HeatMap from "./assets/components/HeatMap"

function App() {
  // const [taskNames, setTaskNames] = useState<string[]>([])

  return (
    <div className="md:ml-12">
      <div className="w-full flex justify-center mb-4 border-b-4 border-neutral-400 pb-2 rounded-b-full">
        <a href="/">
          <h1 className="text-3xl ">teguh.me</h1>
        </a>
      </div>
      <HeatMap />
    </div>
  )
}

export default App
