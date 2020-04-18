import React from "react"


class Search extends React.Component{
    handleChange(e){
        console.log(e.target.value)
    }
    render(){
        return (
            <div className="p-5">
        <input type="text" onChange={this.handleChange} className="form-control" id="inputSearch" placeholder="Search"/>
            </div>
        )
    }
}




export default Search