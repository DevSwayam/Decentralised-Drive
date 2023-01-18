import { useState } from "react";
import "./Display.css";

const Display = ({account, contract}) => {
    const [data,setData] = useState("");

    const getData= async()=>{
        let dataArray;
        const otherAddress = document.querySelector(".address").value;
        if(otherAddress){
            dataArray=await contract.display(otherAddress);
            console.log(dataArray);
        }else{
            dataArray = await contract.display(account);
        }
        const isEmpty = Object.keys(dataArray).length===0;

        if(!isEmpty){
           const str = dataArray.toString();
           const str_array = str.split(","); 
           console.log(str_array);
        }
    }
    return<>
        <div className="image-list">Image Display </div>
        <input type= "text" placeholder="Enter Address" className="address"></input>
        <button className="center button" onClick={getData}>Get Data</button>
   </>;
}
export default Display;