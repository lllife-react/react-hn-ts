/// <reference path="../../typings/global.d.ts" />

$.ajax({
    url: "/hn/json/items.json"
}).then( items => {
    ReactDOM.render(<NewsItem item={items[0]} rank={1} />, $("#content")[0]);
});