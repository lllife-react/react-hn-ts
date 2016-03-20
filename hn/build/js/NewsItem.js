/// <reference path="../../typings/global.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HnComment = (function () {
    function HnComment() {
    }
    return HnComment;
}());
var Item = (function () {
    function Item() {
    }
    return Item;
}());
var NewItemsProps = (function () {
    function NewItemsProps() {
    }
    return NewItemsProps;
}());
var NewsItem = (function (_super) {
    __extends(NewsItem, _super);
    function NewsItem() {
        _super.apply(this, arguments);
    }
    NewsItem.prototype.getRank = function () {
        return (React.createElement("div", {className: "newsItem-rank"}, 
            this.props.rank, 
            "."));
    };
    NewsItem.prototype.getVote = function () {
        return (React.createElement("div", {className: "newsItem-vote"}, 
            React.createElement("a", {href: "http://news.ycombinator.com/vote?for=" + this.props.item.id + "&dir=up&whence=news"}, 
                React.createElement("img", {src: "../img/grayarrow2x.gif", width: "10"})
            )
        ));
    };
    NewsItem.prototype.getCommentLink = function () {
        var commentText = "discuss";
        if (this.props.item.kids && this.props.item.kids.length) {
            commentText = this.props.item.kids.length + ' comments';
        }
        return (React.createElement("a", {href: "http:s//news.ycombinator.com/item?item?id=" + this.props.item.id}, commentText));
    };
    NewsItem.prototype.getSubText = function () {
        return (React.createElement("div", {className: "newsItem-subtext"}, 
            this.props.item.score, 
            " points by ", 
            React.createElement("a", {href: "https://news.ycombinator.com/user?id=" + this.props.item.by}, 
                " ", 
                this.props.item.by, 
                " "), 
            React.createElement("span", null, 
                " 9 hours ago | ", 
                this.getCommentLink(), 
                " ")));
    };
    NewsItem.prototype.getTitle = function () {
        return (React.createElement("div", {className: "newsItems-title"}, 
            React.createElement("div", {className: "newsItem"}, 
                React.createElement("a", {className: "newsItem-titleLink", href: this.props.item.url}, this.props.item.title), 
                React.createElement("span", {className: "newsItem-domain"}, 
                    " (", 
                    this.getDomin(), 
                    ") "))
        ));
    };
    NewsItem.prototype.getDomin = function () {
        return "http://www.google.com";
    };
    NewsItem.prototype.render = function () {
        return (React.createElement("div", {className: "newsItem"}, 
            this.getRank(), 
            this.getVote(), 
            React.createElement("div", {className: "newsItem-itemText"}, 
                this.getTitle(), 
                this.getSubText())));
    };
    return NewsItem;
}(React.Component));
//# sourceMappingURL=NewsItem.js.map