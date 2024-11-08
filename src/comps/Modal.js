import React  from "react";
import {motion} from "framer-motion"
import DeleteForm from "./DeleteForm";

const Modal =  ({selectedImg, setSelectedImg, selectedMsg, setSelectedMsg}) => {
    const handeClick = (e) => {
        if (e.target.classList.contains('backdrop')) 
        setSelectedImg(null)
        setSelectedMsg(null)
    }

    const preventDownload = (e) => e.preventDefault();

    return (
<motion.div className="backdrop" onClick={handeClick}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    onContextMenu={preventDownload} 
>
    {selectedImg && (
        <motion.img src={selectedImg} alt="enlarged pic"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            onDragStart={preventDownload}
        />
    )}

    {selectedMsg && (
        <motion.div className="modal-message"
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }} 
            transition={{ duration: .25 }} 
            onClick={(e) => { 
                e.stopPropagation();  
            }}>                   
            <DeleteForm selectedFile={selectedMsg} setSelectedMsg={setSelectedMsg} />
        </motion.div>
    )}
</motion.div>

    )
}
export default Modal;