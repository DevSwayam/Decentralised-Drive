/*This File consist of file uploading functionality as its name suggests 
i will be using pinata for pinning my IPFS files and to interact with pinata
we need axios {Axios is a library that serves to create HTTP requests that are present externally.}*/ 

import { useState } from "react";
import axios from "axios";
import "./FileUpload.css"

const FileUpload =({ account ,provider ,contract })=>{
const [file,setFile] = useState(null);
const[fileName,setFileName] = useState("Please Select a Image");
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(file){
            try {
                const formData = new formData();
                formData("file",file);

                const resFile = await axios({
                    method: "post",
                    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                    data: formData,
                    headers: {
                      pinata_api_key: `
                      a5fb5fa350f957194e09`,
                      pinata_secret_api_key: `733db2a89509ce56552d26d685a62824ebe526377e168ed9dfc143499bd43b2e`,
                      "Content-Type": "multipart/form-data",
                    },
                  });
            } catch (error) {
                alert("Unable To Upload iamge. Please Contact @DevSwayam on github");
            }
        }
    };
    const retrieveFile = ()=>{

    };

    return<>
    <div className="top">
    <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="file-upload" className="choose">Choose Image</label>
        <input disabled={!account} type="file" id='file-upload' name="data" onChange={retrieveFile}></input>
    <span className="textArea">Image: {fileName}</span>
    <button type="submit" className="upload">Upload File</button>
    </form>
    </div>

    </>;
}
export default FileUpload;