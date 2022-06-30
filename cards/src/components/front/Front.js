import { Button } from '@mui/material';
import CreateCard from '../createCard/CreateCard';
import CreateDialog from '../createCard/CreateDialog';
import './front.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import EditCard from '../editcard/EditCard';
import { CopyCard, DeleteCard } from '../../actions';


const Front = () => {

  const [open, setOpen] = useState(false);
  const [editId, setEditId] = useState();

    
  const cardList = useSelector((state) => state.Card.cards)
  const dispatch = useDispatch();

 // total budget

 const list = []
 const card_list = cardList.map((i) => list.push(i.budget));

 const dList = list.map(str => {
   return Number(str)
 })
 console.log(dList)
 const sum = dList.reduce((total, amount) => total + amount);
 


  

  const openDialog = () => {
    setOpen(true);
};

// edit card
  const handleEdit = (id) => {
   if(id) {
      setEditId(id)
      setOpen(true)
   }
  };

  const handleDelete = (id) => {
    dispatch(DeleteCard(id))
  };

  const copyCard =(id) => {
    let [card]= cardList.filter(card=> card.id == id);
    const cardName = card.cardName;
    const budget = card.budget;
    const date= card.date;
    console.log(date)
    
    let copy = {
       cardName,
       budget,
       date, 
       id: Math.floor((Math.random()*100) +1).toString()
    }
    dispatch(CopyCard(copy));
    
    
  }

    return (
      <div className="front">
           <h1 style={{fontFamily: "cursive", color:"green"}}>Project Data</h1>
           <div className="menu_bar">
                 <h4>Total Projects : {cardList.length}</h4>
                 <h4>Total Budget: {sum}</h4>
                 <Button variant='contained' className='btn' onClick={openDialog}>Create New Card</Button>
           </div>
           <div className='cards_show'>
                  {
                    cardList.map((i, ind) => {
                      return <div  className="display_cards"  key={ind}>
                       <div className='card_data'>
                       <p>Card Name: {i.cardName}</p>
                        <p>Project Budget: {i.budget}</p>
                        <p>Project End Date: {i.date}</p>
                        
                       </div>
                        <div>
                          <Button onClick={() => handleEdit(i.id)}>Edit Card</Button>
                          <Button onClick={() => handleDelete(i.id)}>Delete Card</Button>
                          <Button onClick={() => copyCard(i.id)}>Copy Card</Button>
                        </div>
                      </div>
                    })
                  }
           </div>
           <CreateDialog open={open} setOpen={setOpen} editId={editId} setEditId={setEditId}/>
      </div>
    )
  };
  
  
  export default Front;