import style from "./Card.module.css"
import { NavLink } from "react-router-dom"




const Card = (props)=>{
    return(
        <div className={style.divContainer}>
            <p>{props.name} </p>
            <img src={props.image} alt='Recipe'/> 
            <p>Diets: {props.diets}</p>
            <NavLink className={style.linkDetail} to={`/detail/${props.id}`}>
                <p>Detail of Recipe!</p>
            </NavLink>
        </div>
    )

}
export default Card;
//<p>Diets: {props.diets.join(", ")}</p>

