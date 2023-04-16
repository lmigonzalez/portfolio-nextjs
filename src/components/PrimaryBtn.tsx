import React, {ReactNode} from 'react'
import Link from 'next/link';
interface LinkButtonProps {
	text: ReactNode;
	to: string
}

const PrimaryBtn: React.FC <LinkButtonProps>  = ({text, to}) => {
  return (
	<Link href={to} className='gradient-color px-6 py-3 rounded-md text-white font-light hover:scale-95 transition-all'>{text}</Link>
  )
}

export default PrimaryBtn