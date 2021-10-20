// Import data, used for projects
import { data } from '/js/main.js';

export default function Projects(props) {
    // Make button based on props
    const button = props ? `<button class="centered button" onclick="showProjects()">Show more</button>`
                         : `<button class="centered button" onclick="showFrontPage()">Go back</button>`;

    // Make projects array and empty title
    let projects = [];
    let title = "";


    // Replace title depending on which page you are on
    // Slice array based on amount prop
    if (props && props.amount) {
        projects = data.projects.slice(0, props.amount);
        title = /*html*/`
            <h2 class="centered sixty">My projects</h2>
            <p class="centered sixty">Here's some stuff that I've helped bring to life.</p>
        `;
    } else {
        projects = data.projects;
        title = /*html*/`
            <h2 class="centered sixty">All my projects</h2>
        `;
    }

    // Make HTML for projects in array
    let html = "";
    for (const project of projects) {
        html += /*html*/`
            <a class="project" href="${project.acf.prototype_url}" target="_blank">
                <img src="${project.acf.img.url}">
                <div class="overlay">
                    <h3>${project.acf.title}</h3>
                    <p>${project.acf.description}</p>
                </div>
            </a>
        `;
    }

    // Return component
    return /*html*/`
        <section class="projects">
            <div class="max-width">
                ${title}
                <div class="projects-wrapper">${html}</div>
                ${button}
            </div>
        </section>
    `;
}