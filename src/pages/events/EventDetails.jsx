/* eslint-disable react/prop-types */




function EventDetails({event}) {
    
  return (
    <div className="modal" id="eventModal">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
            <div className="modal-content">
                <div className="modal-body">
                    <div className="row">
                        <div className="col-lg-5 p-2 shadow-sm rounded-3" style={{backgroundColor:'#f4f4f4'}}>
                            <img src={event?.image} className="img-fluid rounded-3" alt="" />
                        </div>
                        <div className="col-lg-7">
                            <div className="badge rounded-pill" style={{backgroundColor:'#ff6633', opacity:0.8}}>Click Club Presents:</div>
                            <p className="fw-bold display-6 text-black mb-2">{event?.title.toUpperCase()}</p>
                            <div className="d-flex p-3 rounded-3 dateContainer">
                                <div className="col">
                                    <small className="text-black"> Time:</small>
                                    <p className="display-5 text-black"><ShortDate date={event?.startDate} /></p>
                                </div>
                                <div className="col">
                                    <small className="text-black">{event?.startDate !== null && 'Start'} Date:</small>
                                    <p className="display-5 text-black"><ShortDate date={event?.startDate} /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </div>
  )
}

function ShortDate({ date }) {
    if (date !== undefined) {
        const formattedDate = new Intl.DateTimeFormat(undefined, {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit'
        }).format(new Date(date));

        return formattedDate;
    }
    return null;
}

export default EventDetails