import React from "react";
import Image from "next/image";
import Together1 from "../../../public/images/careerimages/carrerimg1.webp";
import Together2 from "../../../public/images/careerimages/get-together-new-2.webp";
import ceoselected1 from '../../../public/images/careerimages/caerimgs/one.jpg'
import ceoselected2 from '../../../public/images/careerimages/caerimgs/two.webp'
import ceoselected3 from '../../../public/images/careerimages/caerimgs/three.jpg'
import ceoselected4 from '../../../public/images/careerimages/caerimgs/four.jpg'
import ceoselected5 from '../../../public/images/careerimages/caerimgs/five.jpg'
import ceoselected6 from '../../../public/images/careerimages/caerimgs/six.jpg'
import ceoselected7 from '../../../public/images/careerimages/caerimgs/seven.jpg'
import ceoselected8 from '../../../public/images/careerimages/caerimgs/eight.jpg'

const CareerTogether = () => {
  return (
    <>
      <section className="together-main py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-4">
              <h2 className="together-heading">
                Get <strong>Together</strong>
              </h2>
              <p>
                We don&apos;t hesitate in conducting business parties because we
                believe that it is appropriate just about whenever you have
                something to celebrate,whether it&apos;s an employee&apos;s
                birthday or the news of a huge sale. Wheneverwe get the
                opportunity for something&apos;s coming up, we are always ready
                to honor it with celebration.
              </p>
            </div>
          </div>
          <div className="row together-row">
            <div className="carrer-gallery">
              <ul>
                <li className="getTogether-item"> <div className=" image">
                <Image src={ceoselected2} alt="Together2" /> </div>
            </li>
            <li className="getTogether-item"> <div className=" image">
              <Image src={ceoselected7} alt="Together1" />
              <Image src={ceoselected6} alt="Together2" />
            </div>
            </li>
            <li className="getTogether-item"> <div className=" image">
              <Image src={ceoselected8} alt="Together1" />
              <Image src={ceoselected5} alt="Together2" />
            </div>
            </li>
            <li className="getTogether-item"> <div className=" image">
              <Image src={ceoselected1} alt="Together1" />
              <Image src={ceoselected4} alt="Together2" />
            </div>
            </li>
            <li className="getTogether-item"> <div className=" image">
              <Image src={ceoselected3} alt="Together1" />
              <Image src={Together2} alt="Together2" />
            </div>
            </li>
              </ul>
            </div>
      
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerTogether;
