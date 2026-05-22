import { useState } from "react";

const categories = [
  { label: "Todos", emoji: "🛍️" },
  { label: "Skincare", emoji: "🧴" },
  { label: "Maquiagem", emoji: "💄" },
  { label: "Cabelos", emoji: "💆" },
  { label: "Perfumes", emoji: "🌺" },
];

export default function Categories({ active, onChange }) {
  return (
    <section className="categories">
      <div className="categories-scroll">
        {categories.map((cat) => (
          <button
            key={cat.label}
            className={`category-pill${active === cat.label ? " active" : ""}`}
            onClick={() => onChange(cat.label)}
          >
            {cat.emoji} {cat.label}
          </button>
        ))}
      </div>
    </section>
  );
}
