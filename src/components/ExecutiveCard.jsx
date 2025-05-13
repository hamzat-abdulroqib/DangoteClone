function ExecutiveCard({ image, name, title }) {
  return (
    <div className="col-md-4 text-center mt-5">
      <div className="car border-0">
        <img src={image} alt={name} className="card-img-top img-fluid" />
        <div className="card-body">
          <h5 className="card-title fw-bold">{name}</h5>
          <p className="card-text text-muted">{title}</p>
        </div>
      </div>
    </div>
  );
}

export default ExecutiveCard;
