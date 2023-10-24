class Dataservice{
getdata(vegpont,callback,callerror){
    axios.get(vegpont)
  .then(function (response) {
    // handle success
   /*  console.log("REsponse",response);
    console.log("Data",response.data);
    console.log("Data",response.data.nevek);
    console.log("status",response.status);
    console.log("text",response.statusText); */
    callback(response.data.nevek);
  })
  .catch(function (error) {
    // handle error
    callerror(error);
  })
  .finally(function () {
    // always executed
  });
}
}
export default Dataservice