import axios from "axios";
//import ipCollection2 from "../config.json";



export default {

  test: async function () {
    try {
      const result = await axios.get('http://127.0.0.1:5000/test')
      //console.log(result)
      return result
    }
    catch (error) { console.log(error) }
    /*
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
    console.log('axios test');
  });*/
  },
  osirisTest: async function () {
    try {
      const result = await axios.get('http://127.0.0.1:5000/osirisTest')
      //console.log(result)
      return result
    }
    catch (error) { console.log(error) }
    /*
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
    console.log('axios test');
  });*/
  },
  dataTest: async function () {
    try {
      const result = await axios.get('http://127.0.0.1:5000/dataTest')
      //console.log(result)
      return result
    }
    catch (error) { console.log(error) }

  },
  usernameChange: async function (a) {


    try {
      const result = await axios.post('http://127.0.0.1:5000/userChange', {
        firstName: a
      })
      //console.log(result)
      return result
    }
    catch (error) { console.log(error) }
    ////////////////

  },

  passwordChange: async function (b) {


    try {
      const result = await axios.post('http://127.0.0.1:5000/testTwoo', {
        lastName: b
      })
      //console.log(result)
      return result
    }
    catch (error) { console.log(error) }
    ////////////////

  },
  login: async function (credentials) {
    try {
      const result = await axios.post('http://127.0.0.1:5000/login', {
        username:credentials.username,
        password:credentials.password
      })
      
      return result
    }
    catch (error) { console.log(error) }
    ////////////////

  },
  osirisChange: async function (o) {


    try {
      const result = await axios.post('http://127.0.0.1:5000/osirisChange', {
        osirisip: o
      })
      //console.log(result)
      return result
    }
    catch (error) { console.log(error) }
    ////////////////

  },
  dataChange: async function (d) {


    try {
      const result = await axios.post('http://127.0.0.1:5000/dataChange', {
        newData: d
      })
      //console.log(result)
      return result
    }
    catch (error) { console.log(error) }
    ////////////////

  },
  getAllWAN: async function () {

    const output = await Promise.all([axios.get("http://localhost:5000/nconfig"), axios.get("http://localhost:5000/latthr")]).then(([config, latthr]) => {
      console.log(config)
      console.log(latthr)



      let wans = config.data.interface.wan;
      console.log(wans)
      let latthu = latthr.data;
      console.log(latthu)
      return ({ regdata: wans, latthu: latthu })
    })
    return output;
    //const result= await axios.get("http://localhost:5000/nconfig")
    //const res= await axios.get("http://localhost:5000/latthr");


  },
  getIPs: async function (i) {
    const result = await axios.get("http://localhost:5000/nconfig"
      /*, arr2, { headers: {  
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'}
        }*/
    );
    console.log(result);
    let ipCollection = result.data.interface.wan;
    console.log(ipCollection);
    return new Promise((resolve) => {


      for (let k = 0; k < ipCollection.length; k++) {
        let data = ipCollection[k];
        // if (ipCollection[k].subflow==i)
        if (data.subflow == i)
          resolve({
            name: data.name,
            gatewayIP: data.gatewayIP,
            IP: data.IP,
            proxyIP: data.proxyIP,
            status: data.status
          });
      }
    }
    );
  },
  setIPs: function (arr) {
    console.log(arr);
    let arr2 = [];
    for (let k = 1; k < arr.length; k++) {
      arr[k].subflow = k;
      arr2.push(arr[k]);
    }
    console.log(arr2);
    axios.post("http://127.0.0.1:5000/nconfig", arr2, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
    ).then(result => console.log("Heyy " + JSON.stringify(result.data)));
    //here will be send to back end for saving into json file

  },
  setHaipe: function (obj) {
    console.log(obj);
    axios.post("http://127.0.0.1:5000/haipe", {
      "client": obj.client,
      "server": obj.server,
      "status": obj.status
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
    ).then(result =>
      console.log("Heyy " + JSON.stringify(result.data))
    );
    //here will be send to back end for saving into json file

  }
}



