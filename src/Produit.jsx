import React from "react";
import "./Produit.css"

const box = {
    overflow:"hidden",
    backgroundColor: "#FAFAF5",
    border:"solid 1px lightgrey",
    display: "flex",
    justifyItems:"center",
    flexDirection:"column",
    padding:"0 0px",
    paddingBottom:"10px",
    borderRadius:"15px",

}

const produitStyle = {
    padding:"0 10px",
    fontSize: "13px"
}

const prixStyle = {
    margin:"0 10px",
    fontSize: "13px",
    color: "#426B1F",



}

const descriptionStyle = {
    padding:"0 10px",
    color:"gray",
    fontSize: "10px",


}

const imageStyle = {
    maxWidth: "100%",
    height: "auto",
    width: "220px",


}


const addHoverStyle = {
    backgroundColor:"#5C8541FF",
    border: "solid 0.5px #FAFAF5 "
}


class Produit extends React.Component{



    ajouterAuPanier = () => {
        alert("Le produit a été ajouté")
    }

    render() {

        return (

            <div className="produit" style={box}>
                <img src={this.props.image} alt={this.props.nom} style={imageStyle}/>
                <h1 style={produitStyle}>{this.props.nom}</h1>
                <h2 style={prixStyle}>{this.props.prix}</h2>
                <p style={descriptionStyle}>{this.props.description}</p>
                <div className="scpaceButton"></div>
                <button className="addbasket" onClick={this.ajouterAuPanier} >add</button>
            </div>
        )

    }
}

export default Produit;