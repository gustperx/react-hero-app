import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useMemo } from "react";
import { getHeroById } from "../../helpers/getHeroById";

export const HeroPage = () => {
  const navigate = useNavigate();

  const { heroId } = useParams();
  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  if (!hero) {
    return <Navigate to="/" />;
  }

  const handleRetorn = () => {
    navigate("/");
  };

  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  const imagePath = `/src/assets/heroes/${id}.jpg`;

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="rounded-md border">
        <div className="flex">
          <div className="basis-2/6">
            <img src={imagePath} alt={superhero} />
          </div>
          <div className="basis-4/6">
            <div className="mx-4">
              <h3 className="text-xl mt-4 font-semibold">{superhero}</h3>

              <ul className="mt-8">
                <li>
                  <b>Alter ego:</b> {alter_ego}
                </li>
                <li>
                  <b>Publisher:</b> {publisher}
                </li>
                <li>
                  <b>First appearance:</b> {first_appearance}
                </li>
              </ul>

              <h5 className="mt-4 font-semibold">Characters</h5>
              <p className="text-sm text-gray-700">{characters}</p>

              <div className="mt-4">
                <button
                  className="bg-blue-400 px-4 py-1 rounded-md text-white"
                  onClick={handleRetorn}
                >
                  Regresar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
