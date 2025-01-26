function ContactPage() {
  return (
    <>
      <div
        className="p-4 rounded-4 shadow"
        style={{
          position: 'absolute',
          backgroundColor: '#fff',
          width: '30%',
          right: 100,
          top: 200,
        }}
        id="contact-info"
      >
        <div>
          <p className="text-center display-5 fw-bold text-black mb-1">Contact Us</p>
          <p className="text-secondary text-center fw-light">
            Let us connect! Have questions or ideas? Reach out to the <span style={{ color: '#ff6633' }}>Click Club</span> team, and we’ll get back to you soon.
          </p>
          <div className="mb-3">
            <p className="fs-4 text-black fw-semibold mb-0">Location</p>
            <small className="fs-5 fw-light small text-secondary">
              NIT Raipur, Great Eastern Road, Amanaka, Raipur, Chhattisgarh, India, IN 492010.
            </small>
          </div>
          <div className="mb-3">
            <p className="fs-4 text-black fw-semibold mb-0">Email</p>
            <small className="fs-5 fw-light small text-secondary">clickclub@nitrr.ac.in</small>
          </div>
          <div className="mb-3">
            <p className="fs-4 text-black fw-semibold mb-0">Contact</p>
            <small className="fs-5 fw-light small text-secondary mb-0">Rishabh Chandrakar: +91-7415378341</small>
            <br />
            <small className="fs-5 fw-light small text-secondary">Yash Kharat: +91-9644553595</small>
          </div>
        </div>
      </div>

      <div className="container-fluid p-0">
        <iframe
          className="w-100"
          style={{ height: '90.5vh' }}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14874.196331166764!2d81.6050291!3d21.2497222!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x21543965c50c43c7!2sNational%20Institute%20of%20Technology(NIT)%2C%20Raipur!5e0!3m2!1sen!2sin!4v1667163858995!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            #contact-info {
              position: static !important;
              width: 100% !important;
              // margin-bottom: 20px;
            }
          }
        `}
      </style>
    </>
  );
}

export default ContactPage;
