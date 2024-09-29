import { useEffect, useState } from "react";
import { projectFirestore, dbRef } from "../firebase/config";
import { orderByChild, query, onValue } from 'firebase/database';

const useFireStore = (collection) => {
    const [documents, setDocuments] = useState([]);
    
    useEffect(() => {
     const collectionRef =  dbRef(projectFirestore, collection)
     const q = query(collectionRef, orderByChild('createdAt')); 
     const unsub = onValue(q, (snap) => {
            let documents = [];
            snap.forEach(doc =>{
                documents.push({id: doc.key, ...doc.val()});
            });

            setDocuments(documents.reverse())
        })
        return () => unsub();
}, [collection])
    return { documents };
}

export default useFireStore