import { useState } from 'react'

const Statics = ({ good, neutral, bad }) => {
  const total = (good || neutral || bad) ? good + neutral + bad : 0
  const percentPostive = total ? (good / total) * 100 : 0
  const average = total ? (good - bad) / total : 0;

  return (
    <>
      <Title title={"Statistics"} />
      {
        total > 0 ? (
          <>
            <StatisticLine text={"good"} value={good} />
            <StatisticLine text={"neutral"} value={neutral} />
            <StatisticLine text={"bad"} value={bad} />
            <StatisticLine text={"All : "} value={total} />
            <StatisticLine text={"avergage : "} value={average.toFixed(1)} />
            <StatisticLine text={"positive"} value={`${percentPostive.toFixed(1)} %`} />
          </>
        ) : (
          <p>No feedback given</p>
        )
      }

    </>
  )

}

const Title = ({ title }) => {
  return (
    <h3>{title}</h3>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    // <p>{text} : {value}</p>
    <table style={{ width: '10%', tableLayout: 'fixed' }}>
      <tbody>
        <tr>
          <td >
            {text}
          </td>
          <td >
            {value}
          </td>
        </tr>
      </tbody>
    </table>


  )
}



const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Title title={"Give feedback"} />
      <Button text={"good"} onClick={() => setGood(good + 1)} />
      <Button text={"neutral"} onClick={() => setNeutral(neutral + 1)} />
      <Button text={"bad"} onClick={() => setBad(bad + 1)} />

      <Statics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App