// Import data, used for skill icons
import { data } from '/js/main.js';

export default function Skills() {
    // Make HTML for skill icons
    let html = "";
    for (const skill of data.skills) {
        html += `<div>${skill.icon}<h4>${skill.name}</h4></div>`;
    }

    // Return component
    return /*html*/`
        <section class="skills">
            <div class="max-width">
                <h2 class="centered sixty">My toolbox</h2>
                <p class="centered sixty">These are the tools that I use to make stuff go from idea to reality.</p>    
                <div class="skills-wrapper">${html}</div>
                <p class="centered sixty">... just to name a few. Also, I'm always open to expanding my toolbox.</p>    
            </div>
        </section>
    `;
}