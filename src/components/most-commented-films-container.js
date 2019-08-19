// Возвращает разметку блока для группы Most Commented
export const getMostCommentedFilmsContainerTemplate = () => {
  return `<section class="films-list--extra" id="most-commented">
      <h2 class="films-list__title">Most commented</h2>
      <div class="films-list__container">
      </div>
    </section>`.trim();
};
