

import React from "react";
import Accordion from "./Accordion";
const fetchJobsByCategory = async (categoryId) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_API}/wp-json/wp/v2/wgt-careerjobs?career_job_category=${categoryId}`
  );
  return response.json();
};

const CareerJobs = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_API}/wp-json/wp/v2/career_job_category/?per_page=100` //,
    // { cache: "no-store" } // Ensures fresh data on every request
  );
  const categories = await res.json();

  // Fetch jobs for each category
  const categoriesWithJobs = await Promise.all(
    categories.map(async (category) => {
      if (category.count != 0) {
        const jobs = await fetchJobsByCategory(category.id);
        return { ...category, jobs };
      }
    })
  );
  return (
    <div>
      <section className="career-jobs py-5 new-careers-job" id="applyalljob">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main">
              <h2 className="text-center mb-3 mb-md-5 mt-0 mt-md-3">
                Jobs <strong>With Us</strong>
              </h2>
              <div className="faq-content">
                <Accordion categories={categoriesWithJobs} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerJobs;
