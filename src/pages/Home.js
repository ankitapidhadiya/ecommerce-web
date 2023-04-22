import Customhtml1 from '../components/common/Customhtml1';
import ProductList from '../components/common/ProductList';
export default function Home() {

	const handleLogout = (props) => {
		localStorage.removeItem('auth_token');
		props.history.push('/login')
	};

	return (
		<div className="home-page">
			<div id="slider" className="carousel slide" data-bs-ride="carousel">

				

				{/* slideshow/carousel */}
				<div className="carousel-inner">
					<div className="carousel-item active">
						<a href="#">
						<img src="/img/banner-1.jpg" alt="bnner" id="banner1" />
						</a>
						<div className="container-fluid">
							<div className="banner-des">
								<div className="banner-des-inner banner1">
									<div className="promo-text">
										New Arrivals
									</div>
									<h1 className="promo-title">Men's Fashion</h1>
									<a href="#" className="promo-btn btn btn-primary">Shop Now </a>
								</div>
							</div>
						</div>	
					</div>
					<div className="carousel-item">
						<a href="#">
						<img src="/img/banner-2.jpg" alt="bnner2"  id="banner2" />
						</a>
						<div className="container-fluid">
							<div className="banner-des">
								<div className="banner-des-inner banner2">
									<div className="promo-text">
										New Arrivals
									</div>
									<h1 className="promo-title">The Latest Trends  in Fashion</h1>
									<a href="#" className="promo-btn btn btn-primary">Shop Now </a>
								</div>
							</div>
						</div>	
					</div>
				</div>
                {/* Indicators/dots  */}
				<div className="carousel-indicators">
					<button type="button" data-bs-target="#slider" data-bs-slide-to="0" className="active"></button>
					<button type="button" data-bs-target="#slider" data-bs-slide-to="1"></button>
				</div>
				{/* Left and right controls/icons 
				<button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
					<span className="carousel-control-prev-icon"></span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
					<span className="carousel-control-next-icon"></span>
	</button>*/}
			</div><ProductList/>
			<Customhtml1/>
			
		</div>
	);
}