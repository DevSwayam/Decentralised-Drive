import './App.css';
import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
import {useState,useEffect} from "react";
import {ethers} from "ethers";
import FileUpload from "./components/FileUpload.js";
import Display from "./components/Display.js";
import Modal from "./components/Modal.js"

function App() {
  const [account,setAccount] = useState("");
  const [contract,setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modal,setModal] = useState(false);

  useEffect(()=>{
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const loadProvider = async ()=>{
      if(provider){

        await provider.send("eth_requestAccounts",[]);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        setProvider(provider);

        let contracAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
        const contract = new ethers.Contract(contracAddress,Upload.abi,signer);
        setContract(contract);

        console.log(contract);
      }else{
        console.log("MetaMak has not paired");
      }
    }
    provider && loadProvider();
  },[]);
  

  return (
    <div className="App">
     <h1 style={{color:"white"}}>DDrive By DevSwayam</h1>
     <div class ="bg"></div>
     <div class ="bg bg2"></div>
     <div class ="bg bg3"></div> 

     <p style={{color:"white"}}>account : {account ? account:"Please Connect to your wallet account"}</p>
    </div>
  );
}

export default App;
