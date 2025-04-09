import React from "react";
import Image from "next/image";
import review from "../../../public/images/testimonialImages/review-1.webp";
import first from "../../../public/images/testimonialImages/review-3.webp";
import reviewtwo from "../../../public/images/testimonialImages/review-2.webp";
import reviewthree from "../../../public/images/testimonial4.webp";
import reviewfour from "../../../public/images/testimonialImages/review-4.webp";
import reviewfive from "../../../public/images/testimonial1.webp";
import reviewsix from "../../../public/images/testimonial2.webp";
import reviewsev from "../../../public/images/testimonial3.webp";
import review8 from "../../../public/images/testimonial5.webp";

const testimonials = [
  {
    image: first,
    name: "Stephony",
    title: "I love Dogs",
    text: "“When you talk about SEO(Search Engine Optimisation), Webguruz technologies are just the best technology but they are better than the best. Many thanks to Jass and his team for the great work!”",
  },
  {
    image: reviewtwo,
    name: "Sonia Smith",
    title: "IVY Language",
    text: "“Words cannot express how impressed I am with Webguruz. I would go so far as to say, you set a bench mark in completing the task within time. I am really happy with your quality work and responsiveness. You just took my stress away. It was really swift and saved both my time and money.”",
  },
  {
    image: reviewfour,
    name: "Brian Eisberg",
    title: "Battle Field",
    text: "“Jas and his Webguruz team have helped me close and make an attractive fee on a large commercial real estate deal here in the United States and helped me organize and hugely advance an interesting foray into what should be a very lucrative project when it takes wing.  I started with one modest task on a website and our relationship grew into their deeper involvement at my request.  As I was branching out into previously unknown territory, they provided very useful advice as well as services. Remember, very clear instructions bring the best results, of course! They will be happy to prove themselves to you the same way as they did for me, a step at a time!”",
  },
  {
    image: review8,
    name: "Sayu A.",
    title: "AIO Hub",
    text: "“WebGuruz Technology did a fantastic job. They were completely knowledgeable and did assignments in a timely manner. I would definitely recommend them for hire.”",
  },
  {
    image: review,
    name: "Tina Costermans",
    title: "Mindful Mastery",
    text: "“I like to take this review as a chance to thank Jass and his amazing team, Webguruz. Because I am continually stunned by their work. I am creating a big video course, which includes building a website, a membership site, and an affiliate system to work with affiliates. They are creative in designing and technically sound enough to work on it. Now I’m not the easiest customer to work with. I work everything out in the very smallest details. After that, as I am in a learning process myself to create all this, I keep adjusting things, or even changing things completely, which impacts things that are already set up and complicates the work for everyone. I know this mustn’t be easy for them. But still, nothing changes in their attitude. All this time they had a very professional, and even supportive attitude towards my project. I am really satisfied with their work so far, the layout of my website is beautiful. I feel I am receiving more than what I am paying for. But what I love most, is that Jass and his team are not just doing their job, you know, they are really engaged and truly have a heart for their clients. I know I will have a lifetime relationship working with Webguruz Technologies. Thank you for your outstanding work!!!”",
  },
  {
    image: reviewthree,
    name: "Jakob R.",
    title: "Cosmic Appreal",
    text: "“The WebGuruz team has designed and developed our HS website. We launched on time, according to the project plan. All requests (like changes and fixes) have been answered and implemented within two business days. Many thanks for the great work!”",
  },
  {
    image: reviewsev,
    name: "Leo V.",
    title: "Pro Tech",
    text: "“Great people to work with! I would highly recommend them for Hubspot related tasks. It was a wonderful experience working with Jaswinder and his team and would like to continue our partnership.”",
  },
  {
    image: reviewsix,
    name: "Zach G.",
    title: "Censo",
    text: "“Great experience with WebGuruz team on our new website build. Responsive and able to do everything that we needed them to do. Very satisfied and will work with them again.”",
  },
  {
    image: reviewfive,
    name: "Amaia D.",
    title: "Better Code",
    text: "WebGuruz was the perfect fit for the interim role we needed to fill while we looked for our permanent employee. They were very professional and trained quickly for immediate execution of our needs.”",
  },
];

function TestReview() {
  return (
    <section className="testmonial-review py-5 inner-page">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="testimonial-heading text-center mb-5 heading-main">
              <span className="text-black uppercase">Testimonial</span>
              <h2>
              What They Says <strong>About Us</strong>
              </h2>
              <p>
              Team us with us Today for an unfogettable Service experience
              </p>
            </div>
          </div>
        </div>
        <div className="row review-row text-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-lg-4 col-md-6 show">
              <div className="testimonial-card">
                <div className="testimonial-img">
                  <Image src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="testimonial-text text-center">
                  <h4 className="pt-3 m-0 name">{testimonial.name}</h4>
                  <span className="title">{testimonial.title}</span>
                  <p className="my-4">{testimonial.text}</p>
                </div>
                <div className="review-icon">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <i key={i} className="fa fa-star"></i>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestReview;
