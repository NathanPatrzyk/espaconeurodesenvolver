import Link from "./Link";

const LinkGoToProfessionals = () => {
  return (
    <section className="bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro">
      <div className="flex sm:flex-row flex-col gap-8 md:p-16 xl:px-48 py-8 p-4">
        <div className="mx-auto">
            <h2 className="text-light-neuro text-2xl font-bold">
              Conheça nossos profissionais, suas formações e especialidades:
            </h2>
        </div>
        <div className="sm:self-center mx-auto min-w-[128px]">
          <Link
            link="/profissionais"
            name="SAIBA MAIS"
            theme="light"
          />
        </div>
      </div>
    </section>
  );
};

export default LinkGoToProfessionals;
