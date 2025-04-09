"use client"
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

// Component that uses useSearchParams
const SearchParamsHandler = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("hiring") === "hiring") {
      const button = document.querySelector(".hiring-btn");
      if (button) {
        button.click();
      }
    }
  }, [searchParams]);

  return null;
};

// Main component with Suspense boundary
const AutoClickButton = () => {
  return (
    <Suspense fallback={null}>
      <SearchParamsHandler />
    </Suspense>
  );
};

export default AutoClickButton;