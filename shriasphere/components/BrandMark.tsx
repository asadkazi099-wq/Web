export default function BrandMark({ size = 34 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M27 7C21 7 16.5 11 16.5 16.5C16.5 22.5 22.5 24 22.5 29.5C22.5 33.5 19 35.5 15.5 34.5"
        stroke="#F7F7F8"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <path d="M27 7L32 3" stroke="#E2242C" strokeWidth="3.4" strokeLinecap="round" />
    </svg>
  );
}
