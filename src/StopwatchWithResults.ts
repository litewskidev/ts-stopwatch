import Stopwatch from './Stopwatch.js'

class StopwatchWithResults extends Stopwatch {

  results: string[] = [];

  constructor(element: HTMLDivElement) {
    super(element);
    this.prepareElements(element);
    this.prepareActions();
  };

  private prepareElements(element: HTMLDivElement): void {
    this.dom.resultsList  = <HTMLDivElement> (
      element.querySelector('.stopwatch__results')
    );
    this.dom.addToListBtn = <HTMLButtonElement> (
      element.querySelector('.stopwatch__add-to-list-btn')
    );
    this.dom.resetListBtn = <HTMLButtonElement> (
      element.querySelector('.stopwatch__reset-list-btn')
    );
    this.dom.resultsHeading = <HTMLElement> (
      element.querySelector(".stopwatch__results__heading")
    );
  };

  private prepareActions(): void {
    /* [DONE]
    Funkcja ta powinna dodawać nasłuchwiacze do buttonów this.dom.addToListBtn oraz this.dom.resetListBtn.
    Pierwszy powinien po kliknięciu uruchamiać metodę this.addToList, a druga this.resetList.
    */
    this.dom.addToListBtn.addEventListener("click", () => this.addToList());
    this.dom.resetListBtn.addEventListener("click", () => this.resetList());
  };

  private renderList(): void {
    /* [DONE]
    Funkcja ta powinna czyścić zawartość this.dom.resultsList, a następnie renderować w niej nowe elementy li na podstawie zawartości tablicy this.results. Każdy jej element powinien być renderowany bez żadnych zmian: np. <li>00:12:00</li>
    */
    this.dom.resultsList.replaceChildren(this.dom.resultsHeading);

    const results = `<ul>${this.results.map(
      (currentTime) => `<li><p>${currentTime}</p></li>`
    ).join(" ")}</ul>`;

    this.dom.resultsList.insertAdjacentHTML("beforeend", results);
  };

  protected addToList(): void {
    /* [DONE]
    Funkcja ta powinna pobierać aktualny czas z this.currentTime, formatować go i w takiej postaci zapisywać do tablicy this.results. Następnie powinna renderować aktualną listę na stronie (this.renderList).
    */
    const addTime = this.formatTime(this.currentTime);
    this.results.push(addTime);

    this.renderList();
  };

  protected resetList() {
    /* [IN PROGRESS]
    Funkcja ta powinna czyścić tablicę this.results oraz zawartość this.dom.resultsList
    */
  };
};

export default StopwatchWithResults
