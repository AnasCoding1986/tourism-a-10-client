const AboutUs = () => {
    return (
        <div className="w-10/12 mx-auto">
            <h2 className="text-3xl text-center mt-20 my-10 font-luckiestGuy">About Easy Tour</h2>
            <div className="hero min-h-screen bg-base-200">
                <div data-aos="zoom-in-up" data-aos-duration="1500" className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/t3jSF5h/5-png.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Discover Your Adventure</h1>
                        <p className="py-6">At Easy Tour, we are dedicated to helping you explore the worlds most breathtaking destinations. Whether you are seeking a relaxing beach getaway or an adrenaline-fueled mountain trek, we are here to make your travel dreams a reality.</p>
                        <button className="btn bg-[tomato] border-none btn-primary">Explore Our Tours</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
