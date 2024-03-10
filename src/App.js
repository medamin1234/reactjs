
import Navigationbar from "./navbar";
import Cards from './kaisacard';



const champion=[{picture:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_0.jpg",name:'kaisa',description:'Some quick example text to build on the card title and make up the...'},{picture:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_0.jpg",name:'lux',description:'Some quick example text to build on the card title and make up the...'},{picture:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_0.jpg",name:'akali',description:'Some quick example text to build on the card title and make up the...'}]
export default function App() {
    return (
      
      <div>
        <Navigationbar/>
<div style={{display:"flex"}}>
       {champion.map((v)=> <Cards/>)}
       </div>
       </div>
    );
}
