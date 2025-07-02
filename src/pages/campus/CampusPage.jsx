import "./css/CampusPage.css";
import { useLayoutEffect, useState, lazy, Suspense } from "react";
const CharmingTabs = lazy(() => import("./components/CharmingTabs"));
const AboutNIT = lazy(() => import("./components/AboutNIT"));
const DirectorsDesk = lazy(() => import("./components/DirectorsDesk"));
const ClubandCampus = lazy(() => import("./components/ClubandCampus"));

function CampusPage() {
  useLayoutEffect(() => {
    document.title = "Campus | Click Club";
  }, []);

  const [activeTab, setActiveTab] = useState("about");
  return (
    <>
      <div className="text-center position-relative">
        <img
          src={"/publicAssets/campusBanner.webp"}
          className="campusBanner col-lg-12 "
          alt=""
        />
        <p className="banner-text fs-3 fw-bold position-absolute top-50 translate-middle start-50 px-1">
          NATIONAL INSTITUTE OF TECHNOLOGY, RAIPUR
        </p>
      </div>
      <div style={{ height: "3vh" }}></div>
      <Suspense fallback={<>...</>}>
        <CharmingTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </Suspense>

      <div className="container my-5">
        <Suspense fallback={<>...</>}>
        {activeTab === "about" ? (
          <AboutNIT />
        ) : activeTab === "director" ? (
          <DirectorsDesk />
        ) : (
          <ClubandCampus />
        )}
        </Suspense>
      </div>
    </>
  );
}

export default CampusPage;
