import { useRef,useEffect } from 'react'
import './index.css';

function Dragger(props) {
    const divRef = useRef();

    const handleDragEnter = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();

    }

    const handleDragOver = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
    }

    const handleDragLeave = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
    }

    const handleDragDrop = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        const transfer = ev.dataTransfer;
        if(transfer && transfer.files) {
            upload(transfer.files);
        }
    }

    const upload = (files) => {
        console.log('files',files);

    }
  
    useEffect(() => {
        divRef.current.addEventListener('dragenter',handleDragEnter);
        divRef.current.addEventListener('dragover',handleDragOver);
        divRef.current.addEventListener('dragleave',handleDragLeave);
        divRef.current.addEventListener('drop',handleDragDrop);
        return () => {
            divRef.current.removeEventListener('dragenter',handleDragEnter);
            divRef.current.removeEventListener('dragover',handleDragOver);
            divRef.current.removeEventListener('dragleave',handleDragLeave);
            divRef.current.removeEventListener('drop',handleDragDrop);
        }
    },[]);
    
    return <div ref={divRef} className="container">{props.children}</div>
}

export default Dragger;