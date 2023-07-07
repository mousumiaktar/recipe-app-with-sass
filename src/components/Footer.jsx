import { ImSpoonKnife } from "react-icons/im";

const Footer = () => {
    return (
        <div className="footer-area">
            <div className="container">
                <div className="footer-body">
                    <div className='footer-flex'>
                        <img  src="https://i.ibb.co/k4VP74Y/download.jpg" alt="" />
                    </div>
                    <div className="footer-flex">
                        <p>Popular Recipe</p>
                        <p><small>Pizza</small></p>
                        <p><small>Burger</small></p>
                        <p><small>Noodles</small></p>
                    </div>
                    <div className="footer-flex">
                        <p>Contact</p>
                        <p><small>Phone: 01799999999</small></p>
                        <p><small>Whatsapp: 01799999999</small></p>
                        <p><small>Email: recipe@gmail.com</small></p>
                    </div>
                    <div className="footer-flex">
                        <p>Recipe</p>
                        <p><small>Pizza</small></p>
                        <p><small>Burger</small></p>
                        <p><small>Noodles</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;