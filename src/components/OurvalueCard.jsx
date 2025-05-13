function OurvalueCard({ icon, title, description }) {
  return (
    <div className="col-md-4 text-center">
      <div className="card border-0 card-body">
        <div className="card-body">
          <div className="icon mb-3">
            <img src={icon} alt={title} className="img-fluid icon-body" />
          </div>
          <h5 className="card-title fw-bold tittle-body">{title}</h5>
          <p className="card-text text-muted description-body">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default OurvalueCard;
