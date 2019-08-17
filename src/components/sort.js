// Возвращает разметку сортировки
export const makeSort = (dataObj, isActive = false) => {
  return `<li>
    <a href="${dataObj.href}" class="sort__button ${isActive ? `sort__button--active` : ``}">
      Sort by ${dataObj.name}
    </a>
  </li>`.trim();
};
