import Layout from '../components/Layout.js';
import Link from 'next/link';
import React from "react";
import Header from '../components/Header.js';
import {getInfo} from '../lib/utils.js';
require("isomorphic-fetch");

class Home extends React.Component {
  constructor(props) {
    super(props);
	this.state={ search: ""}
  }
	handleUpdate(evt){
		this.setState({search: evt.target.value})
}
	async handleSearch(evt) {
		const user = await getInfo(this.state.search);
//		console.log(user)
		this.setState({user})   }

  render() {
    return (
	<center>
      <Layout style={{ margin: "auto auto", width: "600px", textAlign: "center" }}>
        <img src="https://cdn.pixabay.com/photo/2014/04/03/00/35/walking-308782_1280.png" className="App-logo" />
        <h2>Search for a Campground</h2>
	<p><input type='text' value={this.state.search} onChange = {this.handleUpdate.bind(this)} /></p>
	<div className="button-style" onClick={this.handleSearch.bind(this)}>Search</div>
	    

    {this.state.user ? <div>
	    <br />
	        <h3>{this.state.user.name}</h3>
	        <img sytle={{maxwidth: "100px", maxHeight: "100px" }}     
	    	src={this.state.user.image_url} /><br/>
	              <h4>{this.state.user.closest_town}</h4>
	              <p>{this.state.user.description}</p>
	          </div> : null }   

	{"user" in this.state && this.state.user.name == undefined ?
			<p> No campground under this name </p>
			:null}

        <style jsx>{`
	  h1,
          h2,
          a,
          p {
            font-family: "Arial";
          }
         .button-style {
		 margin: auto auto;
		 cursor: pointer;
		 background-color: #4633FF;
		 color: #ffffff;
		 width: 100px;
		 font-family: "Arial";
	 }

          .description {
            font-family: "Arial";
            font-size: "10px";
          }

          ul {
            padding: 0;
          }

          li {
            list-style: none;
            margin: 5px 0;
          }
          .App-logo {
            height: 80px;
          }

          a {
            text-decoration: none;
            color: blue;
          }

          a:hover {
            opacity: 0.6;
          }
        `}</style>
      </Layout>
	</center>
    );
  }
}

export default Home;
