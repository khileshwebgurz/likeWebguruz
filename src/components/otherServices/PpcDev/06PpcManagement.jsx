import Image from 'next/image';
import bingadsicon from '../../../../public/images/ppcimages/bing-ads-icon.webp';
import googleads from '../../../../public/images/ppcimages/google-ads-icon.webp';
import instagramads from '../../../../public/images/ppcimages/instagram-ads-icon.webp';
import linkedinadsicon from '../../../../public/images/ppcimages/linkedin-ads-icon.webp';
import youtubeadsicon from '../../../../public/images/ppcimages/youtube-ads-icon.webp';
import facebookadsicon from '../../../../public/images/ppcimages/facebook-ads-icon.webp';
const cardData = [
  {
    image: googleads,
    alt: 'Google Ads Icon',
    heading:"Google Ads",
    text: 'Drive targeted traffic and leads through search engine ads that capture intent.',
  },
  {
    image: instagramads,
    alt: 'Instagram Ads Icon',
    heading:"Instagram Ads",
    text: 'Leverage stunning visuals to engage a younger audience and boost brand awareness.',
  },
  {
    image: linkedinadsicon,
    alt: 'LinkedIn',
    heading:"LinkedIn Ads",
    text: 'Connect with professionals and businesses to generate quality B2B leads.',
  },
  {
    image: bingadsicon,
    alt: 'Bing Ads Icon',
    heading:"Bing Ads",
    text: 'Reach a wider audience with ads on Microsoft’s search engine, tapping into a different demographic.',
  },
  {
    image: facebookadsicon,
    alt: 'Facebook Ads Icon',
    heading:"Facebook Ads",
    text: 'Target specific user demographics and interests for highly effective advertising.',
  },
  {
    image: youtubeadsicon,
    alt: 'Youtube Ads Icon',
    heading:"YouTube Ads",
    text: 'Use video content to capture attention and engage viewers on the world’s largest video platform.',
  },
];

const PpcManagement = () => {
  return (
    <>
      <section className="ppcmanage-main py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-4">
              <h2>
              Experts in a Variety of <span>Paid Ads Platforms</span>
              </h2>
              <p>
              Our experienced team is well-versed in several advertising platforms, allowing us to create impactful campaigns across multiple channels. We specialize in:
              </p>
            </div>
          </div>
          <div className="row">
            {cardData.map((card, index) => (
              <div key={index} className="col-sm-4 col-xs-12 mb-4">
                <div className="ppc-card h-100">
                  <div className="image">
                    <Image src={card.image} alt={card.alt} />
                  </div>
                  <h3>{card.heading}</h3>
                  <p>{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PpcManagement;
