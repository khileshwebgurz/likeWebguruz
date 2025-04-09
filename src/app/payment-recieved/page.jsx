import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faFacebook,
  faInstagram,
  faYoutube,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const page = () => {
  return (
    <div>
      <section className="thankyou payment-recieved py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 thankyou-content text-center">
              <div className="arow-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="72px" height="72px">
            <g fill="none" stroke="white" strokeWidth="8">

              <path d="M17.417,37.778l9.93,9.909l25.444-25.393" className="check" ></path>
            </g>
          </svg>
              </div>
              <h3>Thank You</h3>
              
              <ul className="d-flex align-items-center justify-content-center pt-3">
                <li className="px-2">
                  <a
                    href="https://www.facebook.com/webguruztechnologies/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our Facebook page"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      height={20}
                      role="image"
                      aria-label="Facebook"
                    />
                  </a>
                </li>
                <li className="px-2">
                  <a
                    href="https://twitter.com/Webguruz"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our Twitter profile"
                  >
                    <FontAwesomeIcon
                      icon={faXTwitter}
                      height={20}
                      role="image"
                      aria-label="Twitter"
                    />
                  </a>
                </li>
                <li className="px-2">
                  <a
                    href="https://www.linkedin.com/company/webguru-technologies-pvt.-ltd./"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our LinkedIn page"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      height={20}
                      role="image"
                      aria-label="LinkedIn"
                    />
                  </a>
                </li>
                <li className="px-2">
                  <a
                    href="https://www.instagram.com/webguruz"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our Instagram page"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      height={20}
                      role="image"
                      aria-label="Instagram"
                    />
                  </a>
                </li>
                <li className="px-2">
                  <a
                    href="https://www.youtube.com/channel/UC-xaX1FJWj40ED-cTm2Lq6w"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our Youtube channel"
                  >
                    <FontAwesomeIcon
                      icon={faYoutube}
                      height={20}
                      role="image"
                      aria-label="Youtube"
                    />
                  </a>
                </li>
                <li className="px-2">
                  <a
                    href="https://in.pinterest.com/webguruz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our Pinterest page"
                  >
                    <FontAwesomeIcon
                      icon={faPinterest}
                      height={20}
                      role="image"
                      aria-label="Pinterest"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
export const metadata = {
  title: "Payment Received - Thank You from WebGuruz",
  description:
    "Thank you for your payment! Your transaction with WebGuruz has been successfully processed. A confirmation email will be sent shortly.",
};