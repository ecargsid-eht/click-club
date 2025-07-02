import {motion} from "motion/react";
function DirectorsDesk() {
  return (
      <>
          <motion.div className="row mx-auto justify-content-between align-items-center shadow p-3 border border-1 rounded-4 g-2 g-md-0" style={{ borderColor: '#f8f8f8' }} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="col-md-7 order-2 order-md-1">
                 <h3 className="text-dark fw-bold m-0 px-4">Dr. N.V. Ramana Rao</h3>
                  <p className="fs-5 m-0 text-secondary lh-lg fw-light p-4">
                      Industry and Institute collaborations and linkages are a must for sustainable growth of technology, economy, and human civilisation. NIT Raipur is sincerely working for symbiotic relationship with industries since its inception in 1956. Campus placement process is an important aspect of this relationship and further strengthening this relationship by undertaking a visit to our Institute for the campus placement of our students.
                  </p>
              </div>
              <div className="col-md-4 order-1 order-md-2 text-center">
                  <img src="/publicAssets/campus/director.webp" alt="" className="img-fluid rounded-4" />
              </div>
          </motion.div>
      </>
  )
}

export default DirectorsDesk