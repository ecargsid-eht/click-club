import {motion} from "motion/react";

function AboutNIT() {
  return (
    <>
        <motion.div className="row mx-auto align-items-center shadow p-3 border border-1 rounded-4" style={{borderColor:'#f8f8f8'}} initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration:0.5}}>
            <div className="col-md-6">
                <p className="fs-5 m-0 text-secondary lh-lg fw-light p-4">
                      National Institute of Technology Raipur (erstwhile Government Engineering College Raipur), situated in the capital of the state of Chhattisgarh, is serving the cause of technical education for more than six decades. 
                      <br />
                      <br />
                      This institute has unique privilege of being blessed by the first President of India Dr. Rajendra Prasad in the foundation laying ceremony on 14th September 1956, and again by the first Prime Minister of India Pt. Jawahar Lal Nehru, inaugurating the institute building on 14th March 1963. To harness the ample mineral resources in the region and to fuel the growth of the nation, the foundation stone of National Institute of Technology Raipur (then Government Engineering College, Raipur), was laid by the first President of India, Dr. Rajendra Prasad on 14th September 1956 as Govt College of Mining and Metallurgy. The institute was then inaugurated by the first Prime minister of India, Jawaharlal Nehru on 14th March 1963.
                </p>
            </div>
            <div className="col-md-6">
                <img src="/publicAssets/campus/campus.webp" alt="" className="img-fluid rounded-4" style={{aspectRatio:'4/3'}} />
            </div>
        </motion.div>
    </>
  )
}

export default AboutNIT