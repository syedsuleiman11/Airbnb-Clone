// src/components/Card.jsx
import React from "react";

const REMOTE_FALLBACK =
  "https://images.unsplash.com/photo-1505691723518-36a6f28ab8b4?auto=format&fit=crop&w=1200&q=80";

export default function Card({ stay }) {
  if (!stay) return null;

  const src =
    stay.image && stay.image.trim() !== ""
      ? stay.image
      : REMOTE_FALLBACK;

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">

      <img
        src={src}
        alt={stay.title || "Listing"}
        className="w-full h-48 object-cover"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = REMOTE_FALLBACK;
        }}
      />

      <div className="p-4">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>{stay.location}</span>
          <span className="font-medium">${stay.price}/night</span>
        </div>

        <h3 className="mt-2 font-semibold text-gray-800">{stay.title}</h3>
        <p className="mt-1 text-xs text-gray-500">{stay.description}</p>
      </div>
    </article>
  );
}
