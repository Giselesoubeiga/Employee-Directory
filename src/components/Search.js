/* eslint-disable no-useless-constructor */
import React from "react"


class Search extends React.Component{

    constructor(props){
        
        super(props);
        
    }


   
    render(){
        return (
            <div className="p-5">
        <input type="text" onChange={this.props.searchHandleInput} className="form-control" id="inputSearch" placeholder="Search"/>
            </div>
        )
    }
}




export default Search