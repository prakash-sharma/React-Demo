import React, { Component } from 'react';
import '../inner-component/css/resources.css';

class Resources extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: [],
        visible: 2,
        error: false
      };
    }
  
    loadMore = () => {
      this.setState((prev) => {
        return {visible: prev.visible + 4};
      });
    }
  
    componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/posts").then(
        res => res.json()
      ).then(res => {
        this.setState({
          items: res
        });
      }).catch(error => {
        console.error(error);
        this.setState({
          error: true
        });
      });
    }
  
    render() {
      return (
        <section className="feed">
          <h1>Simple Load More/Pagination with React</h1>
          <div className="tiles" aria-live="polite">
            {this.state.items.slice(0, this.state.visible).map((item, index) => {
                return (
                  <div className="tile fade-in" key={item.id}>
                    <span className="count">{index+1}</span>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                  </div>
                );
              })}
            </div>
            {this.state.visible < this.state.items.length &&
               <button onClick={this.loadMore} type="button" className="load-more">Load more</button>
            }
          </section>
      );
    }
  }
  export default Resources;