import { FaSearch } from 'react-icons/fa';

export default function SearchBar() {
  return (
    <div className="flex justify-center mt-8 relative">
      <FaSearch className="absolute left-1/4 transform translate-x-1/2 translate-y-2/3 text-gray-400" />
      <input 
        type="text" 
        placeholder="Try searching for WCAG guidelines" 
        className="w-1/2 pl-8 pr-4 py-2 border rounded-md focus:outline-none"
      />
    </div>
  );
}
