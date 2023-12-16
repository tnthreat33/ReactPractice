import Feedback from "./Feedback";


const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  );
};

const Part = (props) => {
  console.log(props.parts.parts.parts[0]);
  return (
    <div>
      <p> {props.parts.parts.parts[0].name}</p>
      <p> {props.parts.parts.parts[1].name}</p>
      <p> {props.parts.parts.parts[2].name}</p>
    </div>

  );
};


const Content = (props) => {
 
  return (
    <Part parts = {props}/>
  );
};

const Total = (props) => {
  console.log(props);
  let totalExercises = 0
  
  props.parts.parts.forEach((part)=>{totalExercises += part.exercises})

  return(
  <p> Number of Exercises {totalExercises} </p>
)}

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
      <Content parts = {course}/>
      <Total parts = {course}/>
      <Feedback/>
    </div>
  );
};

export default App;
