import './trending.css';

export class App {
    constructor(appContainer) {
        this.refresh = this.refresh.bind(this);
        this.container = appContainer;
        this.init();
    }

    init() {
        if (!document.body.contains(this.container)) {
            throw new Error('No app container');
        }
        this.refresh();
    }

    async refresh() {
        this.trends = null;
        this.render();
        this.trends = await fetch('http://localhost:4002/trending').then(r => r.json());
        this.render();
    }

    render() {
        const {
            container,
            trends,
        } = this;

        container.innerHTML = `
          <div class="trending-container">
            <h1>Trending</h1>
            <ul class="trending-list">
                ${trends ? trends.map(trend => `<li>${trend}</li>`).join('') : ''}
                ${!trends ? `<loader-component></loader-component>` : ''}
            </ul>
            <button class="trending-button">Stay fresh!</button>
          </div>
        `;

        container.querySelector('button').addEventListener('click', this.refresh, {once: true});
    }
}
