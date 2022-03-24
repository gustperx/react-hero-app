import { useNavigate, useLocation } from "react-router-dom";
import { useMemo } from "react";

import queryString from "query-string";

import { getHeroesByName } from "../../helpers/getHeroesByName";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../hero/HeroCard";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const initialForm = {
    searchText: q,
  };

  const [formValues, handleInputChange] = useForm(initialForm);
  const { searchText } = formValues;

  let heroes = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1 className="text-4xl text-red-400">Search</h1>
      <hr className="my-4" />

      <div className="flex">
        <div className="basis-2/6 mx-4">
          <h4 className="text-2xl font-semibold">Search</h4>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-400 rounded-md py-2 px-4 mb-2"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="bg-blue-400 py-2 px-4 rounded-md text-white ml-2"
            >
              Search
            </button>
          </form>
        </div>
        <div className="basis-4/6 mx-4">
          <h4 className="text-2xl font-semibold">Results</h4>

          {q === "" ? (
            <p className="bg-sky-400 py-2 px-4 rounded-md text-white w-full">
              Search hero
            </p>
          ) : (
            heroes.length === 0 && (
              <p className="bg-red-400 py-2 px-4 rounded-md text-white w-full">
                No results: {q}
              </p>
            )
          )}

          <div className="grid grid-cols-2 gap-4">
            {heroes.map((hero) => (
              <HeroCard key={hero.id} {...hero} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
