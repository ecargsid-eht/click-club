import { motion } from "motion/react";
import PropTypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from "react";

function CharmingTabs({activeTab, setActiveTab}) {
    const tabs = [
        { id: "about", label: "About NIT Raipur" },
        { id: "director", label: "From Director's Desk" },
        { id: "club", label: "Club and Campus" },
      ];
    const tabRefs = useRef([]);

    const activeTabIndex = tabs.findIndex((tab) => tab.id === activeTab);
    const [activeTabElement, setActiveTabElement] = useState(tabRefs.current[activeTabIndex]);

    useLayoutEffect(() => {
      setActiveTabElement(tabRefs.current[activeTabIndex]);
      if (activeTabElement) {
            activeTabElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
    }, [activeTabIndex, tabRefs]);
  return (
    <div
          className="charming-div d-flex w-100 p-2 rounded-4 mx-auto shadow-sm text-secondary justify-content-between align-items-center position-relative"
          style={{ backgroundColor: "#eee", }}
    >
    <motion.div
        className="position-absolute charming-btn rounded-3 shadow"
        style={{
            height: "80%", // Adjust height to fit buttons
            width: `${100 / tabs.length}%`,
            top: "10%", // Center the background vertically
            backgroundColor:'#FF6633'
        }}
        initial={{ x: 0 }}
              animate={{
                  width: activeTabElement ? activeTabElement.offsetWidth : 170,
                  x: activeTabElement ? activeTabElement.offsetLeft-10 : 0,
              }}
              transition={{ duration: 0.3 }}
    />
          {/* Tab buttons */}
          {tabs.map((tab, index) => (
        <button
          key={tab.id}
          ref={(el) => (tabRefs.current[index] = el)}
          className={`btn charming-btn p-3 fw-semibold m-0 text-secondary rounded-3 position-relative ${
            activeTab === tab.id ? "text-white" : ""
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

CharmingTabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired
};

export default CharmingTabs;
