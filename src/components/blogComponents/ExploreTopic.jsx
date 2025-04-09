
import ExploreList from "./ExploreList";

const ExploreTopic = () => {
  return (
    <>
      <div className="blog-explore-topic">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="blog-page-banner-title text-center">
                Explore More <span> Topics </span>
              </h2>
            </div>
          </div>
          <ExploreList />
        </div>
      </div>
    </>
  );
};

export default ExploreTopic;
