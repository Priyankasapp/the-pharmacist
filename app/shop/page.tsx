import ProductCard from "@/components/Shop/ProductCard/ProductCard";
import ProductSidebar from "@/components/Shop/ProductSidebar/ProductSidebar";

const Shop = () => {
    return(
        <div>
            <h1 style={{padding:'0% 3% '}}>Shop</h1>
            <ProductSidebar/>
            <ProductCard/>
        </div>
    )
}
export default Shop;