
class Link {
    name: string;
    url: string;

    constructor(name, url) {
        this.name = name;
        this.url = url;
    }
}

class NewsHeader extends React.Component<any, {}> {

    getNav() {
        var navLinks = [
            new Link("new", "newnest"),
            new Link("coments", "newcomments"),
            new Link("show", "show"),
            new Link("ask", "ask"),
            new Link("jobs", "jobs"),
            new Link("submit", "submit")
        ];

        return (
            <div className="newsHeader-nav">
                {navLinks.map(link => {
                    return (
                        <a key={link.url} className="newsHeader-navLink newsHeader-textLink" href={`https://news.ycombinator.com/${link.url}`}>
                            {link.name}
                        </a>
                    );
                })}
            </div>
        );
    }

    getLogo() {
        return (
            <div className="newsHeader-logo">
                <a href="https://www.ycombinator.com"><img src="../img/y18.gif"/></a>
            </div>
        );
    }

    getTitle() {
        return (
            <div className="newsHeader-title">
                <a className="newsHeader-textLink" href="https://news.ycombinator.com">Hacker News</a>
            </div>
        );
    }

    render() {
        return (
            <div className="newsHeader">
                {this.getLogo()}
                {this.getTitle()}
                {this.getNav()}
            </div>
        );
    }
}

ReactDOM.render(<NewsHeader />, $("#content")[0])
