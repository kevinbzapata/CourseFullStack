const Course = ({ course }) => {
    console.log("Course props:::", course);

    return (
        <div>
            <h1>Web developmet curriculum</h1>
            <Header title={course} />
        </div>
    );
};

const Header = (props) => {
    console.log("Header::", props);

    return (
        <div>
            {props.title.map((tit) => (
                <div key={tit.id}>
                    <h3>{tit.name}</h3>
                    <Content course={tit.parts} />
                    <Total course={tit.parts} />
                </div>
            ))}
        </div>
    )
};

const Content = (props) => {
    console.log("PropsContent:::", props.course);

    return (
        <div>
            {props.course?.map((parte) => {
                console.log("Partee", parte)
                return (<Part key={parte.id} name={parte.name} exercises={parte.exercises} />)
            })}
        </div>
    );
};

const Part = ({ name, exercises }) => {
    return (
        <p>
            {name} - {exercises}
        </p>
    );
};


const Total = (props) => {
    console.log("Total", props.course);

    const total = props.course.reduce((sum, part) => {
        return sum + part.exercises
    }, 0);

    return <h4>Total of {total} exercises</h4>;
};


export default Course;