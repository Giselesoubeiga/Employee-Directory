/* eslint-disable no-useless-constructor */
import React from "react"


class Search extends React.Component{

    constructor(props){
        
        super(props);
        
    }

    render(){
        return (
            <div className="container md-form active-cyan active-cyan-2 mb-3 ">
        <input type="text" onChange={this.props.searchHandleInput} className="form-control" id="inputSearch" placeholder="Search"/>
            </div>
        )
    }
}




export default Search