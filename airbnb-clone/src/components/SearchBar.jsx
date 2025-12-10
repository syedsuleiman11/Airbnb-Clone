import React, { useState } from "react";

const SearchIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="11" cy="11" r="6" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
);

export default function SearchBar() {
  const [q, setQ] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    const query = (q || "").trim();
    alert(`Search: ${query === "" ? "Anywhere" : query}`);
  }

  return (
    <form
      className="bg-gray-500 rounded-full shadow-md p-2 flex items-center"
      onSubmit={onSubmit}
      role="search"
      aria-label="Search stays"
    >
      <input
        name="q"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className="flex-1 px-4 py-2 rounded-l-full outline-none"
        placeholder="Anywhere • Any week • Add guests"
        aria-label="Search"
        autoComplete="off"
        enterKeyHint="search"
      />

      <button
        className="ml-2 rounded-full bg-airbnb px-4 py-2 text-white flex items-center gap-2"
        type="submit"
        aria-label="Submit search"
      >
        <SearchIcon className="h-4 w-4" />
        <span className="sr-only">Search</span>
        <span aria-hidden="true">Search</span>
      </button>
    </form>
  );
}
