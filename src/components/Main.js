import React from "react";
import Search from "./Search";
import Employee from "./EmployeesList";

class Main extends React.Component{

    render(){
        return(
            <div className="p-5">
                <Search/>
                <Employee/>

            </div>
        )
    
}

}


export default Main