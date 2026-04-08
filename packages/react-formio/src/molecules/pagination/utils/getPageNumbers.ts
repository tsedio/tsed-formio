export const LEFT_PAGE = "LEFT";
export const RIGHT_PAGE = "RIGHT";

function range(from: number, to: number, step = 1): any[] {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
}

export function getPageNumbers({ currentPage, pageNeighbours = 1, totalPages }: any) {
  const totalNumbers = pageNeighbours * 2 + 3;
  const totalBlocks = totalNumbers + 2;

  if (totalPages > totalBlocks) {
    const calculatedStartPage = Math.max(2, currentPage - pageNeighbours);
    const calculatedEndPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
    const startPage = calculatedStartPage === 3 ? 2 : calculatedStartPage;
    const endPage = calculatedEndPage === totalPages - 2 ? totalPages - 1 : calculatedEndPage;

    let pages = range(startPage, endPage);

    const hasLeftSpill = startPage > 2;
    const hasRightSpill = totalPages - endPage > 1;
    const spillOffset = totalNumbers - (pages.length + 1);
    let extraPages;

    if (hasLeftSpill && !hasRightSpill) {
      extraPages = range(startPage - spillOffset, startPage - 1);
      pages = [LEFT_PAGE, ...extraPages, ...pages];
    } else if (!hasLeftSpill && hasRightSpill) {
      extraPages = range(endPage + 1, endPage + spillOffset);
      pages = [...pages, ...extraPages, RIGHT_PAGE];
    } else {
      pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
    }

    return [1, ...pages, totalPages];
  }

  return range(1, totalPages);
}
