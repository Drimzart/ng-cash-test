import SideBar from "../components/SideBar"
import Table from "../components/Table"
import Transfer from "../components/Transfer"


export default () => {

  return (
    
      <div className="flex mt-10">
        <SideBar/>
        <div className="flex flex-col justify-center">
          <Transfer/>
          <Table/>
        </div>
      </div>
     
      
    
   
  )
}