import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Pagination = ({ totalPages, currentPage, author }) => {
  const generatePageLinks = () => {
    const links = [];
    const rangeBefore = 2; // Pages before current page
    const rangeAfter = 2; // Pages after current page

    // Always include the first page
    links.push(
      <li key={1} className={currentPage === 1 ? "active" : ""}>
        <Link href={`/author/${author}/page/1`}>1</Link>
      </li>
    );

    // Add ellipsis if needed before the range
    if (currentPage > rangeBefore + 2) {
      links.push(
        <li key="start-ellipsis" className="ellipsis">
          ...
        </li>
      );
    }

    // Generate links for the pages around the current page
    const startPage = Math.max(2, currentPage - rangeBefore);
    const endPage = Math.min(totalPages - 1, currentPage + rangeAfter);

    for (let i = startPage; i <= endPage; i++) {
      links.push(
        <li key={i} className={i === currentPage ? "active" : ""}>
          <Link href={`/author/${author}/page/${i}`}>{i}</Link>
        </li>
      );
    }

    // Add ellipsis if needed after the range
    if (currentPage < totalPages - rangeAfter - 1) {
      links.push(
        <li key="end-ellipsis" className="ellipsis">
          ...
        </li>
      );
    }

    // Always include the last page
    if (totalPages > 1) {
      links.push(
        <li key={totalPages} className={currentPage === totalPages ? "active" : ""}>
          <Link href={`/author/${author}/page/${totalPages}`}>{totalPages}</Link>
        </li>
      );
    }

    return links;
  };

  return (
    <div className="pagination">
      <ul>
        {/* Previous Page Button */}
        {currentPage > 1 && (
          <li>
            <Link href={`/author/${author}/page/${currentPage - 1}`}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
          </li>
        )}

        {/* Generate Page Links */}
        {generatePageLinks()}

        {/* Next Page Button */}
        {currentPage < totalPages && (
          <li>
            <Link href={`/author/${author}/page/${currentPage + 1}`}>
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
