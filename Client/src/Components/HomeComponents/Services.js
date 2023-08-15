
import '../../index.css'
import React from 'react'
import myImage1 from '../../assets/images/image1Service.png';
import myImage2 from '../../assets/images/image4Service.png';
import myImage3 from '../../assets/images/image2Service.png';

export default function Services() {
    return (
        <>
            <div className="container">
                <span><div className="serviceHeading d-flex justify-content-center my-3"><h1>Our Services</h1></div></span>
                <div className="services">
                    <div className="box1">
                        <img src={myImage1} alt="" />
                        <h1 className="serviceHeading h-secondary text-center">Food Delivering</h1>
                        <p>Welcome to our pizza website, where we not only offer the most delectable and mouthwatering pizzas but also provide a seamless and efficient food delivery service right to your doorstep! Savor the irresistible flavors of our freshly baked pizzas crafted with the finest ingredients and an abundance of love. Whether you're craving classic Margherita, indulgent Meat Lovers, or a delightful Veggie Supreme, our diverse menu has something to satisfy every palate. </p>
                    </div>
                    <div className="box1">
                        <img src={myImage2} alt="" />
                        <h1 className="serviceHeading h-secondary text-center">Online Ordering</h1>
                        <p>Welcome to our pizza website, where convenience meets culinary delight! Say goodbye to long waiting lines and busy phone calls because now you can indulge in your favorite pizzas with our seamless online ordering service. You can explore our extensive menu, featuring a wide array of handcrafted pizzas, from traditional classics to innovative gourmet creations. Customize your toppings, select your crust, and even add some delectable sides to complete your perfect meal.
                        </p>
                    </div>
                    <div className="box1">
                        <img src={myImage3} alt="" />
                        <h1 className="serviceHeading h-secondary text-center">Free Delivery</h1>
                        <p>At our pizza website, we take delight in offering not only the most scrumptious pizzas but also an unbeatable deal – free delivery service! Yes, you read that right! Indulge in the mouthwatering flavors of our freshly baked pizzas, and we'll bring them right to your doorstep without any additional delivery charges. Whether you're enjoying a solo pizza night or hosting a gathering, our free delivery service ensures that you can savor our delectable creations without leaving the comfort of your home.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
