"use client";
import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const KeapTable = () => {
   const [showModal, setShowModal] = useState(false);
    const [selectedCost, setSelectedCost] = useState(null);
    const [myUrl, setMyUrl] = useState("");
    const [myemail, setMyemail] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("");
    const [countryModal, setCountryModal] = useState(false);
    const [isLoading, setLoading] = useState(false);

     useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);
    
      const handleCloseModal = () => {
        setShowModal(false);
        // Clean up any PayPal elements when closing
        const container = document.getElementById("paypal-button-container");
        if (container) {
          container.innerHTML = "";
        }
      };
    
      // razorpay payment integration
    
      const handlePayment = async () => {
        if (isLoading) return; // Prevent further calls if already loading
        setLoading(true);
    
        try {
          const response = await fetch("/api/payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ amount: selectedCost * 80 , email: myemail , url: myUrl}),
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
          console.log('my data is >>>>',data);
    
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
    
      const handleOpen = (priceVal) => {
        setSelectedCountry("Select");
        setSelectedCost(priceVal);
        setCountryModal(!countryModal);
      };
    
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
    
          setShowModal(true);
          setCountryModal(false);
        } else {
          setShowModal(true);
          setCountryModal(false);
        }
      };
    
      const handleBtnClick = () => {
        if (selectedCountry === "India") {
          handlePayment();
        } else {
          initializePaypal();
        }
      };
    
      const initializePaypal = () => {
        // Clean any existing buttons first
        const container = document.getElementById("paypal-button-container");
        if (container) {
          container.innerHTML = "";
        }
    
        // Load PayPal SDK script dynamically
        const script = document.createElement("script");
        script.src = `https://www.sandbox.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&components=buttons`;
        script.async = true;
    
        // Remove any existing PayPal scripts to avoid conflicts
        const existingScript = document.querySelector(
          'script[src*="sandbox.paypal.com/sdk/js"]'
        );
        if (existingScript) {
          document.body.removeChild(existingScript);
        }
    
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
                  body: JSON.stringify({
                    costs: selectedCost,
                    email: myemail,
                    url: myUrl,
                  }), 
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
    
                if (result) {
                  handleCloseModal(); // Close the modal after successful payment
    
                  router.push("/payment-recieved");
                } else {
                  console.error("Payment capture failed:", result.error);
                }
              },
              onCancel: (data) => {
                isCanceled = true;
                console.log("Payment was cancelled by the user:");
                // You might want to keep the modal open here
              },
              onError: (err) => {
                if (isCanceled) {
                  console.log("Error triggered by user cancelation. Ignoring.");
                  return; // Ignore errors triggered by cancelation
                }
                console.error("PayPal Error: ", err);
              },
            })
            .render("#paypal-button-container"); // Render in the container inside modal
        };
    
        return () => {
          if (document.body.contains(script)) {
            document.body.removeChild(script);
          }
        };
      };
    
  
  return (
    <section className="wordpress-maintenance-package py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-0 mx-auto col-12 heading-main text-center mb-4 mb-5">
            <h2 className="mb-2">
              Our <span>Keap Maintenance Plans</span>
            </h2>
            <p>
              We understand that every business has unique needs, which is why
              we offer flexible maintenance plans designed to fit your specific
              requirements and budget. From basic support packages to
              comprehensive managed services, we have options to ensure your
              Keap system remains reliable and effective.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table table-bordered  text-center">
                <thead className="thead-dark">
                  <tr>
                    <th className="first-th">
                      <p className="first-paragraph">
                        Feature <br /> <span>Cost</span>
                      </p>
                    </th>
                    <th>
                      <p>
                        Economy <br /> <span>$55 Monthly</span>
                      </p>
                    </th>
                    <th>
                      <p>
                        Business <br /> <span>$99 Monthly</span>
                      </p>
                    </th>
                    <th>
                      <p>
                        Enterprise <br /> <span>$299 Monthly</span>
                      </p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Backups", "Weekly", "Daily", "Daily"],
                    ["Cloud Backups", "Monthly", "Fortnightly", "Daily"],
                    ["Core Updates", "Monthly", "Fortnightly", "Weekly"],
                    ["Plugin Updates", "Monthly", "Fortnightly", "Weekly"],
                    [
                      "Discount on WordPress Support*",
                      "10% (valued at $11pm)",
                      "20% (valued at $33pm)",
                      "30% (valued at $33pm)",
                    ],
                    ["Free Business Hosting", "Yes", "Yes", "Yes"],
                    ["Theme Updates", "Yes", "Yes", "Yes"],
                    ["Maintenance Reports", "Yes", "Yes", "Yes"],
                    ["Optimisation", "No", "No", "No"],
                    ["Uptime Monitoring", "No", "No", "No"],
                    ["Security Scanning", "No", "No", "No"],
                    ["SEO Rank Tracking", "No", "No", "No"],
                    ["Performance Benchmarks", "No", "No", "No"],
                    ["Licence Management", "No", "No", "No"],
                    ["Automatic Updates for Latest Version", "No", "No", "No"],
                    ["Content Updation", "No", "No", "No"],
                    ["24x7 Support", "No", "No", "No"],
                  ].map(([feature, economy, business, enterprise], index) => (
                    <tr key={index}>
                      <td>{feature}</td>
                      <td>{economy}</td>
                      <td>{business}</td>
                      <td>{enterprise}</td>
                    </tr>
                  ))}
                  <tr>
                    <td>Purchase</td>
                    <td>
                      <button onClick={() => handleOpen("55")} className="btn btn-primary">Purchase</button>
                    </td>
                    <td>
                      <button onClick={() => handleOpen("99")} className="btn btn-primary">Purchase</button>
                    </td>
                    <td>
                      <button  onClick={() => handleOpen("299")} className="btn btn-primary">Purchase</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {countryModal && (
        <>
          <div
            className="modal show d-block get-quote-form purchase-form"
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
                  onClick={() => setCountryModal(false)}
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
                      <option value="Cayman Islands">Cayman Islands</option>
                      <option value="Chile">Chile</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Costa Rica">Costa Rica</option>
                      <option value="Croatia">Croatia</option>
                      <option value="Cuba">Cuba</option>
                      <option value="Curacao">Curacao</option>
                      <option value="Cyprus">Cyprus</option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Denmark">Denmark</option>
                      <option value="Dominica">Dominica</option>
                      <option value="Dominican Republic">
                        Dominican Republic
                      </option>
                      <option value="Ecuador">Ecuador</option>
                      <option value="El Salvador">El Salvador</option>
                      <option value="Estonia">Estonia</option>
                      <option value="Falkland Islands">Falkland Islands</option>
                      <option value="Finland">Finland</option>
                      <option value="France">France</option>
                      <option value="Germany">Germany</option>
                      <option value="Greece">Greece</option>
                      <option value="Grenada">Grenada</option>
                      <option value="Guadeloupe">Guadeloupe</option>
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
                      <option value="Liechtenstein">Liechtenstein</option>
                      <option value="Lithuania">Lithuania</option>
                      <option value="Luxembourg">Luxembourg</option>
                      <option value="Malta">Malta</option>
                      <option value="Martinique">Martinique</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Moldova">Moldova</option>
                      <option value="Monaco">Monaco</option>
                      <option value="Montenegro">Montenegro</option>
                      <option value="Montserrat">Montserrat</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="Nicaragua">Nicaragua</option>
                      <option value="North Macedonia">North Macedonia</option>
                      <option value="Panama">Panama</option>
                      <option value="Paraguay">Paraguay</option>
                      <option value="Peru">Peru</option>
                      <option value="Poland">Poland</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Puerto Rico">Puerto Rico</option>
                      <option value="Romania">Romania</option>
                      <option value="Russia">Russia</option>
                      <option value="Saint Barthelemy">Saint Barthelemy</option>
                      <option value="Saint Martin">Saint Martin</option>
                      <option value="Saint Peirre and Miquelon">
                        Saint Peirre and Miquelon
                      </option>
                      <option value="San Marino">San Marino</option>
                      <option value="Serbia">Serbia</option>
                      <option value="Sint Maarten">Sint Maarten</option>
                      <option value="Slovakia">Slovakia</option>
                      <option value="Slovenia">Slovenia</option>
                      <option value="Spain">Spain</option>
                      <option value="Suriname">Suriname</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Switzerland">Switzerland</option>
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

      {/* Payment Modal */}
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        // onEntered={initializePaypal}
        centered
        dialogClassName="wordpress-payment-modal"
        contentClassName="wordpress-payment-content"
      >
        <Modal.Header closeButton className="wordpress-payment-header">
          <Modal.Title className="wordpress-payment-title">
            Complete Your Purchase
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="wordpress-payment-body">
          <p className="wordpress-payment-text">
            Please complete your payment of ${selectedCost}:
          </p>

          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                value={myemail}
                placeholder="Enter Email ID"
                onChange={(e) => setMyemail(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                value={myUrl}
                placeholder="Enter Website URL"
                onChange={(e) => setMyUrl(e.target.value)}
                autoFocus
              />
            </Form.Group>
            <Button
              variant="primary"
              onClick={() => handleBtnClick(myUrl, myemail)}
              className="wordpress-payment-cancel-btn"
            >
              Submit
            </Button>
          </Form>

          <div
            id="paypal-button-container"
            className="wordpress-paypal-container mt-3"
          ></div>
        </Modal.Body>
        {/* <Modal.Footer className="wordpress-payment-footer">
          <Button variant="secondary" onClick={handleCloseModal} className="wordpress-payment-cancel-btn">
            Cancel
          </Button>
        </Modal.Footer> */}
      </Modal>
    </section>
  );
};

export default KeapTable;
