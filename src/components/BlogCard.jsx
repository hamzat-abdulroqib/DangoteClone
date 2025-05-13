function BlogCard({ urlToimage, title, description, url }) {
  return (
    <div className="col-md-4 text-center mt-4">
      <div className="card border-0 shadow">
        <img src={urlToimage} alt={title} className="card-img-top img-fluid" />
        <div className="card-body">
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text text-muted">{description}</p>
          <a
            href={url}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
