/// <reference path="../../typings/global.d.ts" />

class HnComment {

}

class Item {
    id: number;
    url: string;
    title: string;
    kids: HnComment[];
    score: number;
    by: string;
}


class NewItemsProps {
    item: Item;
    rank: number;
}

class NewsItem extends React.Component<NewItemsProps, {}> {

    getRank() {
        return (
            <div className="newsItem-rank">
                {this.props.rank}.
            </div>
        );
    }

    getVote() {
        return (
            <div className="newsItem-vote">
                <a href={`http://news.ycombinator.com/vote?for=${this.props.item.id}&dir=up&whence=news`}>
                    <img src="../img/grayarrow2x.gif" width="10"/>
                </a>
            </div>
        );
    }

    getCommentLink() {
        var commentText = "discuss";
        if (this.props.item.kids && this.props.item.kids.length) {
            commentText = this.props.item.kids.length + ' comments';
        }

        return (
            <a href={`http:s//news.ycombinator.com/item?item?id=${this.props.item.id}`}>
                {commentText}
            </a>
        );
    }

    getSubText() {
        return(
            <div className="newsItem-subtext">
                {this.props.item.score} points by <a href={`https://news.ycombinator.com/user?id=${this.props.item.by}`}> {this.props.item.by} </a>
                <span> 9 hours ago | {this.getCommentLink()} </span>
            </div>
        );
    }

    getTitle() {
        return (
            <div className="newsItems-title">
                <div className="newsItem">
                    <a className="newsItem-titleLink" href={this.props.item.url}>
                        {this.props.item.title}
                    </a>
                    <span className="newsItem-domain"> ({this.getDomin()}) </span>
                </div>
            </div>
        );
    }

    getDomin() {
        var tmp = document.createElement ('a');
        tmp.href = this.props.item.url; 
        return tmp.host;
    }

    render() {
        return (
            <div className="newsItem">
                {this.getRank()}
                {this.getVote()}
                <div className="newsItem-itemText">
                    {this.getTitle()}
                    {this.getSubText()}
                </div>
            </div>
        );
    }
}

