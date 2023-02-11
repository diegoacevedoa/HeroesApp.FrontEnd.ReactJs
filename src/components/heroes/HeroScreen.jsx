import { useMemo } from "react";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = () => {
  let navigate = useNavigate();
  const { heroeId } = useParams();

  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

  if (!hero) {
    return <Navigate to="/app/" />;
  }

  const handleReturn = () => {
    if (navigate.length <= 1) {
      navigate("/app/");
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="row mt-5">
      <div className="col-3">
        <img
          src={`../../assets/heroes/${hero.id}.jpg`}
          className="img-thumbnail animate__animated animate__fadeInLeft"
          alt={hero.superhero}
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b>
            {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance: </b>
            {hero.first_appearance}
          </li>
        </ul>
        <h5>Characters</h5>
        <p>{hero.characters}</p>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};
