"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import careersadvantageicon1 from "../../../public/images/careerimages/careers-advantage-icon-1.webp";
import careersadvantageicon2 from "../../../public/images/careerimages/careers-advantage-icon-2.webp";
import careersadvantageicon3 from "../../../public/images/careerimages/careers-advantage-icon-3.webp";
import careersadvantageicon4 from "../../../public/images/careerimages/careers-advantage-icon-4.webp";
import careersadvantageicon5 from "../../../public/images/careerimages/careers-advantage-icon-5.webp";
import careersadvantageicon6 from "../../../public/images/careerimages/careers-advantage-icon-6.webp";
import careersadvantageicon7 from "../../../public/images/careerimages/careers-advantage-icon-7.webp";
import careersadvantageicon8 from "../../../public/images/careerimages/careers-advantage-icon-8.webp";
import Image from "next/image";

const WebguruzWorking = () => {
  // Variants for motion elements
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Ref and state for inView
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const inView = useInView(ref, { triggerOnce: false });

  // Update state only when the element comes into view for the first time
  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <div className="webguru-working-career py-5 text-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <motion.h2
              initial="hidden"
              animate={hasAnimated ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 0.8 }}
              ref={ref}
            >
              Working with Webguruz has <br />{" "}
              <strong>numerous advantages :</strong>
            </motion.h2>
          </div>
          {[
            careersadvantageicon1,
            careersadvantageicon2,
            careersadvantageicon3,
            careersadvantageicon4,
            careersadvantageicon5,
            careersadvantageicon6,
            careersadvantageicon7,
            careersadvantageicon8,
          ].map((icon, index) => (
            <div className="col-md-6 col-12" key={index}>
              <motion.div
                className="webguru-working-icon-text"
                initial="hidden"
                animate={hasAnimated ? "visible" : "hidden"}
                variants={variants}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              >
                <div className="working-icon">
                  <Image src={icon} alt={`Career Image ${index + 1}`} />
                </div>
                <div className="working-text">
                  <p>
                    <span></span>{" "}
                    {
                      [
                        "Learning Without Stopping",
                        "Bonus incentive for Referrals",
                        "Salary that Beats the Competition",
                        "Assistance & Leadership training",
                        "Versatile Remote Work",
                        "Individual Health Insurance Plans",
                        "Food Allowance",
                        "On Site Opportunity",
                      ][index]
                    }
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
        {/* Excluded Section */}
        <div className="career-mail-us mt-5 row">
          <div className="col-12">
            <div className="heading-mail">
              <h2>
                Unfulfilled by your current role? We&apos;re hiring bright
                minds! <br />
                <strong> Let&apos;s talk possibilities.</strong>
              </h2>
              <a
                href="mailto:info@webguruz.in"
                target="_blank"
                rel="noopener noreferrer"
                className="explore-btn"
              >
                email us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebguruzWorking;
