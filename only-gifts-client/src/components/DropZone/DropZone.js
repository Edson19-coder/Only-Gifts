import React from 'react';
import { useDropzone } from "react-dropzone";

import { BiImageAdd } from "react-icons/bi";

const DropZone = ({onDrop,accept}) => {


    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept
      });
    

  return (
    <div className="dropzone-div" {...getRootProps()}>
    <input className="dropzone-input" {...getInputProps()} />
    <div className="text-center">
      {isDragActive ? (
        <p className="dropzone-content">Suelta el archivo aquí</p>
      ) : (
        <div className="dropzone-content">
            <BiImageAdd style={{fontSize:"2.5rem" ,opacity:"0.7"}} /> <br />
          Arrastra la imagen aquí o da click para seleccionar el archivos
          
        </div>
       
      )}
    </div>
  </div>
  )
}

export default DropZone