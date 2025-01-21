export default function PaginationControls({
  currentPage,
  totalPages,
  handlePrevPage,
  handleNextPage,
}) {
  return (
    <div className="flex justify-center items-center mt-8 space-x-4">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className={`px-4 py-2 bg-gray-200 text-gray-700 rounded ${
          currentPage === 1
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-300"
        }`}
      >
        Previous
      </button>
      <span className="text-gray-500">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 bg-gray-200 text-gray-700 rounded ${
          currentPage === totalPages
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-300"
        }`}
      >
        Next
      </button>
    </div>
  );
}
