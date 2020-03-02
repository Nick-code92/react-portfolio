import React from "react";
import Hero from "../components/Hero";
import Content from "../components/content"

function About(props) {
    return (
        <div>
            <Hero title={props.title} />

            <Content>
                <p>
                    My Name is Nikddimos Gebregiorgis i was born in Addis Ababa, Ethiopia, but grew up here in the stats. A little about i'm very adventuress person i love to travel and see new places, so far i had been in more than 22 different countries and 4 different continent. </p>
                <p>
                    I'm first time coder but i have learned so much in boot camp. As a first time developer i want to builded a nice portfolio so that I can showcase my applications to potential employers and clients. In this portfolio you get to see some of the works i have do so fare. If u want to take a look at my works please refer to my Readme.md. it also includes my resume and link to my github and Linkin portfolios. </p>

                <p>
                    I'm constantly learning a new things. Currently finishing coding boot-camp. I have learned so much from the boot-camp such as MongoDB, React, Express JS. Node JS, MySql, HTML, different type CSS, and BootStrap  
            </p>


            </Content>
        </div>
    );

}

export default About;
