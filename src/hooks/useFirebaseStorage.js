import { useState, useEffect } from "react";
import { dbRef, push, projectStorage, projectFirestore, uploadBytesResumable, getDownloadURL, 
    storRef, timestamp, get, remove } from "../firebase/config";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storageRef = storRef(projectStorage, file.name);
        const databaseRef = dbRef(projectFirestore, 'images');
        const uploadTask = uploadBytesResumable(storageRef, file);
        
        uploadTask.on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
            console.error("Upload Error:", err);
        }, async () => {
            try {
                const url = await getDownloadURL(storageRef);
                const createdAt = timestamp;

                console.log("Image URL:", url);
                console.log("Created At Timestamp:", createdAt);

                // Récupérer toutes les images existantes
                const snapshot = await get(databaseRef);
                let images = [];
                snapshot.forEach(doc => {
                    images.push({ id: doc.key, ...doc.val() });
                });

                console.log("Existing Images:", images);

                if (images.length >= 6) {
                    images.sort((a, b) => a.createdAt - b.createdAt);
                    const oldestImage = images[0];
                    console.log("Oldest Image to Remove:", oldestImage);
                    await remove(dbRef(projectFirestore, `images/${oldestImage.id}`));
                }

                await push(databaseRef, { url, createdAt });
                
                setUrl(url);
            } catch (err) {
                setError(err);
                console.error("Error during upload process:", err);
            }
        });
    }, [file]);

    return { progress, url, error };
}

export default useStorage;
