import { Button, Dialog } from "@mui/material";
import { useState } from "react";
import EditCard from "../editcard/EditCard";
import CreateCard from "./CreateCard";
import './createDialog.css';

const CreateDialog = ({open, setOpen, editId, setEditId}) => {

    

    const handleClose = () => {
        setOpen(false);
    }
    return (
        
            <Dialog open={open}  onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset'}}}>
                <div className="dialog">
                {editId ? <EditCard editId={editId} setEditId={setEditId}/> : <CreateCard />}
                </div>
                
                
            </Dialog>
    
    )
}


export default CreateDialog;