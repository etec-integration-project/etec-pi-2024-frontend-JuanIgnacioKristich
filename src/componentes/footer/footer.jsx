
import './footer.css';
import ig_logo from "../../multimedia/IG_LOGO.png"
import twitter_logo from "../../multimedia/twitter.png"
import whatsapp_logo from "../../multimedia/whatsapp.png"

export default function Footer(){
    return<>
        <footer>
        <div class="contacto-footer">
            <ul>
                <li class=""><a href=""><img src={ig_logo} alt=""/></a></li>
                <li class=""><a href=""><img src={twitter_logo} alt=""/></a></li>
                <li class=""><a href=""><img src={whatsapp_logo} alt=""/></a></li>
            </ul>
        </div>

        <div class="direccion-de-contacto">
            <a class="direccion-fisica" href="">direccion</a>
        </div>
    </footer>
    
    </>
}