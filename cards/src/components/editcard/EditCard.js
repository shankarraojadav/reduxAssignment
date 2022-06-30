import { Button } from "@mui/material";
import { useState } from "react";
import './editCard.css';
import { useSelector, useDispatch } from "react-redux";
import { AddCard, CardEdit } from "../../actions/index";


const EditCard = ({editId, setEditId}) => {


    const cardList = useSelector((state) => state.Card.cards)
//   console.log("this is", cardList)
    let [card]= cardList.filter(card=> card.id == editId);

  const [cardName, setCardName] = useState(card.cardName);
  const [budget, setBudget] = useState(card.budget);
  const [date, setDate] = useState(card.date);

  

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


  const handleEdit = () => {
    
    let editCard = {
      cardName,
      budget,
      date,
      id: card.id
    };
    
    dispatch(CardEdit(editCard, editId));
  };

    return (
      <div className="create_card">
        <h1>Edit Card</h1>
         <input type="text" placeholder='Card Name' name='card name' value={cardName} onChange={handleNameChange} />
         <input type="text" placeholder='Project Budget' name='budget' value={budget} onChange={handleBudgetChange} />
         <input type="date" placeholder='Project End Date' name='date' value={date} onChange={handleDateChange} />
        <Button onClick={() => handleEdit()} variant='contained' style={{width:"200px", alignSelf:"center"}}>Create</Button>
      </div>
    )
  };
  
  
  export default EditCard;