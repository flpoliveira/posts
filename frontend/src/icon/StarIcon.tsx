function StarIcon(props: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 1.413l2.446 4.994 5.47.806-3.958 3.885.934 5.489L9 13.994l-4.893 2.593.935-5.489-3.959-3.885 5.47-.806L9 1.413z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export { StarIcon };
