async function appendData(yearText, list) {
  const yearContent = document.getElementById('publication-year-template').content;
  const publicationContent = document.getElementById('publication-template').content;

  const fragment = document.createDocumentFragment();

  const yearClone = document.importNode(yearContent, true);

  const year = yearClone.querySelector('.year');
  year.textContent = yearText + "年";
  const container = yearClone.querySelector('.publication-container');
  year.id = "y" + yearText;

  for (const data of list) {
    const publicationClone = document.importNode(publicationContent, true);
    const typeE = publicationClone.querySelector('.type');
    const authorsE = publicationClone.querySelector('.authors');
    const titleE = publicationClone.querySelector('.proc');
    const procE = publicationClone.querySelector('.title');

    const linkE = publicationClone.querySelector('.detail-link');

    typeE.textContent = "[" + data.type + "]";
    authorsE.textContent = data.authors;
    titleE.textContent = data.proc;
    procE.textContent = data.title;
    linkE.style.display = data.id ? "inline-block" : "none";
    linkE.href = "../publication-detail?id=" + data.id;
    container.appendChild(publicationClone);
  }
  fragment.appendChild(yearClone);
  document.getElementById("publication-year-container").appendChild(fragment);
}
$(document).ready(async function () {
  const validYears = [];
  const nextYear = new Date().getFullYear() + 1;
  for (let year = 2021; year < nextYear; year++) {
    try {
      const list = await (await fetch("../assets/data/publication/" + year + ".json")).json();
      appendData(year, list);
      validYears.push(year);
    } catch (error) {
    }
  }
  const linkListE = document.getElementById("year-link-list");
  for (const y of validYears) {
    const link = document.createElement("a");
    link.textContent = y + "年";
    link.href = "#y" + y;
    link.className = "nav-link innner-anchor";
    linkListE.appendChild(link);
  }
});
