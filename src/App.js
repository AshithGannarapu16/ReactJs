
import ButtonComponent from "./components/button/button-component";
import ListComponent from "./components/list/list";
import OrderedList from "./components/list/orderedlist/orderedlist";
import UnorderedList from "./components/list/unorderedlist/unorderedlist"
import Table from "./components/table/table";


function App(){
  return(
    
    <div>
    <h3>app.js</h3>
    <ButtonComponent/>
    <ListComponent/>
    <OrderedList/>
    <UnorderedList/>
    <Table/>
  
    <h3>end of buttoncomponent</h3>
    </div>
  )
}
export default App