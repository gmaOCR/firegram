import React from "react";
import useFireStore from '../hooks/useFireStore'
import { useState } from "react";
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg, setSelectedMsg }) => {
    const { documents } = useFireStore('images');
    const [isHovered, setIsHovered] = useState(null);

    const handleDeleteClick = (doc) => {
        setSelectedImg(null);
        setSelectedMsg(doc);  
    };

    const preventDownload = (e) => e.preventDefault();

    return (
        <div className="img-grid">
            {documents && documents.map((doc) => (
                <motion.div key={doc.id} className="img-wrap"
                    onMouseEnter={() => setIsHovered(doc.id)}
                    onMouseLeave={() => setIsHovered(null)}
                    layout
                    whileHover={{ opacity: 1 }}
                    onClick={() => setSelectedImg(doc.url)}
                    onContextMenu={preventDownload} >
                    
                    <motion.img src={doc.url} alt="uploaded pic"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        onDragStart={preventDownload}
                    />
                    {isHovered === doc.id && (
                    <motion.button className="delete-button"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: .5 }}   
                        onClick={(e) => { 
                            e.stopPropagation(); 
                            handleDeleteClick(doc);  
                        }}>
                        X
                    </motion.button>
                    )}
                </motion.div>
            ))}
        </div>
    );
};

export default ImageGrid;
