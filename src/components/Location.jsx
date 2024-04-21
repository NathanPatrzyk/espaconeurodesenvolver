const Location = () => {
  return (
    <section className="flex md:flex-row flex-col-reverse bg-light-neuro">
      <div className="flex-1 flex flex-col justify-center md:py-32 md:px-16 px-4 py-8 md:max-w-[50vw] max-w-none">
        <h2 className="font-bold bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro text-transparent bg-clip-text text-3xl">
          Localização
        </h2>
        <p className="text-dark-neuro pt-6">
          📍 R. Conselheiro Zacarias, 156 Irati-PR, 84500-245
        </p>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <iframe
          className="w-full h-full min-h-[300px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.1925990864897!2d-50.646131325262985!3d-25.465243534285854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e7d54717ac8929%3A0x678e2ce721a7ad8b!2sEspa%C3%A7o%20Neurodesenvolver!5e0!3m2!1spt-BR!2sbr!4v1713653945793!5m2!1spt-BR!2sbr"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
