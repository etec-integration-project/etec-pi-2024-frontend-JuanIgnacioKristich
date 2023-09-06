import './cat-gadget.css';
import airpod_pro from "../../multimedia/airpods-pro.png"
import airpod_max from "../../multimedia/airpods-max.png"
import airpod_gen3 from "../../multimedia/airpods-gen3.png"
import  airpod_gen2 from "../../multimedia/airpod-gen2.png"

export default function Cat_Gadget(){
    return <>
        <main class="main_1">
            <div class="Producto-gad">
                <img src={airpod_max} alt="" class="producto-cat-gad"/><button ><a href="#"></a> Airpods Max</button>
            </div>

            <div class="Producto-gad">
                <img src={airpod_pro} class="producto-cat-gad"/><button ><a href="#"></a> Airpods Pro</button>
            </div>
            
            <div class="Producto-gad">
                <img src={airpod_gen3} alt="" class="producto-cat-gad"/><button ><a href="#"></a> Airpods GEN3 </button>
            </div>
            
            <div class="Producto-gad">
                <img src={airpod_gen2} alt="" class="producto-cat-gad"/><button ><a href="#"></a> Airpods GEN2 </button>
            </div>
            
            <div class="Producto-gad">
                <img src={airpod_gen2} alt="" class="producto-cat-gad"/><button ><a href="#"></a> Celulares</button>
            </div>
            
        </main>
    </>
}