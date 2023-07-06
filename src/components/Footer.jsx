import { ImSpoonKnife } from "react-icons/im";

const Footer = () => {
    return (
        <div className="footer-area">
            <div className="container">
                <div className="footer-body">
                    <div className='logo'>
                        <ImSpoonKnife className='brand' />
                    </div>
                    <div className="popular-recipe">
                        <p>Popular Recipe</p>
                        <p><small>Pizza</small></p>
                        <p><small>Burger</small></p>
                        <p><small>Noodles</small></p>
                    </div>
                    <div className="contact">
                        <p>Contact</p>
                        <p><small>Phone: 01799999999</small></p>
                        <p><small>Whatsapp: 01799999999</small></p>
                        <p><small>Email: recipe@gmail.com</small></p>
                    </div>
                    <div className="allreripe">
                        <p>Contact</p>
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