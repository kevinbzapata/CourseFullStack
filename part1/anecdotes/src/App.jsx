import { useState } from 'react'


const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Title = ({ title }) => {
  return (
    <h3>{title}</h3>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]


  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  
  const change = () => setSelected(Math.floor(Math.random() * (anecdotes.length)))
  
  const sumVotes = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const maxValue = Math.max(...votes)
  
  console.log("Selected", selected);
  console.log("Max Votoss:", Math.max(...votes));
  console.log("Votos::" , votes);

  return (
    <div>
      <Title title={"Anecdote of the day"} />
      {anecdotes[selected]}
      <br />
      <Button text={"vote"} onClick={sumVotes} />
      <Button text={"next anecdote"} onClick={change} />
      <p>has {votes[selected]} votes</p>


      {
        Math.max(...votes) > 0 ? (
          <div>
            <Title title={"Anecdote with most votes"} />
            <p>{anecdotes[votes.indexOf(maxValue)]}</p>
            <p>has {votes[votes.indexOf(maxValue)]} votes</p>
          </div>
        ) : null
      }
    </div>
  )
}

export default App