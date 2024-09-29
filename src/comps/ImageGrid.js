import React from "react";
import useFireStore from "../hooks/useFireStore";
import { motion } from 'framer-motion';


const ImageGrid = ({setSelectedImg}) => {
    const {documents} = useFireStore('images')
    return(
    <div className="img-grid">
        {documents && documents.map((doc, index) => (
            <motion.div key={doc.id} className="img-wrap"
            layout
            whileHover={{opacity: 1}}
            onClick={() => setSelectedImg(doc.url)}>
                
            <motion.img src={doc.url} alt="uploaded pic" 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1}}
            />
            </motion.div>
        ))}
    </div>
    )
}

export default ImageGrid
