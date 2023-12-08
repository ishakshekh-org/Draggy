import Background from "./sections/Background"
import Foreground from "./sections/Foreground"

const App = () => {
  return (
    <div className="w-full h-screen bg-background text-text font-thin relative">
      <Background />
      <Foreground />
    </div>
  )
}

export default App