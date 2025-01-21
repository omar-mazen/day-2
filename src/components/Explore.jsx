const Explore = function ({ movie }) {
  return (
    <section className="explore">
      <p className="section-title">Explore</p>
      <p className="section-desc">What are you gonna watch today ?</p>
      <div
        className="banner"
        style={{ backgroundImage: `url(${movie?.backdrop})` }}
        title={movie?.name}
      >
        <p className="title">{movie?.name}</p>
        <p className="desc">{movie?.overview}</p>
      </div>
    </section>
  );
};
export default Explore;
