// Возвращает разметку блока для группы Top Rated
export const getTopRatedFilmsContainerTemplate = () => {
  return `<section class="films-list--extra" id="top-rated">
      <h2 class="films-list__title">Top rated</h2>
      <div class="films-list__container">
      </div>
    </section>`.trim();
};
