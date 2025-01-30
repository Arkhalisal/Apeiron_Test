import { ArrowLeft, ArrowRight } from "lucide-react";

type PaginationProps = {
  page: number;
  maxPage: number;
  setPage: (page: number) => void;
};
export default function PageSwitchBar({ page, maxPage, setPage }: PaginationProps) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value);

    if (isNaN(value)) setPage(1);

    if (value) {
      if (value > maxPage) {
        setPage(maxPage);
      } else if (value < 1) {
        setPage(1);
      } else {
        setPage(value);
      }
    }
  };

  return (
    <div className="w-full ">
      <div className="flex items-center justify-center gap-3 text-lg">
        <button
          onClick={() => setPage(Math.max(1, page - 1))}
          className="px-6 py-2 mx-2 hover:bg-[#363636] transition-colors disabled:opacity-50 disabled:bg-[#1A1A1A] text-gray-400 rounded-sm"
          disabled={page === 1}
          aria-label="Previous page"
        >
          <ArrowLeft size={24} strokeWidth={3} />
        </button>
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
