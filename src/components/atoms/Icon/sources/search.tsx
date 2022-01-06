type TProps = {
  color: string
}

const Search = ({ color }: TProps) => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.69353 12.5352C12.4234 11.3751 13.6959 8.2216 12.5357 5.49177C11.3755 2.76193 8.22208 1.48945 5.49225 2.6496C2.76241 3.80975 1.48993 6.96321 2.65008 9.69305C3.81024 12.4229 6.9637 13.6954 9.69353 12.5352Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.3901 11.3896L15.5555 15.5556"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Search
