// Import data, used for timeline events
import { data } from '/js/main.js';

export default function About() {
    // Details
    const birthDate = new Date("1998-05-04");
    const occupation = "Multimedia Design student specialising in frontend development";
    const location = "Business Academy Aarhus";
    
    // Calculate age
    const today = new Date();
    const age = new Date(today - birthDate.getTime()).getFullYear() - 1970;

    // Make HTML for timeline events
    let html = "";
    for (const event of data.timeline) {
        html += /*html*/`
            <div class="timeline-event">
                <div>
                    <p>${event.from} - ${event.to}</p>
                    <div class="circle"></div>
                </div>
                <div>
                    <h4>${event.subject}</h4>
                    <p>${event.location}</p>
                </div>
            </div>
        `;
    }

    // Add "what's next" to timeline
    html += /*html*/`
        <div class="timeline-event">
            <div>
                <p>?</p>
                <div class="circle"></div>
            </div>
            <div>
                <h4>What's next?</h4>
                <p>Maybe you can help decide</p>
            </div>
        </div>
    `;

    // Return component
    return /*html*/`
        <section class="about">
            <div class="max-width">
                <h2 class="centered sixty">Who am I?</h2>
                <p class="centered sixty">Long story short, I'm Casper, a ${age}-year-old guy from Denmark, who is currently a ${occupation} at ${location}.</p>
                <div class="timeline-wrapper">
                    <h3 class="centered">My journey so far</h3>
                    <div class="timeline">${html}</div>
                </div>
                <div class="columns">
                    <div class="column">
                        <i class="fas fa-user"></i>
                        <h3>Who am I?</h3>
                        <p>If I had to describe myself in one word, it would be curious.</p>
                        <p>I like trying, learning, and exploring new things. If I work on something that I'm passionate about, it's easy for me to lose track of time.</p>
                        <p>I'm also extremely detail-oriented and like when things are well-organised.</p>
                        <p>I enjoy helping other people, not only to put a smile on their face, but also because I believe it's one of the best ways to meet new challenges, gain more experience, and become better at what you're already good at.</p>
                    </div>
                    <div class="column">
                        <i class="fas fa-hand-holding"></i>
                        <h3>What can I offer?</h3>
                        <p>I approach the projects that I work on in a very analytical manner, where I try to gather as much insight as possible.</p>
                        <p>Because of this, I can find innovative and structured approaches to my solutions, and I'm able to deliver solutions that are tailored to the specific project.</p>
                        <p>With a lot of experience in project work, I'm able to work efficiently both in teams and independently.</p>
                        <p>In a team, I share my own knowledge and expertise as best as possible to strengthen the broader understanding and possibilites of the project.</p>
                    </div>
                    <div class="column">
                        <i class="fas fa-running"></i>
                        <h3>My interests</h3>
                        <p>Needless to say, I love coding, graphical work, and content creation.</p>
                        <p>Technology has always been a big part of my life, which is why a lot of my hobbies revolve around it.</p>
                        <p>To not get completely soaked into the digital world, I travel and explore as a way to get outside, which ties in great with my photography hobby.</p>
                        <p>Seeing as a lot of my hobbies invovle me sitting at a desk, I go for runs and long walks to stay healthy.</p>
                        <p>Other than that, I enjoy spending time with friends and family</p>
                    </div>
                </div>
            </div>
        </section>
    `;
}