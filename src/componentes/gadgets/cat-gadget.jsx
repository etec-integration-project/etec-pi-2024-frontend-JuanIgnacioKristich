import './cat_gadget.css';
import airpod_pro from "../../multimedia/iphone-14-pro-max-.png"
import airpod_ from "../../multimedia/14-plus.png"
import airpod_ from "../../multimedia/iphone-13-pro-max.png"
import  airpod_ from "../../multimedia/iphone-13-green.png"
import  airpod_ from "../../multimedia/iphone-13-green-select.png"
export default function Cat_Gadget(){
    return<>
        <main class="main_1">
            <div class="Producto1">
                <img src={iphone_14_pro_max} alt="" class="producto-cat-cel"/><button ><a href="#"></a> Iphone 14 Pro Max</button>
            </div>

            <div class="Producto1">
                <img src={iphone_14_plus} class="producto-cat-cel"/><button ><a href="#"></a> Iphone 14</button>
            </div>
            
            <div class="Producto1">
                <img src={iphone_13_pro_max} alt="" class="producto-cat-cel"/><button ><a href="#"></a> Iphone 13 pro max</button>
            </div>
            
            <div class="Producto1">
                <img src={iphone_13} alt="" class="producto-cat-cel"/><button ><a href="#"></a> Celulares</button>
            </div>
            
            <div class="Producto1">
                <img src={iphone_13_select} alt="" class="producto-cat-cel"/><button ><a href="#"></a> Celulares</button>
            </div>
            
        </main>
    
    </>