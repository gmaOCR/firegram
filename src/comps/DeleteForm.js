import React, { useEffect, useState } from "react";
import useFireBaseDelete from "../hooks/UseFireBaseDelete";
import { motion } from 'framer-motion';

const DeleteForm = ({ selectedFile,  setSelectedMsg }) => {
    const { deleteImage, error, success } = useFireBaseDelete(selectedFile.id);
    const [message, setMessage] = useState('');

    const handleDelete = (e) => {
        e.preventDefault();
        setMessage(`Deleting item with ID ${selectedFile.id}...`);
        deleteImage();
    };

    useEffect(() => {
        if (success) {
            setMessage(`Successfully deleted item with ID ${selectedFile.id}`);
            setTimeout(() => {
                setSelectedMsg(null);
            }, 1000);
        }
        if (error) {
            setMessage(`Failed to delete item with ID ${selectedFile.id}: ${error}`);
        }
    }, [success, error, selectedFile.id]);

    return (
        <motion.div 
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <p>Are you sure you want to delete the item with ID {selectedFile.id}?</p>
            <motion.button 
                className="validate-button" 
                onClick={handleDelete}
                style={{ marginTop: '10px' }} 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }} 
            >
                ✔
            </motion.button>
            {message && <p>{message}</p>}
        </motion.div>
    );
};

export default DeleteForm;
