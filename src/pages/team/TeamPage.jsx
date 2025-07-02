import React from "react";
import { useLayoutEffect } from "react"
const teamsArr = ['mentors','heads1','heads2','heads3','cores1','cores2','exec1','exec2','interns'];
function TeamPage() {
      useLayoutEffect(() => {
        document.title = "Team | Click Club"
      },[])
    return (
        <div className="container mb-2 mt-4">
            <p className="text-center display-5 fw-bold text-black mb-1">Our Team</p>
            <p className="text-secondary text-center fw-light">
                Let us recognize the dedicated faculty members of <span style={{color:"#ff6633"}}>Click Club</span>, whose invaluable guidance and support have been instrumental in shaping our journey. Their expertise continues to inspire and empower us to achieve new heights.
            </p>
            <div className="row mx-auto w-75 mt-5 g-3">
                <div className="col-md-4">
                    <div className="card shadow-sm rounded-4 border border-secondary-subtle">
                        <img className="card-img-top img-fluid rounded-top-4" style={{aspectRatio:'3/3'}} src="/publicAssets/team/ankur_sir.jpg" />
                        <div className="card-body">
                            <p className="fs-4 fw-semibold text-black mb-1">Dr. Ankur Gupta</p>
                            <p className="text-secondary mb-1 fw-light fs-5">Professor, Dept. of Mechanical Engineering</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow-sm rounded-4 border border-secondary-subtle">
                        <img className="card-img-top img-fluid rounded-top-4" style={{aspectRatio:'3/3'}} src="/publicAssets/team/sanyal_sir.webp" />
                        <div className="card-body">
                            <p className="fs-4 fw-semibold text-black mb-1">Dr. S Sanyal</p>
                            <p className="text-secondary mb-1 fw-light fs-5">Professor, Dept. of Mechanical Engineering</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow-sm rounded-4 border border-secondary-subtle">
                        <img className="card-img-top img-fluid rounded-top-4" style={{aspectRatio:'3/3'}} src="/publicAssets/team/poptani_sir.jpg" />
                        <div className="card-body">
                            <p className="fs-4 fw-semibold text-black mb-1">Dr. Himanshu Poptani</p>
                            <p className="text-secondary mb-1 fw-light fs-5">Professor, Dept. of Architecture & Planning</p>
                        </div>
                    </div>
                </div>
            </div>
            {teamsArr.map((team,key) => (
                <React.Fragment key={key}>
                    <div style={{height:'4vh'}}></div>
                    <img src={`/publicAssets/team/${team}.jpg`} alt="" className="img-fluid rounded-3 mx-auto w-100 shadow" />
                </React.Fragment>
            ))}
            <div style={{height:'4vh'}}></div>
            <div className="mt-3 mx-auto">
                <p className="fs-3 fw-bold text-black ps-2" style={{borderLeft:"0.4rem solid #ff6633"}}>About our Guides</p>
                <p className="fs-5 lh-lg text-secondary fw-light p-4 rounded-5 shadow mx-auto" style={{backgroundColor:'#f8f8f8', width:'90%'}}>
                    Dr. S. Sanyal, the visionary founder of Click Club, serves as a guiding mentor who has been instrumental in nurturing the creative and innovative spirit that defines the club. His invaluable guidance, coupled with his unwavering commitment, has consistently encouraged every member to push their boundaries, think outside the box, and grow not only as photographers but also as storytellers. His vision has been the driving force behind the club’s continued success, fostering an environment where creativity thrives and every idea is valued.
                    <br />
                    <br />
                    Supporting him in this journey are Dr. Ankur Gupta and Dr. Himanshu Poptani, who bring their unique perspectives and dynamic contributions to the club. With their unwavering support and innovative ideas, they have been pivotal in guiding the club through new challenges, while fostering a culture of collaboration and creativity. As dedicated mentors, they have played a crucial role in brainstorming unique initiatives, inspiring the members, and helping the club evolve and flourish. Their mentorship has been a cornerstone, ensuring that Click Club remains a vibrant, dynamic, and inclusive community where photographers and creators can express themselves freely and continuously grow.
                    <br />
                    <br />
                    Together, these faculty mentors have shaped Click Club into what it is today—an energetic community of passionate photographers, innovators, and storytellers, all united by their shared love for the art of photography.
                    <span className="d-inline-block mx-auto fs-light">I click. </span>
                </p>
            </div>
        </div>
    )
}

export default TeamPage