import './App.css';
import { useState } from 'react';
import SingleCard from './Components/SingleCard';
import { useEffect } from 'react';


 const cardImages=[
  
  {"src":"/img/helmet-1.png",matched:false},
  {"src":"/img/potion-1.png",matched:false},
  {"src":"/img/ring-1.png",matched:false},
  {"src":"/img/scroll-1.png",matched:false},
  {"src":"/img/shield-1.png",matched:false},
  {"src":"/img/sword-1.png",matched:false}
 ]
function App() {
  const [cards,setCards]= useState([])
  const[turns,setTurns]=useState(0)
  const[choiceOne, setChoiceOne]=useState(null)
  const[choiceTwo, setChoiceTwo]=useState(null)
  const[disabled,setDisabled]=useState(null)

  //shuffle cards 
  const shuffleCards=()=>{
    // we have a shuffled state of cards where indices are random 
    const shuffledCards=[...cardImages, ...cardImages]
    .sort(()=> Math.random()-0.5)
    .map((card)=> ({...card,id:Math.random()}))

    setCards(shuffledCards)
    setTurns(0)

  }
  console.log(cards,turns)
  //handle a choice 

  const handleChoice = (card)=>{
    // if there is no value then it's choice 1 else its' choice 2 
    choiceOne ? setChoiceTwo(card):setChoiceOne(card)
    // we don't do it here as it is not updated yet
  }

  // compare 2 selecetd card

  useEffect(()=>{

    // initially set disabled = true we can clicked the card 
    // check if we have value for choice 1 and chchoice 2
    if(choiceOne && choiceTwo)
    {
      setDisabled(true)
      if(choiceOne.src === choiceTwo.src)
      {
        setCards(prevCards=>{
          return prevCards.map(card=>{
            if(card.src === choiceOne.src){
              return {...card, matched :true}
            }
            else {
              return card
            }
          })
        })
        resetTurn()
      }
      else {

        setTimeout(()=>resetTurn(),1000)
      }

    }

  },[choiceOne,choiceTwo])

  console.log(cards)

  //reset choice and increase turn 


  const resetTurn=()=>{
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns=>prevTurns+1)
    setDisabled(false)
  }

  return (
    <div className="App">
      <h1> Magic Match </h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className='card-grid'>
        {cards.map(card=>(
          <SingleCard key={card.id} 
          card={card}
          handleChoice={handleChoice}
          flipped={card === choiceOne || card === choiceTwo || card.matched}
          disabled={disabled}
          />
        ))}

      </div>
   </div>
  );
}

export default App;
