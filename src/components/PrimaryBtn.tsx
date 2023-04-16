import React, { ReactNode, useEffect } from 'react';
import Link from 'next/link';
interface LinkButtonProps {
  text: ReactNode;
  to: string;
}

const PrimaryBtn: React.FC<LinkButtonProps> = ({ text, to }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Link
      href={to}
      scroll={true}
      className="gradient-color px-6 py-3 rounded-md text-white font-light hover:scale-95 transition-all"
    >
      {text}
    </Link>
  );
};

export default PrimaryBtn;
