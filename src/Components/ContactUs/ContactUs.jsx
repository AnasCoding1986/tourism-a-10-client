

const ContactUs = () => {
    return (
        <div>
            <h2 className="text-3xl text-center mt-20 my-10 font-luckiestGuy">Contact us</h2>
            <div className="relative" style={{ paddingTop: "56.25%" }}>
                <div className="absolute inset-0">
                    <iframe
                        className="w-full h-full border-0"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.882031573859!2d91.86246727414252!3d24.902005243596292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375055d7407fda6d%3A0x79ca293a81de9a6!2sKoborsthan%20Point!5e0!3m2!1sen!2sbd!4v1713242297323!5m2!1sen!2sbd"
                        width="300"
                        height="250"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
