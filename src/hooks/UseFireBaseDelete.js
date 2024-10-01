import { useState } from "react";
import { dbRef, remove, projectFirestore } from "../firebase/config";

const useFireBaseDelete = (imageId) => {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const deleteImage = async () => {
        try {
            await remove(dbRef(projectFirestore, `images/${imageId}`));
            setSuccess(`Image with ID ${imageId} deleted successfully.`);
        } catch (err) {
            setError(err);
            console.error("Error deleting image:", err);
        }
    };

    return { deleteImage, error, success };
}

export default useFireBaseDelete;
