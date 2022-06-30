import { Button } from "@mui/material";
import { useState } from "react";
import './createCard.css';
import { useSelector, useDispatch } from "react-redux";
import { AddCard } from "../../actions/index";


const CreateCard = () => {

  const [cardName, setCardName] = useState("");
  const [budget, setBudget] = useState("");
  const [date, setDate] = useState("");

  const cardList = useSelector((state) => state.Card.cards)
  

  console.log("this is cardlist ", cardList)
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    
    setCardName(e.target.value)
  };

  const handleBudgetChange = (e) => {
    
    setBudget(e.target.value)
  };

  const handleDateChange = (e) => {
    
    setDate(e.target.value)
  }


  const handleCreate = () => {
    
    let newCard = {
      cardName,
      budget,
      date,
      id: Math.floor((Math.random()*100) +1).toString()
    };
    console.log(newCard)
    dispatch(AddCard(newCard));
  };

    return (
      <div className="create_card">
        <h1>Create Card</h1>
         <input type="text" placeholder='Card Name' name='card name' value={cardName} onChange={handleNameChange} />
         <input type="text" placeholder='Project Budget' name='budget' value={budget} onChange={handleBudgetChange} />
         <input type="date" placeholder='Project End Date' name='date' value={date} onChange={handleDateChange} />
        <Button onClick={() => handleCreate()} variant='contained' style={{width:"200px", alignSelf:"center"}}>Create</Button>
      </div>
    )
  };
  
  
  export default CreateCard;