import ProductDetail from "./ProductDetail"
import OwlCarousel from 'react-owl-carousel';  

const ProductCarousel = (props) => {
    return(
        <div id="products">
            <OwlCarousel items={4}  
            className="products product-carousal owl-theme"  
            loop={false}
            autoplayHoverPause={true}
            nav  
            >
                { props.productList && props.productList.length ? props.productList.map((item, i) => {
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