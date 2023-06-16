import { Link } from "react-router-dom";

export default function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div>
         <button onClick={()=> onClose(id)}>X</button> 
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt='' /> 
         <Link to={`/detail/${id}`} >
            <h3 className="card-name">{name}</h3>
         </Link>
      </div>
   );
}
