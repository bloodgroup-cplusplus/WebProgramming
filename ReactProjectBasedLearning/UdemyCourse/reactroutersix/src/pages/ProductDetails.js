import{Route,useParams, useMatch} from "react-router-dom"

// nested routes 

import Offers from "./Offers"

export default function ProductDetails(){
    const{id}=useParams()
    //const{path}=useMatch()


    return(
        <div className="content">
            <div className="product">
                <div className="image">
                    <img src="https://via.placeholder.com/520x460" alt=""/>
                </div>
            </div>
            <div className="details">
                <h2>Product -{id}</h2>
                <p>so code socks for 20% again for today do it </p>
            </div>

      {/*<Route path = {`${path}/offers`}>
            <Offers/>
    </Route>*/}
    </div>
    )
}