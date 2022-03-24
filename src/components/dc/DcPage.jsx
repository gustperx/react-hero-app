import { HeroList } from "../hero/HeroList";

export const DcPage = () => {
  return (
    <>
      <h1 className="text-4xl text-red-400">DC</h1>
      <hr className="my-4" />
      <HeroList publisher="DC Comics" />
    </>
  );
};
