// Data Collections
const structuralSkills = ["HTML", "CSS", "Javascript", "Git", "Github", "Responsive Web Design"];

const skillsContainer = document.querySelector("#skills-container");

structuralSkills.forEach(function (skill) {
    const skillItem = document.createElement("span");
    skillItem.textContent = skill;
    skillItem.classList.add("skill");
    skillsContainer.appendChild(skillItem);
});
const projects = [
    {
        title: "QueueLess Kenya", description: "A simple technology concept designed to reduce unnecessary waiting and improve service experiences.", tech: ["HTML", "CSS", "Javascript"]
    },
    {
        title: "Personal Portfolio", description: "A responsive personal portfolio website built to showcase my skills, project and learning journey.", tech: ["HTML", "CSS", "Javascript"]
    }
];

const projectsContainer = document.querySelector("#projects-container");

projects.forEach(function (project) {
    const projectCard = document.createElement("article");

    projectCard.classList.add("project-card");

projectCard.innerHTML = ` <h3>${project.title}</h3>

<p>${project.description}</p>
<p><strong>Technologies:</strong> ${project.tech.join(", ")}</p>
`;
projectsContainer.appendChild(projectCard);
});