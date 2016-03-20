var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var NewsListProps = (function () {
    function NewsListProps() {
    }
    return NewsListProps;
}());
var NewsList = (function (_super) {
    __extends(NewsList, _super);
    function NewsList() {
        _super.apply(this, arguments);
    }
    NewsList.prototype.getMore = function () {
        return (React.createElement("div", {className: "newsList-more"}, 
            React.createElement("a", {className: "newsList-moreLink", href: "https://news.ycombinator.com/news?p=2"}, "More")
        ));
    };
    NewsList.prototype.render = function () {
        return (React.createElement("div", {className: "newsList"}, 
            React.createElement(NewsHeader, null), 
            React.createElement("div", {clasName: "newsList-newsItems"}, this.props.items.map(function (item, index) {
                return React.createElement(NewsItem, {item: item, rank: index + 1, key: item.id});
            })), 
            this.getMore()));
    };
    return NewsList;
}(React.Component));
//# sourceMappingURL=NewsList.js.map