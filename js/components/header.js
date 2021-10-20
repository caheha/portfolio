export default function Header() {
    // Return component
    return /*html*/`
        <header class="header">
            <nav class="max-width">
                <div class="logo">
                    <img src="/img/logo.svg" onclick="showFrontPage()">
                </div>
                <div class="nav-button">
                    <button onclick="scrollBottom()">Contact me</button>
                </div>
            </nav>
        </header>
    `;
}