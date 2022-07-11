import React from "react"
import map_icon from "../images/map_icon.png"



export default function Main(props){
    console.log(props)
    return(
      <main >
        <img className="main--photo" src={props.item.imageUrl} alt="" />
        <div className="main--sidebar">
            <div className="main--map">
                <img src={map_icon} />
                <h4 >{props.item.location.toUpperCase()}</h4>
                <a href={props.item.googleMapsUrl}>View on Google Maps</a>
               
            </div>
            <h1>{props.item.title}</h1>
            <h4>{props.item.startDate} - {props.item.endDate}</h4>
            <p>{props.item.description}</p>
        </div>
      </main>
    )}