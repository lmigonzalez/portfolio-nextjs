import React, {ReactNode} from 'react'
import Link from 'next/link';
interface LinkButtonProps {
	text: ReactNode;
	to: string
}

const SecondaryBtn: React.FC <LinkButtonProps>  = ({text, to}) => {
	return (
	  <Link href={to} className='border-[1px] border-purple-400 px-10 py-3 rounded-md text-white font-light hover:scale-95 transition-all'>{text}</Link>
	)
  }

export default SecondaryBtn