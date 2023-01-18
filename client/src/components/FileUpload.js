/*This File consist of file uploading functionality as its name suggests 
i will be using pinata for pinning my IPFS files and to interact with pinata
we need axios {Axios is a library that serves to create HTTP requests that are present externally.}*/

import { useState } from "react";
import axios from "axios";
import "./FileUpload.css";

const FileUpload = ({ account, provider, contract }) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("Please Select a Image");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `
            d3a08a8ef7d4cb95a14b`,
            pinata_secret_api_key: `bc4c2bfada7031bc770b1a72ac5dccdf0390dced9edb2129ee13eb27bddb0a50`,
            "Content-Type": "multipart/form-data",
          },
        });
        const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
        // const signer = contract.connect(provider.getSigner());
        contract.add(account, ImgHash); //contract function
        alert("Hogaya Bhai");
        setFileName("Please Select Image");
        setFile(null);
      } catch (error) {
        console.log(error);
        alert("Unable To Upload iamge. Please Contact @DevSwayam on github");
      }
    }
  };
  const retrieveFile = (e) => {
    const data = e.target.files[0]; // as user can upload multiple images at a time i always want image feom 0th index
    //console.log(data);
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(e.target.files[0]);
    };
    setFileName(e.target.files[0].name);
    e.preventDefault();
  };

  return (
    <>
      <div className="top">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="file-upload" className="choose">
            Choose Image
          </label>
          <input
            disabled={!account}
            type="file"
            id="file-upload"
            name="data"
            onChange={retrieveFile}
          ></input>
          <span className="textArea">Image: {fileName}</span>
          <button type="submit" className="upload" disabled={!file}>
            Upload File
          </button>
        </form>
      </div>
    </>
  );
};
export default FileUpload;
