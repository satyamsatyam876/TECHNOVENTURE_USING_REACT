import React from "react";
import vg from "../assets/2.webp";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
    return (
        <>
            <div className="home" id="home">
                <main>
                    <h1>Technoventure</h1>
                    <p>Solution to all your problems</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Graphics" />

                <div>
                    <p>
                        We are your one and only solution to the tech problems you face
                        every day. We are leading tech company whose aim is to increase the
                        problem solving ability in children.
                    </p>
                </div>
            </div>

            <div className="home3" id="about">
                <div>
                    <h1>Who we are?</h1>
                    <p>
                        with a passion to revolutionize businesses and a vision to digitally innovate the ever-changing technological landscape. It was never easy; every project was a bit eccentric and complex in its own way. However, by accurately combining our technical expertise with ever-growing cutting-edge solutions, we excelled at product development, devising a multitude of breakthroughs.
                    </p>
                </div>
            </div>

            <div className="home4" id="brands">
                <div>
                    <h1>
                        Brand
                    </h1>
                    <article>
                        <div style={{
                            animationDelay: "0.3s"
                        }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={{
                            animationDelay: "0.5s"
                        }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>

                    </article>
                </div>
            </div>
        </>
    );
};

export default Home;
