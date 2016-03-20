var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var NewsHeader = (function (_super) {
    __extends(NewsHeader, _super);
    function NewsHeader() {
        _super.apply(this, arguments);
    }
    NewsHeader.prototype.getLogo = function () {
        return (React.createElement("div", {className: "newsHeader-logo"}, 
            React.createElement("a", {href: "https://www.ycombinator.com"}, 
                React.createElement("img", {src: "../img/y18.gif"})
            )
        ));
    };
    NewsHeader.prototype.getTitle = function () {
        return (React.createElement("div", {className: "newsHeader-title"}, 
            React.createElement("a", {className: "newsHeader-textLink", href: "https://news.ycombinator.com"}, "Hacker News")
        ));
    };
    NewsHeader.prototype.render = function () {
        return (React.createElement("div", {className: "newsHeader"}, 
            this.getLogo(), 
            this.getTitle()));
    };
    return NewsHeader;
}(React.Component));
ReactDOM.render(React.createElement(NewsHeader, null), $("#content")[0]);
//# sourceMappingURL=NewsHeader.js.map