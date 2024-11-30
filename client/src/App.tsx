import HeatMapSection from "./assets/components/HeatMapSection"

function App() {

  return (
    <div className="">
      <div className="w-full flex justify-center mb-4 border-b-1 bg-neutral-800 border-neutral-400 py-2">
        <a href="/">
          <h1 className="text-3xl ">teguh.me</h1>
        </a>
      </div>
      <div className="md:ml-12">
        <HeatMapSection />
      </div>
    </div>
  )
}

export default App
