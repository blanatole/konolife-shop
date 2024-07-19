import { LuShirt } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { TbDiscount2 } from "react-icons/tb";
import { CiBadgeDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import newsLetterImg from '../../assets/images/newsletter.png';
import Button from '@mui/material/Button';
import { IoMailOutline } from "react-icons/io5";


const Footer = () => {
    return (
        <>
            <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="text-white mb-1">$20 discount for your first order</p>
                            <h3 className="text-white">Join our newsletter and get...</h3>
                            <p className="text-light">Join our email subscription now to get updates on<br /> promotions and coupons.</p>


                            <form className="mt-4">
                                <IoMailOutline />
                                <input type="text" placeholder="Your Email Address" />
                                <Button>Subscribe</Button>
                            </form>

                        </div>

                        <div className="col-md-6">
                            <img src={newsLetterImg} />
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container">
                    <div className="topInfo row">
                        <div className="col d-flex align-items-center">
                            <span><LuShirt /></span>
                            <span className="ml-2">High-quality materials</span>
                        </div>

                        <div className="col d-flex align-items-center">
                            <span><TbTruckDelivery /></span>
                            <span className="ml-2">Free nationwide delivery</span>
                        </div>

                        <div className="col d-flex align-items-center">
                            <span><TbDiscount2 /></span>
                            <span className="ml-2">Daily Mega Discounts</span>
                        </div>

                        <div className="col d-flex align-items-center">
                            <span><CiBadgeDollar /></span>
                            <span className="ml-2">Best price on the shop</span>
                        </div>
                    </div>



                    <div className="row mt-5 linksWrap">
                        <div className="col">
                            <h5>FRUIT & VEGETABLES</h5>
                            <ul>
                                <li><Link to="#">Fresh Vegetables</Link></li>
                                <li><Link to="#">Herbs & Seasonings</Link></li>
                                <li><Link to="#">Fresh Fruits</Link></li>
                                <li><Link to="#">Cuts & Sprouts</Link></li>
                                <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                                <li><Link to="#">Packaged Produce</Link></li>
                                <li><Link to="#">Party Trays</Link></li>
                            </ul>
                        </div>

                        <div className="col">
                            <h5>BREAKFAST & DAIRY</h5>
                            <ul>
                                <li><Link to="#">Fresh Vegetables</Link></li>
                                <li><Link to="#">Herbs & Seasonings</Link></li>
                                <li><Link to="#">Fresh Fruits</Link></li>
                                <li><Link to="#">Cuts & Sprouts</Link></li>
                                <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                                <li><Link to="#">Packaged Produce</Link></li>
                                <li><Link to="#">Party Trays</Link></li>
                            </ul>
                        </div>

                        <div className="col">
                            <h5>MEAT & SEAFOOD</h5>
                            <ul>
                                <li><Link to="#">Fresh Vegetables</Link></li>
                                <li><Link to="#">Herbs & Seasonings</Link></li>
                                <li><Link to="#">Fresh Fruits</Link></li>
                                <li><Link to="#">Cuts & Sprouts</Link></li>
                                <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                                <li><Link to="#">Packaged Produce</Link></li>
                                <li><Link to="#">Party Trays</Link></li>
                            </ul>
                        </div>

                        <div className="col">
                            <h5>BEVERAGES</h5>
                            <ul>
                                <li><Link to="#">Fresh Vegetables</Link></li>
                                <li><Link to="#">Herbs & Seasonings</Link></li>
                                <li><Link to="#">Fresh Fruits</Link></li>
                                <li><Link to="#">Cuts & Sprouts</Link></li>
                                <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                                <li><Link to="#">Packaged Produce</Link></li>
                                <li><Link to="#">Party Trays</Link></li>
                            </ul>
                        </div>

                        <div className="col">
                            <h5>BREADS & BAKERY</h5>
                            <ul>
                                <li><Link to="#">Fresh Vegetables</Link></li>
                                <li><Link to="#">Herbs & Seasonings</Link></li>
                                <li><Link to="#">Fresh Fruits</Link></li>
                                <li><Link to="#">Cuts & Sprouts</Link></li>
                                <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                                <li><Link to="#">Packaged Produce</Link></li>
                                <li><Link to="#">Party Trays</Link></li>
                            </ul>
                        </div>
                    </div>



                    <div className="copyright mt-3 pt-3 pb-3 d-flex">
                        <p className="mb-0">Copyright 2024. All rights reserved. Power by Minhi.</p>
                        <ul className="list list-inline ml-auto mb-0 socials">
                            <li className="list-inline-item">
                                <Link to="https://www.facebook.com/minhy.nguyen.1410/" target="_blank"><FaFacebookF /></Link>
                            </li>

                            <li className="list-inline-item">
                                <Link to="https://x.com/blanatole" target="_blank"><FaTwitter /></Link>
                            </li>

                            <li className="list-inline-item">
                                <Link to="https://www.instagram.com/_blanatole.it/?hl=en" target="_blank"><FaInstagram /></Link>
                            </li>
                        </ul>
                    </div>


                </div>
            </footer>
        </>
    )
}

export default Footer;