import { useState } from 'react'
import { Button } from './components/ui/button'
import './App.css'
// import Marquee from './components/ui/marquee'
import { MarqueeDemo } from './marqueeDemo'
import { DockDemo } from './dockDemo'
import { ThemeProvider } from './components/ui/theme-provider'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

        <div className='text-4xl'>

          {/* This is the Button Component */}
          This is Button Demo
          <Button>Click me</Button>
          This is Marquee Demo
          <MarqueeDemo />
          This is Dock Demo
          <DockDemo />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
