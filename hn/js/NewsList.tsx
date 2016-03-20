
class NewsListProps {
    items: Item[];
}

class NewsList extends React.Component<NewsListProps, {}> {
    getMore() {
        return(
            <div className="newsList-more">
                <a className="newsList-moreLink" href="https://news.ycombinator.com/news?p=2">More</a>
            </div>
        );
    }
    render() {
        return (
            <div className="newsList">
                <NewsHeader/>
                <div clasName="newsList-newsItems">
                    { this.props.items.map((item, index) => {
                        return <NewsItem item={item} rank={index + 1} key={item.id}/>;
                    })}
                </div>
                {this.getMore()}
            </div>
        );
    }
}