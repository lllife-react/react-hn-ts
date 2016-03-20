$.ajax({
    url: "/hn/json/items.json"
}).then(function (items) {
    ReactDOM.render(React.createElement(NewsList, {items: items}), $("#content")[0]);
});
//# sourceMappingURL=NewsListTest.js.map