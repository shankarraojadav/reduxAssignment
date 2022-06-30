

export const AddCard = (newCard) => {
    return {
        type: "ADD_CARD",
        payload: newCard
    }
};

export const CardEdit = (editedCard, id) => {
    return {
        type: "EDIT_CARD",
        payload: editedCard,
        id: id
    }
};

export const DeleteCard = (id) => {
    return {
        type: "DELETE_CARD",
        payload: id
    }
};

export const CopyCard = (copycard) => {
    return {
        type: "COPY_CARD",
        payload: copycard
    }
}