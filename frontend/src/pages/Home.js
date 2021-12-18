import useDocumentTitle from "../hooks/useDocumentTitle";


const Home = () => {
  useDocumentTitle("Interview Platform");
  return (
    <main className="pt-32 pb-12">
      <h2 className="text-center font-bold text-2xl">
        Hello, Ruchi here! <br />
        I am a learner and curious developer trying to figure out things :D

      </h2>
      
    </main>
  );
};

export default Home;
