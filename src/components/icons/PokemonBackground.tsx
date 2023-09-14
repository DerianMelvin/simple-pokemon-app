export default function PokemonBackground({ size }: { size: number }) {
  return (
    <svg
      width={`${size}`}
      height={`${size}`}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.987 60.6533C47.8191 60.6533 60.6536 47.8188 60.6536 31.9866C60.6536 16.1545 47.8191 3.31995 31.987 3.31995C16.1548 3.31995 3.32031 16.1545 3.32031 31.9866C3.32031 47.8188 16.1548 60.6533 31.987 60.6533Z"
        stroke="black"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.9867 43.32C38.2459 43.32 43.32 38.2459 43.32 31.9867C43.32 25.7274 38.2459 20.6533 31.9867 20.6533C25.7274 20.6533 20.6533 25.7274 20.6533 31.9867C20.6533 38.2459 25.7274 43.32 31.9867 43.32Z"
        stroke="black"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.32031 31.9867H20.6536M43.3203 31.9867H60.6536"
        stroke="black"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
