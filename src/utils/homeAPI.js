import axios from "axios";
//import ipCollection2 from "../config.json";



export default {

  getAllWAN: async function() {
    
    const result= await axios.get("http://localhost:5000/nconfig")
    console.log(result)

    let wans=result.data.interface.wan;
    let delay = result.data.interface.dataRefreshDelay;
    return new Promise((resolve)=>{
        resolve({
            regdata:wans,
            cDelay:delay
        });
    })

    //const result= await axios.get("http://localhost:5000/nconfig")
    //const res= await axios.get("http://localhost:5000/latthr");
    
    
    },
    getConnectionData: async function(){
        const result= await axios.get("http://localhost:5000/cData");
        let cData = result;
        console.log(cData)
        return new Promise((resolve)=>{
            resolve({
                connectionData:cData
            });
        });
    }
}  


 
