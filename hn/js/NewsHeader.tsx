
class NewsHeader extends React.Component<any, {}> {
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
            </div>
        );
    }
}

ReactDOM.render(<NewsHeader />, $("#content")[0])
