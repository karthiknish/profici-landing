import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full py-6 bg-white border-b border-gray-200">
      <div className="container mx-auto flex justify-center items-center">
        <Link
          href="https://profici.co.uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://profici.co.uk/wp-content/themes/proficinew/assets/images/Proficiblack.svg"
            alt="Profici Logo"
            width={200}
            height={50}
            className="cursor-pointer"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
