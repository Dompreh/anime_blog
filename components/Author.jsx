import Image from "next/image";
import React from "react";

const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-50">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          unoptimized
          src={author.photo.url}
          alt={author.name}
          width="100"
          height="100"
          className="align-middle rounded-full"
        />
      </div>
      <h3 className="text-white  my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg ">{author.bio}</p>
    </div>
  );
};

export default Author;
