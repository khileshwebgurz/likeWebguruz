import React, { use } from "react";
import userem from "../../../public/images/empolyeimages/amanjot.webp";
import Image from "next/image";
import suddit from "../../../public/images/careerimages/web-main-su.webp";
import parul from "../../../public/images/careerimages/web-main-4.webp";
import avtar from "../../../public/images/careerimages/web-main-6.webp";
import arti from '../../../public/images/empolyeimages/arti-mam.webp'
import shiney from '../../../public/images/empolyeimages/shiney.webp'

const EmployeeWords = () => {
  return (
    <div className="Empolyespeak-section pt-2 pt-md-5 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center mb-5">
            <h2>
              What are <span>they saying?</span>
            </h2>
          </div>
        </div>
        <div className="row speakempolye pt-5">
          <div className="col-md-6 col-12 mb-5">
            <div className="speak-card">
              <div className="speak-user">
                <Image src={avtar} alt="Avtar Singh" />
              </div>
              <div className="user-name">
                <h6>Avtar Singh</h6>
              </div>
              <p>
              &quot;Working at WebGuruz has been a transformative experience for
                me. The company&apos;s approach to work-life balance is exemplary,
                and I feel that my contributions are truly valued. The
                leadership fosters an open-door policy, and communication is
                always clear and constructive. I&apos;ve had the opportunity to
                take on new challenges and grow my skills, and it&apos;s been
                incredibly rewarding to see the impact of my work on the
                company&apos;s success.&quot;
              </p>
              {/* <h5>Puneet Sharma</h5>
              <span>Test</span> */}
            </div>
          </div>
          <div className="col-md-6 col-12 mb-5">
            <div className="speak-card">
              <div className="speak-user">
                <Image src={userem} alt="Amanjot Kaur" />
              </div>
              <div className="user-name">
                <h6>Amanjot Kaur</h6>
              </div>
              <p>
              &quot;What I love about WebGuruz is how much the company invests in
                its people. From the first day, I&apos;ve been encouraged to bring my
                unique perspectives to the table. The flexibility in working
                hours and remote work options allow me to balance my
                professional and personal life seamlessly. I also appreciate how
                the leadership team is transparent and always open to feedback,
                which makes me feel respected and heard.&quot;
              </p>
              {/* <h5>Puneet Sharma</h5>
              <span>Test</span> */}
            </div>
          </div>
          <div className="col-md-6 col-12 mb-5">
            <div className="speak-card">
              <div className="speak-user">
                <Image src={suddit} alt="Suddit Kaura" />
              </div>
              <div className="user-name">
                <h6>Suddit Kaura</h6>
              </div>
              <p>
              &quot;WebGuruz is the perfect place to build a meaningful career. The
                projects are challenging and fulfilling, and I get to
                collaborate with some of the brightest minds in the industry.
                There is a real focus on personal development here—management
                actively works with us to set career goals, and I&apos;ve seen
                firsthand how the company helps employees achieve them. The
                workplace culture is inclusive and supportive, and it&apos;s
                clear that everyone is working toward the same goal.&quot;
              </p>
              {/* <h5>Puneet Sharma</h5>
              <span>Test</span> */}
            </div>
          </div>
          <div className="col-md-6 col-12 mb-5">
            <div className="speak-card">
              <div className="speak-user">
                <Image src={arti} alt="Arti Sharma" />
              </div>
              <div className="user-name">
                <h6>Arti Sharma</h6>
              </div>
              <p>
              &quot;Since joining WebGuruz, I&apos;ve been given the freedom to unleash
                my creativity while also working with a team that values design
                excellence. The company&apos;s commitment to fostering a positive and
                inclusive work environment makes me feel empowered. I&apos;ve had the
                chance to work on some amazing projects that have made a real
                impact on our clients. The collaboration across teams here is
                seamless, and I&apos;m proud to be part of a company that values
                innovation.&quot;
              </p>
              {/* <h5>Puneet Sharma</h5>
              <span>Test</span> */}
            </div>
          </div>
          <div className="col-md-6 col-12 mb-4 mb-md-5">
            <div className="speak-card">
              <div className="speak-user">
                <Image src={shiney} alt="Shiney Sharma" />
              </div>
              <div className="user-name">
                <h6>Shiney Sharma</h6>
              </div>
              <p>
              &quot;What makes WebGuruz truly stand out is its culture of empathy
                and growth. It&apos;s not just about the bottom line; the company
                genuinely cares about its employees&apos; well-being. From wellness
                programs to team-building activities, there&apos;s always something
                to keep us engaged and connected. I&apos;ve grown immensely in my
                role here, and I&apos;m constantly supported by management in my
                professional development. It&apos;s truly a company that invests in
                its people.&quot;
              </p>
              {/* <h5>Puneet Sharma</h5>
              <span>Test</span> */}
            </div>
          </div>
          <div className="col-md-6 col-12 mb-0 mb-md-5">
            <div className="speak-card">
              <div className="speak-user">
                <Image src={parul} alt="Parul Sharma" />
              </div>
              <div className="user-name">
                <h6>Parul Sharma</h6>
              </div>
              <p>
              &quot;Working at WebGuruz has been incredibly fulfilling. The company
                promotes a customer-first mindset, and I feel proud to be part
                of a team that truly listens to our clients and helps them
                succeed. There&apos;s a strong sense of camaraderie within our
                department, and we all work closely together to tackle
                challenges. The leadership is approachable and truly cares about
                our feedback, which makes me feel like an integral part of the
                company.&quot;
              </p>
              {/* <h5>Puneet Sharma</h5>
              <span>Test</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeWords;

