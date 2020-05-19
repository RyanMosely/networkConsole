import axios from "axios";
//import ipCollection2 from "../config.json";



export default {

getIPs: async function(i) {
  const result= await axios.get("http://localhost:5000/nconfig"
    /*, arr2, { headers: {  
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'}
      }*/
  );
  console.log(result);
  let ipCollection=result.data.interface.wan;
  console.log(ipCollection);
  return new Promise((resolve)=>{
      
      
      for(let k=0;k<ipCollection.length;k++){
                let data=ipCollection[k];
         // if (ipCollection[k].subflow==i)
         if (data.subflow==i)
                resolve({
                name:data.name,
                gatewayIP:data.gatewayIP,
                IP:data.IP,
                proxyIP:data.proxyIP,
                status:data.status
           });
          } 
        }   
    );
  },
    getHaipe: async function(){
        const result= await axios.get("http://localhost:5000/nconfig"
        /*, arr2, { headers: {  
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'}
        }*/
        );
        let haipe = result.data.haipe;
        console.log(haipe)
        return new Promise((resolve)=>{
            resolve({
                status: haipe.status,
                client: haipe.client,
                server: haipe.server
            });
        });
    },
    setHaipe: function(obj){
        console.log(obj);
        axios.post("http://127.0.0.1:5000/haipe", {
            "client" : obj.client,
            "server": obj.server,
            "status": obj.status
        }, { headers: {  
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'}
        }
        ).then( result =>
            console.log("Heyy "+JSON.stringify(result.data))
        );
       //here will be send to back end for saving into json file
        
    },
  setIPs:function(arr){
      console.log(arr);
      let arr2=[];
      for(let k=1;k<arr.length;k++){
        console.log(arr);
        arr[k].subflow=k;
        arr2.push(arr[k]);
      }
      console.log(arr2);
      axios.post("http://127.0.0.1:5000/nconfig", arr2, { headers: {  
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'}
      }
      ).then(result=>console.log("Heyy "+JSON.stringify(result.data)));
     //here will be send to back end for saving into json file
      
  },

  getForwardConfig: async function() {
    const result= await axios.get("http://127.0.0.1:5000/getForwardConfig");
    console.log(result);
    let config=result.data.forward;
   // console.log(config);
    return new Promise((resolve)=>{
        
          resolve({"config":config});
          }   
      );
    },

  setForwardConfig: function(append,ports) {
      let data={
          append:append,
          port:ports,
        
      }
    return(
      axios.post("http://127.0.0.1:5000/setForwardConfig", data, { headers: {  
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'}
      }
      )
     ); 
   }
  
}  


 
