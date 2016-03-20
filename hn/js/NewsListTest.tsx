
$.ajax({
    url: "/hn/json/items.json"
}).then(items => {
    ReactDOM.render(<NewsList items={items}/>, $("#content")[0]);
});