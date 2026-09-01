import ProductCard from "@/components/Shop/ProductCard/ProductCard";
import ProductSidebar from "@/components/Shop/ProductSidebar/ProductSidebar";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Shop = () => {
    return(
        <div>
            <h1 style={{padding:'0% 3% '}}>Shop</h1>
            <ProductSidebar/>
           <div>
            <ProductCard/>
            <div>
                <div style={{
                    color:"black",
                    float:"left",
                    padding:"8px 16px",
                    textDecoration:"none",
                    transition:"backgroundColor .3s"
                }}>
                    <a><ArrowLeft/> Previous</a>
                    <a>1</a>
                    <a>2</a>
                    <a>3</a>
                    <a>...</a>
                    <a>10</a>
                    <a>16</a>
                    <a><ArrowRight/> Next</a>
                </div>
            </div>
           </div>
        </div>
    )
}
export default Shop;