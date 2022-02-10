$(document).ready(async function () {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  const titleE = document.getElementById('title-placeholder');
  const authorsE = document.getElementById('authors-placeholder');
  const procE = document.getElementById('proc-placeholder');
  const abstractE = document.getElementById('abstract-placeholder');
  const keyvisualE = document.getElementById('keyvisual-placeholder');

  const nextYear = new Date().getFullYear() + 1;
  for (let year = 2021; year < nextYear; year++) {
    try {
      const list = await (await fetch("../assets/data/publication/" + year + ".json")).json();
      const item = list.find(x => x.id == id);
      if (item) {
        titleE.textContent = item.title;
        authorsE.textContent = item.authors;
        procE.textContent = item.proc;
        abstractE.textContent = item.abstract;
        break;
      }
    } catch (error) { }
  }

  keyvisualE.src = "../assets/data/publication-detail/" + id + "/keyvisual.png";
});
