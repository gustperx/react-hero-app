import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const imagePath = `/src/assets/heroes/${id}.jpg`;

  return (
    <div className="rounded-md border">
      <div className="flex">
        <div className="basis-2/6">
          <img src={imagePath} alt={superhero} />
        </div>
        <div className="basis-4/6">
          <div className="text-center mx-4">
            <h3 className="text-xl mt-4 font-semibold">{superhero}</h3>
            <p className="text-lg my-2 text-gray-900">{alter_ego}</p>
            {alter_ego !== characters && (
              <p className="text-sm text-gray-700">{characters}</p>
            )}
            <p className="text-sm text-sky-700 my-4">{first_appearance}</p>

            <Link to={`/hero/${id}`} className="text-red-500">
              Más información
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
