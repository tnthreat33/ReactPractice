import { useState } from "react"

const Statistics = ({good, neutral, bad}) =>{
    let all = good + bad + neutral
    let average = (good + (bad * -1)) / all
    let positive = good / all

    return(
        <div>
        <p> average {isNaN(average) ? 0 : average} </p>
        <p> positive {isNaN(positive) ? 0 : positive} </p>
        <p> all {all}</p>
        </div>
    )
}

const FeedbackButtons = ({ handleGoodClick, handleNeutralClick, handleBadClick }) => {
    return (
      <div>
        <button onClick={handleGoodClick}>good</button>
        
        <button onClick={handleNeutralClick}>neutral</button>

        <button onClick={handleBadClick}>bad</button>
      </div>
    );
  };


const Feedback = ()=>{
    
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    

   function handleGoodClick (){
        setGood(good + 1)
    }

    function handleNeutralClick (){
        setNeutral(neutral + 1)
    }
   
    function handleBadClick (){
        setBad(bad + 1)
    }
  
    return (
      <div>
        <h2>give feedback</h2>
        <FeedbackButtons
        handleGoodClick={handleGoodClick}
        handleNeutralClick={handleNeutralClick}
        handleBadClick={handleBadClick}
      />
      
        <h2> statistics</h2>
        
        {good === 0 && bad === 0 && neutral === 0 ? (
            "No feedback given"
        ) : (
            <div>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <Statistics good={good} bad={bad} neutral={neutral} />
        </div>
        )}


      </div>
    )
}

export default Feedback;