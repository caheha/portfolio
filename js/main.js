// Import components
import Header from '/js/components/header.js';
import Divider from './components/divider.js';
import Hero from '/js/components/hero.js';
import Intro from './components/intro.js';
import Skills from '/js/components/skills.js';
import Projects from '/js/components/projects.js';
import About from '/js/components/about.js';
import Footer from '/js/components/footer.js';

// Root
let root = document.getElementById('root');

// Fetch skill icons, projects, and timeline events
const skillIcons = './json/skills.json';
const projectsUrl = 'https://portfolio.caheha.dk/wp-json/wp/v2/posts';
const timelineEvents = './json/timeline.json';

// Fetch function
async function fetchJSON(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}

// Data
export let data = {
    skills: await fetchJSON(skillIcons),
    projects: await fetchJSON(projectsUrl),
    timeline: await fetchJSON(timelineEvents)
}

// Frontpage view
const frontpageHTML = /*html*/`
    ${Header()}
    ${Hero()}
    ${Intro()}
    ${Skills()}
    ${Projects({amount: 3})}
    ${About()}
    ${Footer()}
`;

// Projects view
const projectsHTML = /*html*/`
    ${Header()}
    ${Divider()}
    ${Projects()}
    ${Footer()}
`;

// Render front page
function showFrontPage() {
    render(frontpageHTML);
}

// Render projects
function showProjects() {
    render(projectsHTML);
}

// Render HTML
function render(html) {
    root.innerHTML = html;
    window.scrollTo(0, 0);
}

// Window events
window.onload = showFrontPage();
window.onpopstate = showFrontPage();
window.showProjects = () => showProjects();
window.showFrontPage = () => showFrontPage();

// Scroll to top & bottom
window.scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.scrollBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

// Hero scroll button
window.scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
}