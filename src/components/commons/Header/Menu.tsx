import Link from 'next/link';
import Image from 'next/image';
import { MenuCloseIcon } from '@/components/icons/MenuCloseIcon';

interface MenuProps {
  isVisible: boolean;
  onClose: () => void;
}

export const Menu = ({ isVisible, onClose }: MenuProps) => {
  return (
    <div
      className={`${
        isVisible ? 'flex' : 'hidden'
      } fixed inset-0 h-full w-full bg-black bg-opacity-40 backdrop-blur-sm md:hidden`}
      onClick={onClose}
    >
      <div
        className='w-full bg-w-blue-900 h-96 shadow-md py-3 px-5'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex justify-between mb-5'>
          <Link href='/'>
            <Image
              src='/favicon.svg'
              width={55}
              height={55}
              alt='icone da letra w'
            />
          </Link>
          <button onClick={onClose}>
            <MenuCloseIcon className='fill-white w-10 h-10' />
          </button>
        </div>
        <nav className='flex flex-col gap-5 text-xl p-5 items-center'>
          <Link href='/' onClick={onClose}>
            Sobre mim
          </Link>
          {/* <Link href='/portfolio'>Portfolio</Link> */}
          <Link href='/contatos' onClick={onClose}>
            Entre em contato
          </Link>
        </nav>
      </div>
    </div>
  );
};
