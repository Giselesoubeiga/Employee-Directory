import React from "react";
import Search from "./Search";
import Employee from "./EmployeesList";
import axios from "axios";

class Main extends React.Component{
    constructor(props){
        
        super(props);
        this.state={
            order:"",
            employees:[],
            filtredEmployees:[],
            inputContent:"",
        }
    }

    componentDidMount() {
        axios
          .get("https://randomuser.me/api/?results=200&nat=us")
          .then((response) => {
            console.log(response.data.results);
           
            this.setState({
                filtredEmployees:response.data.results,
              employees: response.data.results,
            });
          });
      }


      searchHandleInput=(e)=>{ 
          this.setState({inputContent:e.target.value})
          console.log(e.target.value)


          const newFiltredEmployees= this.state.employees

          const filtredEmployees2= newFiltredEmployees.filter(employee => employee.name.first.toLowerCase().indexOf(this.state.inputContent.toLowerCase()) > -1
          )

        this.setState({
            filtredEmployees:filtredEmployees2,
        });

      }

      orderByName =()=>{
        if (this.state.order ==="asc"){
          let orderEmployee= this.state.filtredEmployees
         let elements = orderEmployee.sort((a,b)=> a.name.first>b.name.first?-1:1)
          this.setState({filtredEmployees:elements,order:"desc"})
        }else {
          let orderEmployee= this.state.filtredEmployees
        let elements = orderEmployee.sort((a,b)=> a.name.first>b.name.first? 1:-1)
        this.setState({filtredEmployees:elements,order:"asc"})
        }
      }

    render(){
        return(
            <div className="p-5">
                <Search searchHandleInput={this.searchHandleInput}/>
                <Employee employeesList={this.state.filtredEmployees} orderByName={this.orderByName}/>

            </div>
        )
    
}

}

export default Main

