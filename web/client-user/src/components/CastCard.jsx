export default function CastCard({ item }) {
  return (
    <div className="col-2 mb-3 px-1">
      <div className="card ">
        <img src={item.profilePict} className="card-img-top" alt="Cast" />
        <div className="card-body text-left">
          <p>{item.name}</p>
        </div>
      </div>
    </div>
  );
}
