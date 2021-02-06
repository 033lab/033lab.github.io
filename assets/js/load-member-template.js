async function appendData(jsonPath, containerId) {
  const currentStudents = await (await fetch(jsonPath)).json();

  const content = document.getElementById('research-member-template').content;
  const fragment = document.createDocumentFragment();

  for (const data of currentStudents) {
    const clone = document.importNode(content, true);

    const image = clone.querySelector('img');
    const ja = clone.querySelector('h5');
    const en = clone.querySelector('h6');

    image.src = "../assets/imgs/members/" + data.img;
    en.textContent = data.en;
    ja.textContent = data.ja;

    fragment.appendChild(clone);
  }

  document.getElementById(containerId).appendChild(fragment);
}
$(document).ready(async function () {
  await appendData("../assets/data/current-students.json", "research-student-container");
  await appendData("../assets/data/teachers.json", "research-teacher-container");
});