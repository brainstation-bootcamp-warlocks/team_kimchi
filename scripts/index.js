class Header {
    constructor(title, home) {
        this.title = title;
        this.home = home;
    }

    render() {
        return `
        <div>
            <h1>BecomeBartender</h1>
        </div>
        <nav> 
            <ul>
                <li>Home</li>
            </ul>
        </nav>
        `
    }
}

const header = document.getElementById("header")