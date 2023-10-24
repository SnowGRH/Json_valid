import Model from "../model/Model.js";
import DataView from "../View/DataView.js";
import Dataservice from "../model/Dataservice.js";
import Hibakod from "../View/Hibakod.js";

class Controller{
    constructor(){
        this.Dataservice = new Dataservice()
        this.Dataservice.getdata("../adat.json",this.megjelenites,this.hibamegjelenit)
        
    }
 megjelenites(lista){
    console.log(lista);
    new DataView(lista,$(".lista"))
 }
 hibamegjelenit(error){
    console.log("error");
    new Hibakod(error,$(".lista"))
 }
}
export default Controller