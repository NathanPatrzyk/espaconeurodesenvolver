import Motion from "../Motion";
import Link from "./Link";
import { Info } from "lucide-react";

const LinkGoToProfessionals = () => {
  return (
    <section className="bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro">
      <Motion>
        <div className="flex flex-col gap-8 p-4 py-8 sm:flex-row md:p-16 xl:px-48">
          <div className="mx-auto">
            <h2 className="text-center text-2xl font-bold text-light-neuro sm:text-left">
              Conheça nossos profissionais, suas formações e especialidades:
            </h2>
          </div>
          <div className="mx-auto w-full min-w-[168px] text-center sm:w-auto sm:self-center sm:text-left">
            <Link link="/profissionais" name="SAIBA MAIS" theme="light">
              <Info />
            </Link>
          </div>
        </div>
      </Motion>
    </section>
  );
};

export default LinkGoToProfessionals;
