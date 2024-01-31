import React from "react";

type TechProps = {};

export const Tech = ({}: TechProps) => {
  return (
    <div className="w-full flex items-center justify-center mt-[150px]">
      <div className="w-[80%]">
        <h1 className="text-white text-5xl text-center">
          Built with Cutting-Edge Technology
        </h1>
        <p className="text-white text-xl text-center mt-[60px]">
          This project showcases my skills in modern web development, featuring
          a robust stack including Next.js for server-side rendering, Prisma for
          database management, Zod for data validation, and more.
        </p>
        <div className="w-full flex flex-wrap text-center justify-center gap-20 mt-[60px]">
          <p className="text-white text-xl">{">"} NextJS 14</p>
          <p className="text-white text-xl">{">"} Prisma</p>
          <p className="text-white text-xl">{">"} Zod</p>
          <p className="text-white text-xl">{">"} Next Auth</p>
          <p className="text-white text-xl">{">"} TypeScript</p>
          <p className="text-white text-xl">{">"} Shadcn</p>
          <p className="text-white text-xl">{">"} NextJS</p>
          <p className="text-white text-xl">{">"} Server Actions</p>
          <p className="text-white text-xl">{">"} Mapbox API</p>
          <p className="text-white text-xl">{">"} Postgres</p>
          <p className="text-white text-xl">and more..</p>
        </div>
      </div>
    </div>
  );
};
