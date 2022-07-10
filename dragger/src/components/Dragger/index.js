import { useRef,useEffect,useState } from 'react'
import './index.css';

function Dragger(props) {
    const [uploadFiles,setUploadFiles] = useState([])
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
        for(let i=0;i < files.length;i++) {
            const file = files[i];
            let formData = new FormData();
            formData.append('filename',file.name);
            formData.append(props.name,file);
            const xhr = new XMLHttpRequest();
            xhr.open('POST',props.action,true);
            xhr.responseType = 'application/json';
            let uploadFile = {
                file,
                url:undefined,
                percent:0,
                status:'upload'
            }
            uploadFiles.push(uploadFile);
            xhr.onprogress = handleProgress();
            xhr.upload.onprogress = handleProgress();

            xhr.onreadystatechange = () => {
                if(xhr.readyState === 4 && xhr.status === 200) {
                    uploadFile.url = xhr.response.url;
                    props.onChange(uploadFile);
                }
            }
            xhr.send(formData);
        }
        console.log('files',files);

    }

    const handleProgress = (ev) => {
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
    },[divRef]);

    return <div ref={divRef} className="container">{props.children}</div>
}

export default Dragger;