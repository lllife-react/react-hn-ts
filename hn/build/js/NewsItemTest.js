/// <reference path="../../typings/global.d.ts" />
$.ajax({
    url: "/hn/json/items.json"
}).then(function (items) {
    ReactDOM.render(React.createElement(NewsItem, {item: items[0], rank: 1}), $("#content")[0]);
});
//# sourceMappingURL=NewsItemTest.js.map