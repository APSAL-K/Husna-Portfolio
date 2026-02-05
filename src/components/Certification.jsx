import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { live } from "../assets";
import { SectionWrapper } from "../hoc";
import { certifications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const CertificationCard = ({
    index,
    name,
    description,
    image,
    source_code_link,
}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
            >
                <div className="relative w-full h-[230px]">
                    <img
                        src={image}
                        alt="certification_image"
                        className="w-full h-full object-contain rounded-2xl bg-white/10"
                    />

                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        <div
                            //onClick={() => window.open(source_code_link, "_blank")}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <img
                                src={live}
                                aria-disabled="true"
                                alt="preview"
                                className="w-1/2 h-1/2 object-contain"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[14px]">{description}</p>
                </div>
            </Tilt>
        </motion.div>
    );
};

const Certification = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>My accomplishments</p>
                <h2 className={`${styles.sectionHeadText}`}>Certifications.</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    These certifications represent my commitment to continuous learning and
                    professional development in software engineering, AI, and web technologies.
                </motion.p>
            </div>

            <div className="mt-20 flex flex-wrap gap-7">
                {certifications.map((certification, index) => (
                    <CertificationCard key={`certification-${index}`} index={index} {...certification} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Certification, "certification");
