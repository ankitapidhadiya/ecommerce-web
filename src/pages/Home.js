
export default function Home() {

	const handleLogout = (props) => {
		localStorage.removeItem('auth_token');
		props.history.push('/login')
	};

	return (
		<div className="home-page">
			<div id="demo" className="carousel slide" data-bs-ride="carousel">

				{/* Indicators/dots  */}
				<div className="carousel-indicators">
					<button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
					<button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
					<button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
				</div>

				{/* slideshow/carousel */}
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src="/img/banner-1.jpg" alt="Los Angeles" className="d-block" />
					</div>
					<div className="carousel-item">
						<img src="/img/ph2.jpg" alt="Chicago" className="d-block" />
					</div>
					<div className="carousel-item">
						<img src="/img/ph3.jpg" alt="New York" className="d-block" />
					</div>
				</div>

				{/* Left and right controls/icons */}
				<button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
					<span className="carousel-control-prev-icon"></span>
				</button>
				<button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
					<span className="carousel-control-next-icon"></span>
				</button>
			</div>
		</div>
	);
}