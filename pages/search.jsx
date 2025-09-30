import React from "react";
import SearchForm from "../src/components/search/SearchForm.jsx";
import Filters from "../src/components/search/Filters.jsx";
import CreatorsList from "../src/components/search/CreatorsList.jsx";
import MapSection from "../src/components/search/MapSection.jsx";

export default function SearchPage() {
return (
<div className="min-h-screen bg-gray-50">


<section
className="relative h-[250px] pt-25 pb-0 shadow-sm bg-cover bg-center"
style={{ backgroundImage: `url('/bg.jpg')` }}
>
<div className="absolute inset-0 bg-black/40"></div>

<div className="relative z-10">
<SearchForm />
</div>
</section>


<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8">
<div className="lg:w-1/2 space-y-6">
<Filters />
<CreatorsList />
</div>
<div className="lg:w-1/2">
<MapSection />
</div>
</div>


</div>
);
}
