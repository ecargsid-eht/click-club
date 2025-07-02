import { useLayoutEffect } from "react";

function CalendarPage() {
      useLayoutEffect(() => {
        document.title = "Calendar | Click Club"
      },[])
    const months = ['january.png', 'february.png', 'march.png', 'april.png','may.png', 'june.png', 'july.png', 'august.png', 'september.png', 'october.png', 'november.png', 'december.png'];
    return (
        <div className="container mb-2 mt-4">
            <p className="text-center display-6 text-black fw-bold">Calendar / Planner</p>
            <div className="text-secondary text-center fw-light">
                <p className="text-secondary text-center fw-light">
                    Let us plan ahead while exploring stunning visuals for each month, complete with capture settings like ISO and more to inspire every moment.
                    <br />
                    Every year, <span style={{color:"#ff6633"}}>Click Club</span> publishes a calendar with a different theme featuring the photographs taken by the members of the club.
                </p>

                <div className="row mt-3 g-4">
                    {months.map((month,key) => (
                        <div className="col-md-4 col-12" key={key}>
                            <img src={`/publicAssets/calendar/${month}`} alt="" className="img-fluid shadow-sm rounded-3" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CalendarPage