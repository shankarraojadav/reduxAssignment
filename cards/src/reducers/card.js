const initialData = {
    cards: [
        {
            cardName : "Project 01",
            budget: "5000",
            date: "1998-03-20",
            id: 1
        },
        {
            cardName : "Project 02",
            budget: "5000",
            date: "1998-03-20",
            id: 2
        },
        {
            cardName : "Project 03",
            budget: "5000",
            date: "1998-03-20",
            id: 3
        },
        {
            cardName : "Project 04",
            budget: "5000",
           date: "1998-03-20",
            id: 4
        },
    ]
}

const Card = (state=initialData, action) => {
    switch(action.type) {
        case "ADD_CARD" :
            return ({cards : [...state.cards, action.payload]});
        case "EDIT_CARD" :
            let editCardList = state.cards.map(card => card.id == action.id ? action.payload : card);
            return ({ cards: [...editCardList]});
        case "DELETE_CARD" :
             let newCardList = state.cards.filter(card => card.id != action.payload);
             console.log(newCardList)
             return ({ cards: [...newCardList]});
        case "COPY_CARD" :
            return ({ cards: [...state.cards, action.payload]})
            default:
                return state;
    }
};

export default Card;