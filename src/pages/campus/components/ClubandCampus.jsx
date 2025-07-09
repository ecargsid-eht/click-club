import { motion } from "motion/react";
function ClubandCampus() {
  return (
    <>
      <motion.div
        className="row mx-auto align-items-start shadow p-3 border border-1 rounded-4"
        style={{ borderColor: "#f8f8f8" }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className=" m-0 text-dark mb-2 text-center fw-bold">Campus Tour</h3>
        <p
          className=" m-0 text-secondary mb-4 text-center fw-light"
          style={{ fontSize: "1.1rem" }}
        >
          Explore our beautiful campus through this interactive map walkthrough
        </p>
        <div className="col-md-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1665514026802!6m8!1m7!1sCAoSLEFGMVFpcE9saGp4VmVEdFc4bmFpVkV2b1NxUTBHM1BoUFgySzZfUjNOaGpS!2m2!1d21.24940459572849!2d81.60443614086726!3f35.79!4f8.310000000000002!5f0.4000000000000002"
            width="100%"
            allowFullScreen=""
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="rounded-4"
            height={500}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="col-md-4">
          <h5 className="m-0 text-dark mb-4 fw-bold">Campus Highlights</h5>
          <div className="bg-primary-subtle p-3 rounded-3 mb-2">
            <p className="fw-semibold text-primary m-0">Academic Complex</p>
            <span className="small text-primary">
              Modern classrooms and laboratories.
            </span>
          </div>
          <div className="bg-success-subtle p-3 rounded-3 mb-2">
            <p className="fw-semibold text-success m-0">Central Library</p>
            <span className="small text-success">
              A vast collection of books and study spaces.
            </span>
          </div>
          <div className="bg-purple-subtle p-3 rounded-3 mb-2">
            <p className="text-purple fw-semibold m-0">Sports Complex</p>
            <span className="text-purple small">
              Modern sports facilities and fitness centers.
            </span>
          </div>
          <div className="bg-warning-subtle p-3 rounded-3 mb-2">
            <p className="fw-semibold text-warning m-0">Cafeteria</p>
            <span className="small text-warning">
              A variety of food options and study areas.
            </span>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default ClubandCampus;
