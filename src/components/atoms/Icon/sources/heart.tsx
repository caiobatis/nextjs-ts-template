type TProps = {
  color: string
}

const Linkedin = ({ color }: TProps) => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22.4047L2.41205 12.4047C0.683841 10.6779 0.255551 8.03842 1.34905 5.8537V5.8537C2.16468 4.22292 3.71446 3.08357 5.5143 2.79155C7.31415 2.49954 9.14466 3.09045 10.434 4.3797L12 5.9447L13.566 4.3797C14.8554 3.09045 16.6859 2.49954 18.4858 2.79155C20.2856 3.08357 21.8354 4.22292 22.651 5.8537V5.8537C23.743 8.03749 23.3152 10.675 21.589 12.4017L12 22.4047Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Linkedin
