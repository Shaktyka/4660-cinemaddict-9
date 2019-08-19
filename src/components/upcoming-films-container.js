// Возвращает разметку блока для группы Upcoming
export const getUpcomingFilmsContainerTemplate = () => {
  return `<section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
      <div class="films-list__container">

      </div>
    </section>`.trim();
};
