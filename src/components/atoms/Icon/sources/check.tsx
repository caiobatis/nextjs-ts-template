type TProps = {
  color: string
}

const Check: React.FC<TProps> = ({ color }) => {
  return (
    <svg
      width="18"
      height="13"
      viewBox="0 0 18 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 1L6 12L1 7"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Check
