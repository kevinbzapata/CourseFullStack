import { useState } from "react";
const App = () => {
  const [value, setValue] = useState(10)

  const handleClick = () => {
    console.log('clicked the button')
    setValue(0)
  }

  const hello = () => {
    const handler = () => console.log('hello world')
    return handler
  }

  return (
    <div>
      {value}
      <button onClick={handleClick}>button</button>
      {/* <button onClick={hello()}>button</button> */}

      
    </div>
  )
}

export default App;