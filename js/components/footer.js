export default function Footer() {
    // Return component
    return /*html*/`
        <footer class="footer">
            <div class="max-width">
                <div class="logo">
                    <img src="/img/logo.svg" onclick="scrollToTop()">
                </div>
                <nav class="footer-nav" id="contact">
                    <a href="https://github.com/caheha" target="_blank"><i class="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/casperhedegaardhansen" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                    <a href="mailto:caheha@hotmail.com" target="_blank"><i class="far fa-envelope"></i></a>
                </nav>
                <h5>Casper Hedegaard Hansen © 2021</h5>
            </div>
        </footer>
    `;
}