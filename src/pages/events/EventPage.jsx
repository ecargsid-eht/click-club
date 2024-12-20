import { events } from "../../dataObj"
import './css/EventPage.css'
import Venue from '../../assets/venue.svg?react'
import DateTime from '../../assets/dateTime.svg?react'
function EventPage() {
    return (
        <div className="container mb-2">
            <div className="text-center">
                <p className="text-black mt-4 fw-bold display-6">Upcoming Events</p>
                <p className="text-secondary small fw-light">
                    Come and join us in the events of Click Club to enrich your experience with the photographs that withold the power to change the world.
                </p>
            </div>
            <div className="mt-5 row">
                {
                    events.map((e) => {
                        if(e.startDate > Date.now()){

                            return (
                                <div key={e.id} className="col-lg-3 col-md-4">
                                    <div className="card position-relative eventCard rounded-3 shadow-sm" style={{ borderColor: '#eee' }}>
                                        <img className="card-img-top rounded-top-3" src={e.image} alt="Event Image" />
                                        <div className="card-body">
                                            <p className="text-black fw-bold fs-4 mb-2">{e.title}</p>
                                            <p className="small fw-light text-secondary mb-2">{e.brief}</p>
                                            <button className="btn muiPurpleOutline border-0 rounded-3 btn-sm float-end stretched-link fw-semibold">
                                                Check Details
                                            </button>
                                        </div>
                                        <div className="position-absolute" style={{ top: '0.5rem', left: '0.5rem', right: '0.5rem' }}>
                                            <div className="badge rounded-pill d-flex align-items-center gap-2 mb-1" style={{ backgroundColor: "#7f00ff", width: 'fit-content' }}>
                                                <div className="col-1">
                                                    <Venue height={15} width={15} />
                                                </div>
                                                <div className="col-10">
                                                    <p className=" fw-bold text-white my-0 text-overflow-ellipsis text-start" style={{ whiteSpace: 'wrap' }}>{e.venue}</p>
                                                </div>
                                            </div>
                                            <div className="badge rounded-pill d-flex align-items-center gap-2" style={{ backgroundColor: "#80ff00", width: 'fit-content' }}>
                                                <div className="col-1">
                                                    <DateTime height={15} width={15} />
                                                </div>
                                                <div className="col-11">
                                                    <p className={`fw-bold text-white my-0 text-overflow-ellipsis text-start ${e.endDate === null && 'ps-1'}`} style={{ whiteSpace: 'wrap' }}>{e.startDate.toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" })} {e.endDate !== null && `- ${e.endDate.toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" }) }`}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    }
                    )
                }
            </div>
            {/* Past Events */}
            <div className="text-center">
                <p className="text-black mt-5 pt-4 fw-bold display-6">Past Events</p>
                <p className="text-secondary small fw-light">
                    Let us take a tour down the memory lane to experience some coolest events conducted by our own Click Club.
                </p>
            </div>
            <div className="mt-5 row">
                {
                    events.map((e) => {
                        if(e.startDate < Date.now()){
                            return (
                                <div key={e.id} className="col-lg-3 col-md-4">
                                    <div className="card position-relative eventCard rounded-3 shadow-sm" style={{ borderColor: '#eee' }}>
                                        <img className="card-img-top rounded-top-3" src={e.image} alt="Event Image" />
                                        <div className="card-body">
                                            <p className="text-black fw-bold fs-4 mb-2">{e.title}</p>
                                            <p className="small fw-light text-secondary mb-2">{e.brief}</p>
                                            <button className="btn muiPurpleOutline border-0 rounded-3 btn-sm float-end stretched-link fw-semibold">
                                                Check Details
                                            </button>
                                        </div>
                                        <div className="position-absolute" style={{ top: '0.5rem', left: '0.5rem', right: '0.5rem' }}>
                                            <div className="badge rounded-pill d-flex align-items-center gap-2 mb-1" style={{ backgroundColor: "#7f00ff", width: 'fit-content' }}>
                                                <div className="col-1">
                                                    <Venue height={15} width={15} />
                                                </div>
                                                <div className="col-10">
                                                    <p className=" fw-bold text-white my-0 text-overflow-ellipsis text-start" style={{ whiteSpace: 'wrap', flexShrink: 1 }}>{e.venue}</p>
                                                </div>
                                            </div>
                                            <div className="badge rounded-pill d-flex align-items-center gap-2" style={{ backgroundColor: "#ff004d", width: 'fit-content' }}>
                                                <div className="col-1">
                                                    <DateTime height={15} width={15} />
                                                </div>
                                                <div className="col-11">
                                                    <p className= {`fw-bold text-white my-0 text-overflow-ellipsis text-start ${e.endDate === null && 'ps-1'}`} style={{ whiteSpace: 'wrap' }}>{e.startDate.toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" })}{e.endDate !== null && `- ${e.endDate.toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" }) }`}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    }
                    )
                }
            </div>
        </div>
    )
}

export default EventPage