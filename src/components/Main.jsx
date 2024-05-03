import React from "react";
import Button from "./Button";
import ImageMain from "../assets/main.webp";

const Main = () => {
  return (
    <main className="flex md:flex-row flex-col-reverse bg-light-cyan-neuro">
      <div className="flex-1 flex flex-col justify-center md:pt-48 md:pb-32 md:px-16 px-4 py-8">
        <h1 className="text-dark-neuro text-3xl">
          Agende uma avaliação e venha{" "}
          <span className="font-bold bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro text-transparent bg-clip-text text-3xl">
            conhecer nosso espaço!
          </span>
        </h1>
        <div className="pt-6">
          <a href="https://api.whatsapp.com/send?phone=554299732535">
            <button className="flex align-center justify-start gap-2 text-light-neuro w-[70vw] sm:w-[218px] font-sm font-medium bg-gradient-to-r from-dark-cyan-neuro to-cyan-neuro py-[10px] px-[20px] rounded-md hover:opacity-80">
              <svg
                className="mt-0.5"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
              >
                <g clip-path="url(#clip0_23_38)">
                  <path
                    d="M14.9307 3.79297C13.2883 2.15234 11.101 1.25 8.77657 1.25C3.97866 1.25 0.0744774 5.14062 0.0744774 9.92188C0.0744774 11.4492 0.474303 12.9414 1.23476 14.2578L0 18.75L4.61368 17.543C5.88371 18.2344 7.31446 18.5977 8.77265 18.5977H8.77657C13.5706 18.5977 17.561 14.707 17.561 9.92578C17.561 7.60938 16.5732 5.43359 14.9307 3.79297ZM8.77657 17.1367C7.47517 17.1367 6.20122 16.7891 5.0919 16.1328L4.82927 15.9766L2.09321 16.6914L2.8223 14.0312L2.64983 13.7578C1.92465 12.6094 1.54443 11.2852 1.54443 9.92188C1.54443 5.94922 4.79007 2.71484 8.78049 2.71484C10.713 2.71484 12.5279 3.46484 13.892 4.82812C15.2561 6.19141 16.0949 8 16.091 9.92578C16.091 13.9023 12.7631 17.1367 8.77657 17.1367ZM12.7435 11.7383C12.5279 11.6289 11.4578 11.1055 11.2578 11.0352C11.0579 10.9609 10.9129 10.9258 10.7679 11.1445C10.6228 11.3633 10.2073 11.8477 10.078 11.9961C9.95253 12.1406 9.82317 12.1602 9.60758 12.0508C8.3297 11.4141 7.49085 10.9141 6.64808 9.47266C6.42465 9.08984 6.87152 9.11719 7.28702 8.28906C7.35758 8.14453 7.3223 8.01953 7.26742 7.91016C7.21254 7.80078 6.77744 6.73438 6.59713 6.30078C6.42073 5.87891 6.24042 5.9375 6.10714 5.92969C5.98171 5.92188 5.83667 5.92188 5.69164 5.92188C5.5466 5.92188 5.31141 5.97656 5.1115 6.19141C4.91159 6.41016 4.35105 6.93359 4.35105 8C4.35105 9.06641 5.1311 10.0977 5.23693 10.2422C5.34669 10.3867 6.7696 12.5742 8.95296 13.5156C10.3328 14.1094 10.8737 14.1602 11.5636 14.0586C11.983 13.9961 12.8493 13.5352 13.0296 13.0273C13.2099 12.5195 13.2099 12.0859 13.1551 11.9961C13.1041 11.8984 12.9591 11.8438 12.7435 11.7383Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_23_38">
                    <rect width="17.561" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              ENTRE EM CONTATO
            </button>
          </a>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center md:px-16 md:py-12 md:pt-28 pt-24 py-8 md:bg-gradient-to-r md:from-dark-cyan-neuro md:to-cyan-neuro bg-gradient-to-r from-transparent to-transparent md:rounded-none md:rounded-bl-[800px] rounded-none">
        <img
          src={ImageMain}
          className="sm:size-[300px] size-[90vw] max-w-[300px] max-h-[300px]"
        ></img>
      </div>
    </main>
  );
};

export default Main;
