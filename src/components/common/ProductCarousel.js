import ProductDetail from "./ProductDetail"
import OwlCarousel from 'react-owl-carousel'; 
import products from '../../data/AllProducts'; 
//import { Link ,useParams} from 'react-router-dom';
import  product from '../../data/AllProducts';

const ProductCarousel = (props) => {
  console.log(products);
     console.log(ProductCarousel);
    return(
        <div id="products">
            <OwlCarousel items={4}  
            className="products product-carousal owl-theme"  
            loop={false}
            autoplayHoverPause={true}
            nav  
            >
                { props.products && props.products.length ? props.products.map((item, i) => {
                    return(
                        <article className='product-miniature col-xl-3 clearfix' key={i}>
                            <ProductDetail productDetail={item} />
                           
                        </article>
                    )
                }) : <></>}
            </OwlCarousel>
        </div>
    )
}
export default ProductCarousel;