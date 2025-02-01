// this is the component that renders the page switch bar

// system imports
import { ArrowLeft, ArrowRight } from "lucide-react";

// types
type PaginationProps = {
  page: number;
  maxPage: number;
  setPage: (page: number) => void;
};
export default function PageSwitchBar({ page, maxPage, setPage }: PaginationProps) {
  // handle page change when user enters page number
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // make sure the input is a number
    const value = Number.parseInt(e.target.value);

    // if the input is not a number, set the page to 1 and return
    if (isNaN(value)) {
      setPage(1);
      return;
    }

    // Determine the new page value
    const newPage = Math.max(1, Math.min(value, maxPage));

    // set the new page
    setPage(newPage);
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-3 text-lg">
        {/* left arrow button */}
        <button
          onClick={() => setPage(Math.max(1, page - 1))}
          className="px-6 py-2 mx-2 hover:bg-[#363636] transition-colors disabled:opacity-50 disabled:bg-[#1A1A1A] text-gray-400 rounded-sm"
          disabled={page === 1}
          aria-label="Previous page"
        >
          <ArrowLeft size={24} strokeWidth={3} />
        </button>

        {/* page number input */}
        <div className="flex items-center gap-2 text-white">
          <span>Page</span>
          <input
            value={page}
            onChange={handleInputChange}
            className="bg-[#1A1A1A] py-2 px-4 mx-2 rounded-sm w-16 text-center focus:outline-none focus:ring-1 focus:ring-[#363636]"
          />
          <span className="text-[#8B8B8B]">of</span>
          <span>{maxPage}</span>
        </div>

        {/* right arrow button */}
        <button
          onClick={() => setPage(Math.min(maxPage, page + 1))}
          className="px-6 py-2 mx-2 hover:bg-[#363636] transition-colors disabled:opacity-50 disabled:bg-[#1A1A1A] text-gray-400 rounded-sm"
          disabled={page === maxPage}
          aria-label="Next page"
        >
          <ArrowRight size={24} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
}
