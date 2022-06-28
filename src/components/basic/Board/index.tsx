import React from 'react';
import styles from './Board.module.scss';

const Board = () => {
  const cellSize = 9;
  const siteSize = Math.sqrt(cellSize);
  const ref = React.createRef<HTMLDivElement>();

  const smallCellClicked = (e: React.MouseEvent<HTMLDivElement>) => {
    const bigCellIndex = e.currentTarget.getAttribute('big-index');
    const rowIndex = e.currentTarget.getAttribute('global-row');
    const columnIndex = e.currentTarget.getAttribute('global-column');
    const allBigCells: Array<HTMLElement> = [].slice.call(
      e.currentTarget.parentElement?.parentElement?.children,
    );
    const allSmallCells: Array<HTMLElement> = [];
    allBigCells.forEach((elem) => {
      allSmallCells.push(...[].slice.call(elem.children));
    });
    allSmallCells.forEach((elem) => {
      elem.setAttribute('nums-hint', 'false');
      elem.setAttribute('is-selected', 'false');
      elem.setAttribute('is-highlighted', 'false');
    });
    const cellsToBeHighlighted = allSmallCells.filter(
      (elem) =>
        elem.getAttribute('global-row') === rowIndex ||
        elem.getAttribute('global-column') === columnIndex ||
        elem.getAttribute('big-index') === bigCellIndex,
    );
    cellsToBeHighlighted.forEach((elem) => elem.setAttribute('is-highlighted', 'true'));
    const numToFind: number =
      e.currentTarget.innerText.trim() === '' ? -1 : Number(e.currentTarget.innerText);
    console.log(numToFind);
    const hintNums = allSmallCells.filter((elem) => Number(elem.innerText) === numToFind);
    hintNums.forEach((elem) => elem.setAttribute('nums-hint', 'true'));
    e.currentTarget.setAttribute('is-selected', 'true');
  };
  const cellsArray = [];
  let fixedGlobalRow = 0;
  for (let i = 0, globalRow = 0, globalColumn = 0; i < cellSize; i++) {
    const tempArray = [];
    if (i !== 0 && i % siteSize === 0) fixedGlobalRow += siteSize;
    globalColumn = i % siteSize === 0 ? 0 : globalColumn;
    let fixedGlobalColumn = globalColumn;
    for (let j = 0; j < cellSize; j++) {
      fixedGlobalColumn = j === cellSize - 1 ? globalColumn : fixedGlobalColumn;
      globalColumn = j % siteSize === 0 ? fixedGlobalColumn : globalColumn;
      if (j === 0) globalRow = fixedGlobalRow;
      else if (j !== 0 && j % siteSize === 0) globalRow += 1;
      tempArray.push(
        <div
          className={styles.cell}
          big-index={i}
          small-index={j}
          global-row={globalRow}
          global-column={globalColumn++}
          onClick={smallCellClicked}
          is-highlighted={'false'}
          is-selected={'false'}
          hint-num={'false'}
          key={`${globalRow};${globalColumn}`}
        >
          {j + 1}
          {/*TODO paste value from matrix*/}
        </div>,
      );
    }
    cellsArray.push(
      <div className={styles['big-cell']} key={`${i}`}>
        {tempArray}
      </div>,
    );
  }
  return (
    <div className={styles.container} ref={ref}>
      {cellsArray}
    </div>
  );
};

export default Board;
