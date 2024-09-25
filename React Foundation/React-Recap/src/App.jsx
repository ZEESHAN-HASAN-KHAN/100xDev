import { useState } from 'react'


function App() {
  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setBankData({ income: 100 });
    }, 1000)
    setTimeout(() => {
      setExchangeData({ returns: 100 })
    }, 1000)
  }, []);

  return (
    <>
      <div>
        Hi there, your income tax returns are {incomeTax}
      </div>
    </>
  )
}

export default App
