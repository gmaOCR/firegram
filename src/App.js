import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';

function App() {
  const [selectedImg, setSelectedImg] = useState(null)
  const [selectedMsg, setSelectedMsg] = useState(null)
  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid setSelectedImg={setSelectedImg} setSelectedMsg={setSelectedMsg}/>
      {(selectedImg || selectedMsg) && 
      <Modal 
        selectedImg={selectedImg} 
        setSelectedImg={setSelectedImg}
        selectedMsg={selectedMsg}
        setSelectedMsg={setSelectedMsg}
        />}
    </div>
  );
}

export default App;
