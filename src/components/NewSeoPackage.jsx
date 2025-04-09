import Link from "next/link";

const NewSeoPackage = () => {
  return (
    <>
      <section className="packages-webguruz py-4 py-md-5">
        <div className="container">
          <div className="row ">
            <div className="col-md-12 col-sm-12 text-center">
              <h2 className="heading-main">Our Packages</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 text-center">
              <table className="more-info-packages">
                <tbody>
                  <tr className="first-package">
                    <th>Package Name</th>
                    <th>Basic</th>
                    <th>Standard</th>
                    <th>Premium</th>
                  </tr>
                  <tr className="second-package">
                    <th>Pricing / Month </th>
                    <th>$199</th>
                    <th>$399</th>
                    <th>$499</th>
                  </tr>
                  <tr>
                    <td>Blog Writing </td>
                    <td>4 (500 words)</td>
                    <td>8 (500 words)</td>
                    <td>16 (500 words)</td>
                  </tr>
                  <tr>
                    <td>Article Writing </td>
                    <td>4 (700 words)</td>
                    <td>8 (700 words)</td>
                    <td>16 (700 words)</td>
                  </tr>
                  <tr>
                    <td>Keyword Descriptions</td>
                    <td>10-12</td>
                    <td>15-20</td>
                    <td>25-30</td>
                  </tr>
                  <tr>
                    <td>Guest Posting </td>
                    <td>1 (700 words)</td>
                    <td>2 (700 words)</td>
                    <td>4 (700 words)</td>
                  </tr>
                  <tr>
                    <td>Press Release </td>
                    <td>1 (400 words)</td>
                    <td>2 (400 words)</td>
                    <td>4 (400 words)</td>
                  </tr>
                  <tr className="second-package">
                    <th>Pricing (One Time) </th>
                    <th>$99</th>
                    <th>$199</th>
                    <th>$249</th>
                  </tr>
                  <tr>
                    <td>Website Content</td>
                    <td>5 page website</td>
                    <td>8-10 page website</td>
                    <td>15 page website</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>(500 words per page)</td>
                    <td>(500 words each page)</td>
                    <td>(500 words each page)</td>
                  </tr>
                  <tr className="second-package">
                    <th>Pricing (One Time) </th>
                    <th>$180</th>
                    <th>$299</th>
                    <th>Customized Plan</th>
                  </tr>
                  <tr>
                    <td>E-commerce Website</td>
                    <td>20 page website</td>
                    <td>50 page website</td>
                    <td>100+ page website</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>(200 words per page)</td>
                    <td>(200 words per page)</td>
                    <td>(200 words per page)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
            <Link href={"/contact-us"} className="explore-btn">Contact Us Today!</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewSeoPackage;
