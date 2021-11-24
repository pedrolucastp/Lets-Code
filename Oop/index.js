{
  const h1 = document.querySelector("#titulo");
  const titulo = document.createElement("h1");
  titulo.innerText = "Lista de Skills";
  h1.append(titulo);
}

{
// const lista = document.querySelector("#lista");
// const materias = ["HTML", "JavaScript", "CSS", "React"];

// materias.forEach((materia) => {
//   const novaMateria = document.createElement("li");
//   novaMateria.innerText = materia;
//   lista.append(novaMateria);
// })
}

const newSkillForm = document.querySelector('[data-formulario]')
const newSkillInput = document.querySelector('#novo_skill')
const skillsUL = document.querySelector('#lista')
let skills

loadLocalStorage()

function loadLocalStorage() {
    const localStorageSkills = JSON.parse(
      localStorage.getItem('skills')
    )
    skills = localStorageSkills ? localStorageSkills : []
    skills.forEach(skill => renderSkillLi(skill))
}

newSkillForm.onsubmit = function(event) {
  event.preventDefault()

  const skill = newSkillInput.value.trim()

  if (!skill) {
    newSkillInput.value = ""
    return
  }

  if (skills.includes(skill)) {
    return
  }
  renderSkillLi(skill)
  saveSkill(skill)
}

function renderSkillLi(skill) {
  const li = document.createElement('li')
  
  const skillText = document.createElement('span')
  skillText.innerText = skill

  const removeButton = document.createElement('button')
  removeButton.innerText = 'Remover'

  removeButton.onclick = function() {
      skillsUL.removeChild(li)
      deleteSkill(skill)
    }

    li.append(removeButton)
    li.append(skillText)

  skillsUL.append(li)
}

function saveSkill(skill) {
    skills.push(skill)
    localStorage.setItem('habilidades', JSON.stringify(skills))
    newSkillInput.value = ""
}

function deleteSkill(skillToDelete) {
    skills = skills.filter (skill => skill !== skillToDelete)
    localStorage.setItem('habilidades', JSON.stringify(skills))
}