import Nav from "../components/Nav";
import Footer from "../components/Footer";
import LinkGoBack from "../components/LinkGoBack";

function Bobath() {
  return (
    <div className="bg-light-cyan-neuro">
      <LinkGoBack textColor="dark-neuro" />
      <main className="flex md:flex-row flex-col-reverse">
        <div className="flex-1 flex flex-col md:py-12 md:px-16 md:pt-4 py-8 px-4 pt-4">
          <h1 className="text-dark-neuro text-3xl pb-4">
            <span className="font-bold bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro text-transparent bg-clip-text text-3xl">
              Bobath
            </span>
          </h1>
        </div>
      </main>
      <Nav />
      <Footer />
    </div>
  );
}

export default Bobath;
