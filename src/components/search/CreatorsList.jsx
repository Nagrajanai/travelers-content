import React from "react";
import CreatorCard from "./CreatorCard";
import { creators } from "../../data/creators";
import { useRouter } from "next/router";

const CreatorsList = () => {
  const router = useRouter();

  return (
    <div className="transition-all duration-700 space-y-6">
      {creators.map((c) => (
        <CreatorCard
          key={c.slug}
          {...c}
          services={c.services || ["Photography"]}
          profileImage={
            c.profileImage ||
            "https://heyboss.heeyo.ai/1753313010-b535f786-iso.500px.com-wp-content-uploads-2020-08-stock-photo-240662573.jpg"
          }
          responseTime={c.responseTime || "Responds within 1 hour"}
          image={c.bannerImage || c.image}
          onViewProfile={() => router.push(`/profile/${c.slug}`)}
        />
      ))}
    </div>
  );
};

export default CreatorsList;
