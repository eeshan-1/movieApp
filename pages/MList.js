import Link from "next/link";
import Image from "next/image";

export const MList = ({ details }) => {
  return (
    <div className="bg-dark">
    <div className="container-sm movie-list">
      <div className="row">
        {details.map((single) => {
          return (
            <div className="col-3" key={single.imdbID} oc>
              <Image
                className="img-fluid"
                src={single.Poster}
                width={220}
                height={300}
                alt={single.Title}
              />
              <div className="text-white">
                <p>{single.Title}</p>
                <p>Year: {single.Year}</p>

                <Link href={`/movies/${single.imdbID}`}>
                  <a>
                    <button className="btn btn-warning">Synopsis</button>
                  </a>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
};