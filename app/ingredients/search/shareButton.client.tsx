"use client";

export default function ShareButton() {
  return (
    <button
      onClick={() => {
        window.navigator.clipboard.writeText(window.location.href);
        window.alert("Copied to clipboard!");
      }}
      className="w-fit h-fit flex flex-col z-20 items-center justify-center bg-vibrant p-4 rounded-sm text-lg font-medium text-white"
    >
      Share This Recipe
    </button>
  );
}
