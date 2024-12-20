import './css/CampusPage.css';
import bannerImage from '../../assets/campusBanner.png'
function CampusPage() {
  return (
    <div className="text-center position-relative">
      <img src={bannerImage} className="campusBanner col-12" alt="" />
      <p className="fs-4 fw-bold position-absolute top-50 translate-middle start-50 px-1">NATIONAL INSTITUTE OF TECHNOLOGY, RAIPUR</p>
    </div>  
  )
}

export default CampusPage