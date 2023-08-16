
import './cat_cel.css';
import iphone_14_pro_max from "../../multimedia/iphone-14-pro-max-.png"
import iphone_14_plus from "../../multimedia/14-plus.png"
import iphone_13_pro_max from "../../multimedia/iphone-13-pro-max.png"
import iphone_13 from "../../multimedia/iphone-13-green.png"
import iphone_13_select from "../../multimedia/iphone-13-green-select.png"
export default function Cat_Celulares(){
    return<>
        <main>
            <div class="Producto">
                <img src={iphone_14_pro_max} alt="" class="producto-cat-cel"/><button ><a href="#"></a> Iphone 14 Pro Max</button>
            </div>

            <div class="Producto">
                <img src={iphone_14_plus} class="producto-cat-cel"/><button ><a href="#"></a> Iphone 14</button>
            </div>
            
            <div class="Producto">
                <img src={iphone_13_pro_max} alt="" class="producto-cat-cel"/><button ><a href="#"></a> Iphone 13 pro max</button>
            </div>
            
            <div class="Producto">
                <img src={iphone_13} alt="" class="producto-cat-cel"/><button ><a href="#"></a> Celulares</button>
            </div>
            
            <div class="Producto">
                <img src={iphone_13_select} alt="" class="producto-cat-cel"/><button ><a href="#"></a> Celulares</button>
            </div>
            
        </main>
    
    </>
}