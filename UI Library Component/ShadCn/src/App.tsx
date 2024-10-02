import { useState } from 'react'

import './App.css'
import { Button } from './components/ui/button'
import { ThemeProvider } from './components/ui/theme-provider'
import { ModeToggle } from './components/ui/mode-toggle'
function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle />
      <h1 className="text-3xl font-bold underline">
        Hello world!
        <Button >Button</Button>
      </h1>
    </ThemeProvider>
  )
}

export default App
