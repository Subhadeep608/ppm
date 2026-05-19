import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import ButtonComponent from '../../components/button.js';
import ProjectCard from '../../components/ProjectCard.js';

export default function ProjectSection() {

    const projects = [
        {
            image: "/media/LandingImg/site-1.png",
            title: "markseo",
            description: "Visit Site",
            url: "https://markseo.com.au/",
        },
        {
            image: "/media/LandingImg/site-2.png",
            title: "RMN Electrical",
            description: "Visit Site",
            url: "https://markseo.com.au/rmn",
        },
        {
            image: "/media/LandingImg/site-3.png",
            title: "Stealth Traffic Management",
            description: "Visit Site",
            url: "https://www.markseo.com.au/stealthtrafficmanagement",
        },
        {
            image: "/media/LandingImg/site-4.png",
            title: "Digi Info TechMedia",
            description: "Visit Site",
            url: "https://digiinfotechmedia.com/",
        },
        {
            image: "/media/LandingImg/site-5.png",
            title: "Allcncdesigns",
            description: "Visit Site",
            url: "https://allcncdesigns.com/",
        },
        {
            image: "/media/LandingImg/site-6.png",
            title: "digiinfotech",
            description: "Visit Site",
            url: "https://www.digiinfotech.com/",
        },
        {
            image: "/media/LandingImg/site-7.png",
            title: "paylesswreckers",
            description: "Visit Site",
            url: "https://www.markseo.com.au/payless/",
        },
    ];

    return (
        <section className='project-sec py-5'>

            <div className='container'>

                {/* Section Title */}
                <div className='row project-title-row align-items-center mb-4'>

                    <div className='col-lg-6 col-md-6 col-12'>
                        <span className="sub-title-left">
                            OUR RECENT PROJECT
                        </span>

                        <h2 className="main-title-left mt-3">
                            We making your
                        </h2>
                    </div>

                    <div className='col-lg-6 col-md-6 col-12 text-md-end mt-3 mt-md-0'>

                        <ButtonComponent
                            path={"/contact  "}
                            name={"Lets Work Together"}
                            className={"work-togather"}
                        />

                    </div>

                </div>

                {/* Slider */}
                <Swiper
                    modules={[Autoplay, Navigation]}
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                    }}
                >

                    {projects.map((project, index) => (

                        <SwiperSlide key={index}>

                            <ProjectCard
                                image={project.image}
                                title={project.title}
                                description={project.description}
                                url={project.url}
                            />

                        </SwiperSlide>

                    ))}

                </Swiper>

            </div>

        </section>
    );
}