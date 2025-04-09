"use client";
import React from "react";
import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";
import { Nav } from "react-bootstrap";
import { seopackages } from "@/utils/03utilHomeTab";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
const OurSeoPackages = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isLoading, setLoading] = useState(false);
  // paypal
  const handlePaypal = (costs) => {
    // Load PayPal SDK script dynamically

    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&components=buttons`;
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Initialize PayPal Buttons
      let isCanceled = false;
      window.paypal
        .Buttons({
          createOrder: async (data, actions) => {
            const response = await fetch("/api/paypal/create-order", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ costs }), // Pass costs properly
            });

            const { orderID } = await response.json();
            return orderID;
          },
          onApprove: async (data, actions) => {
            isCanceled = false;
            const response = await fetch("/api/paypal/capture-order", {
              method: "POST",
              body: JSON.stringify({ orderID: data.orderID }),
              headers: {
                "Content-Type": "application/json",
              },
            });

            const result = await response.json();
            if (response.ok && result.success) {
              router.push("/payment-recieved");
            } else {
              console.error("Payment capture failed:", result.error);
            }
          },
          onCancel: (data) => {
            isCanceled = true;
            console.log("Payment was cancelled by the user:");
          },
          onError: (err) => {
            if (isCanceled) {
              console.log("Error triggered by user cancelation. Ignoring.");
              return; // Ignore errors triggered by cancelation
            }
            console.error("PayPal Error: ", err);
          },
        })
        .render("#paypal-button-container"); // Specify the container for the PayPal button
    };

    return () => {
      document.body.removeChild(script);
    };
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  //razorpay
  const handlePayment = async () => {
    if (isLoading) return; // Prevent further calls if already loading
    setLoading(true);

    try {
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: 30000 }),
      });

      if (!response.ok) {
        if (response.status === 429) {
          alert("Too many requests. Please try again later.");
        } else {
          alert("Order creation failed!");
        }
        throw new Error("Payment API failed");
      }

      const data = await response.json();

      if (!data.orderId) {
        alert("Order creation failed");
        setLoading(false);
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: data.currency,
        name: "Webguruz Technologies",
        description: "Payment for Order",
        order_id: data.orderId,
        handler: function (response) {
          router.push("/payment-recieved");
        },
        prefill: {
          name: " ",
          contact: " ",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
      setShowModal(false);
    } catch (error) {
      console.error("Error during payment handling:", error);
    } finally {
      setLoading(false);
    }
  };

  // for country change
  const handleCountryChange = (event) => {
    const country = event.target.value;
    setSelectedCountry(country);

    const paypalButtonContainer = document.getElementById(
      "paypal-button-container"
    );

    if (country === "India") {
      if (paypalButtonContainer) {
        paypalButtonContainer.innerHTML = "Processing...";
      }
      handlePayment();
    } else {
      handlePaypal("300");
    }
  };

  const handleOpen = () => {
    setSelectedCountry("Select");

    setShowModal(!showModal);
  };

  return (
    <section className="webguruz-packages-seo py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-4 text-center heading-main">
            <h2 className="packages-title-seo">
              Our Tailored SEO Packages <span>Starts At $300</span>
            </h2>
          </div>
          <div className="col-md-12">
            <Tab.Container defaultActiveKey="experts" id="uncontrolled-example">
              <div className="row">
                <div className="col-md-4 tab-sidebar">
                  <Nav variant="pills" className="flex-column">
                    {seopackages.map((tab) => (
                      <Nav.Item key={tab.eventKey}>
                        <Nav.Link eventKey={tab.eventKey}>{tab.title}</Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </div>

                <div className="col-md-8 package-phases">
                  <Tab.Content>
                    <div className="seo-package-headings">
                      <h4 className="packages-title-seo">
                        Deliverables <span>PLAN</span>
                      </h4>
                    </div>
                    <div className="packages-heading-two">
                      <h5>On Page & OFF Page SEO Optimization</h5>
                    </div>
                    {seopackages.map((tab) => (
                      <Tab.Pane key={tab.eventKey} eventKey={tab.eventKey}>
                        <div
                          className="packages-content"
                          dangerouslySetInnerHTML={{ __html: tab.content }}
                        />
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                  <div className="col-sm-12 col-xs-12 text-center">
                    <button
                      type="button "
                      className="purchase-btn explore-btn"
                      onClick={handleOpen}
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      Buy Package
                    </button>
                    {showModal && (
                      <>
                        <div
                          className="modal show d-block get-quote-form"
                          id="staticBackdrop"
                          data-bs-backdrop="static"
                          data-bs-keyboard="false"
                          tabIndex="-1"
                          aria-labelledby="staticBackdropLabel"
                        >
                          <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                              <button
                                type="button"
                                className="btn-close"
                                onClick={() => setShowModal(false)}
                              ></button>
                              <div className="modal-body">
                                <div className="items">
                                  <label htmlFor="country-select">
                                    Select Your Country Before Payment
                                  </label>

                                  <select
                                    id="country-select"
                                    className="form-control"
                                    value={selectedCountry}
                                    onChange={handleCountryChange}
                                  >
                                    <option value="">--Select--</option>
                                    <option value="Albania">Albania</option>
                                    <option value="Andorra">Andorra</option>
                                    <option value="Anguilla">Anguilla</option>
                                    <option value="Antigua and Barbuda">
                                      Antigua and Barbuda
                                    </option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Aruba">Aruba</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Austria">Austria</option>
                                    <option value="Bahamas">Bahamas</option>
                                    <option value="Barbados">Barbados</option>
                                    <option value="Belarus">Belarus</option>
                                    <option value="Belgium">Belgium</option>
                                    <option value="Belize">Belize</option>
                                    <option value="Bosnia and Herzegovina">
                                      Bosnia and Herzegovina
                                    </option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="British Virgin Islands">
                                      British Virgin Islands
                                    </option>
                                    <option value="Bulgaria">Bulgaria</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Cayman Islands">
                                      Cayman Islands
                                    </option>
                                    <option value="Chile">Chile</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Costa Rica">
                                      Costa Rica
                                    </option>
                                    <option value="Croatia">Croatia</option>
                                    <option value="Cuba">Cuba</option>
                                    <option value="Curacao">Curacao</option>
                                    <option value="Cyprus">Cyprus</option>
                                    <option value="Czech Republic">
                                      Czech Republic
                                    </option>
                                    <option value="Denmark">Denmark</option>
                                    <option value="Dominica">Dominica</option>
                                    <option value="Dominican Republic">
                                      Dominican Republic
                                    </option>
                                    <option value="Ecuador">Ecuador</option>
                                    <option value="El Salvador">
                                      El Salvador
                                    </option>
                                    <option value="Estonia">Estonia</option>
                                    <option value="Falkland Islands">
                                      Falkland Islands
                                    </option>
                                    <option value="Finland">Finland</option>
                                    <option value="France">France</option>
                                    <option value="Germany">Germany</option>
                                    <option value="Greece">Greece</option>
                                    <option value="Grenada">Grenada</option>
                                    <option value="Guadeloupe">
                                      Guadeloupe
                                    </option>
                                    <option value="Guatemala">Guatemala</option>
                                    <option value="Guyana">Guyana</option>
                                    <option value="Haiti">Haiti</option>
                                    <option value="Holy See">Holy See</option>
                                    <option value="Honduras">Honduras</option>
                                    <option value="Hungary">Hungary</option>
                                    <option value="Iceland">Iceland</option>
                                    <option value="India">India</option>
                                    <option value="Ireland">Ireland</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Jamaica">Jamaica</option>
                                    <option value="Kuwait">Kuwait</option>
                                    <option value="Latvia">Latvia</option>
                                    <option value="Liechtenstein">
                                      Liechtenstein
                                    </option>
                                    <option value="Lithuania">Lithuania</option>
                                    <option value="Luxembourg">
                                      Luxembourg
                                    </option>
                                    <option value="Malta">Malta</option>
                                    <option value="Martinique">
                                      Martinique
                                    </option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Moldova">Moldova</option>
                                    <option value="Monaco">Monaco</option>
                                    <option value="Montenegro">
                                      Montenegro
                                    </option>
                                    <option value="Montserrat">
                                      Montserrat
                                    </option>
                                    <option value="Netherlands">
                                      Netherlands
                                    </option>
                                    <option value="Nicaragua">Nicaragua</option>
                                    <option value="North Macedonia">
                                      North Macedonia
                                    </option>
                                    <option value="Panama">Panama</option>
                                    <option value="Paraguay">Paraguay</option>
                                    <option value="Peru">Peru</option>
                                    <option value="Poland">Poland</option>
                                    <option value="Portugal">Portugal</option>
                                    <option value="Puerto Rico">
                                      Puerto Rico
                                    </option>
                                    <option value="Romania">Romania</option>
                                    <option value="Russia">Russia</option>
                                    <option value="Saint Barthelemy">
                                      Saint Barthelemy
                                    </option>
                                    <option value="Saint Martin">
                                      Saint Martin
                                    </option>
                                    <option value="Saint Peirre and Miquelon">
                                      Saint Peirre and Miquelon
                                    </option>
                                    <option value="San Marino">
                                      San Marino
                                    </option>
                                    <option value="Serbia">Serbia</option>
                                    <option value="Sint Maarten">
                                      Sint Maarten
                                    </option>
                                    <option value="Slovakia">Slovakia</option>
                                    <option value="Slovenia">Slovenia</option>
                                    <option value="Spain">Spain</option>
                                    <option value="Suriname">Suriname</option>
                                    <option value="Sweden">Sweden</option>
                                    <option value="Switzerland">
                                      Switzerland
                                    </option>
                                    <option value="Turks and Caicos Islands">
                                      Turks and Caicos Islands
                                    </option>
                                    <option value="UK">UK</option>
                                    <option value="Ukraine">Ukraine</option>
                                    <option value="Uruguay">Uruguay</option>
                                    <option value="USA">USA</option>
                                    <option value="Venezuela">Venezuela</option>
                                  </select>
                                </div>

                                <br />
                                <div id="paypal-button-container"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </Tab.Container>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSeoPackages;
