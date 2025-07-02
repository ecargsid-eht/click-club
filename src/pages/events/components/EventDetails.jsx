/* eslint-disable react/prop-types */
import LocationIcon from '../../../assets/location.svg?react';
import CalendarIcon from '../../../assets/calendar.svg?react';

function EventDetails({ event }) {

    return (
        <div className="modal" id="eventModal">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content border-0 shadow-lg">
                    <div className="modal-body" >

                        {/* <div className="modal-header bg-transparent border-0"> */}
                        {/* </div> */}
                        <div className="row g-3 ">
                            <img src={event?.image} className="col-lg-6 img-fluid rounded-3 h-50" alt="" />
                            {/* <div className="col-lg-6 p-0 shadow rounded-3" style={{backgroundColor:'#f4f4f4'}}>
                        </div> */}
                            <div className="col-lg-6 align-self-start p-2 mx-h-100 overflow-auto">
                                <button
                                    type="button"
                                    className="btn-close bg-light rounded-circle float-end"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                                <p className="fw-bold fs-3 text-black mb-2 lh-sm">{event?.title}</p>
                                <p className="fw-light fs-6 mb-2 text-secondary">{event?.brief}</p>
                                <div className="mb-2 rounded-3 bg-primary-subtle border shadow border-primary">
                                    <div className="p-3  d-flex align-items-center gap-3">
                                        <div className="badge badge-success text-bg-primary rounded-4 shadow" style={{padding:8}}>
                                            <CalendarIcon height={25} width={25} className="" />
                                        </div>
                                        <div>
                                            <small className="text-primary-emphasis fw-semibold ">DATE</small>
                                            <p className="fw-bold m-0 fs-4 text-primary-emphasis p-0"><ShortDate date={event?.startDate} /></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-2 rounded-3 bg-success-subtle border shadow border-success">
                                    <div className="p-3 d-flex align-items-center gap-3">
                                        <div className="badge badge-success text-bg-success p-2 rounded-4 shadow">
                                            <LocationIcon height={25} width={25} className="" />
                                        </div>
                                        <div className='flex-1'>
                                            <small className="text-success-emphasis fw-semibold ">VENUE</small>
                                            <p className="fw-bold m-0 fs-4 text-success-emphasis">{event?.venue}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                                <p className="ps-2 mt-4 fs-4 fw-bold text-black" style={{ borderLeft: '5px solid #ff6633' }}>
                                    About this Event
                                </p>
                                <p className={`mb-0 fs-6 fw-light h-50 ${!event?.description ? ' text-danger' : 'text-secondary'}`} style={{ overflowY: 'auto', maxHeight:'310px' }}>
                                    {event?.description || "No description available for this event."}
                                </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ShortDate({ date }) {
    if (date !== undefined) {
        const formattedDate = new Intl.DateTimeFormat(undefined, {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
            weekday: 'short'
        }).format(new Date(date));

        return formattedDate;
    }
    return null;
}

export default EventDetails