
const Header = (props) => {

  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  )

}

const Part = (props) => {
  return (
    <>
      <p>{props.name} {props.number}</p>
    </>
  )
}

const Content = (props) => {
  console.log("Content::", props.course.parts);
  const cursos = props.course.parts
  return (
    <>
      {
        cursos.map((item, index) => {
          return (
            <p key={index}> Curso : {item.name} Ejercicios : {item.exercises} </p>
          )
        })
      }
    </>
  )
}


const Total = (props) => {
  console.log("Content::", props.course.parts);
  const cursos = props.course.parts;
  const totalHoras = cursos.reduce((sum , course) => sum + course.exercises , 0 )
  return (
    <>
      <div>Total horas : {totalHoras} </div>
    </>
  )
}



const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course}/> 
    </div>
  )
}

export default App