import React, { Component } from 'react';
import CtaImage from '../../images/dummy_images.png';
import './css/cta-with-grid.css';

const loadData = require('../../json/blog.json');

class CtaGrid extends Component {
    constructor(props){
        super(props);
        this.state={
            job:loadData,
            visible: 3,
            item: [],
            term: '',
            url: ''
         }
         this.loadMore = this.loadMore.bind(this);
         this.setItem = this.setItem.bind(this);
         this.searchHandler = this.searchHandler.bind(this);
         this.searchOuter = this.searchOuter.bind(this);
    }
    searchOuter(term){
        return function(x){
            return x.post_heading.toLowerCase().includes(term.toLowerCase()) || !term;
        }
    }
    searchHandler(event){
        this.setState({
            term: event.target.value
        })
    }

    setItem(){
        let arr=[];
        for(let i=0;i< this.state.job.length;i++ ){
            if(arr.indexOf(this.state.job[i].category) < 0){
                arr.push(this.state.job[i].category);
            }
        }
        this.setState({
            item: arr
        })
    }
    loadMore(){
        this.setState((prev) => {
            return {visible:prev.visible +3}
        })
        
    }
    componentDidMount=()=> {
        var th = this;
        this.setItem();
      }
    render() {
        return (
            <div className="cta-with-grid">
                <div className="container">
                <div className="filter-Button">
                <form>
                    <input type="text" 
                            onChange={this.searchHandler}
                            value={this.state.term}
                            placeholder= "Search on Blog"
                    />
                </form>
                    <div className="check-box">
                        <ul>
                            {this.state.item.map(function(item,i){
                                return(
                               <li key={i}>
                               <input type="checkbox" value={item} id={item}/>
                               <label htmlFor={item}>{item}</label>
                                </li> 
                                );
                            })}
                        </ul>
                    </div>
                </div>
                  <div className="col-outer">
                        <h1>{this.state.jobs}</h1>
                  {this.state.job.filter(this.searchOuter(this.state.term)).slice(0, this.state.visible).map(function(job) {
                      return(
                        <div className="col-three" key={job.id}>
                        <div className="image">
                            <img src={CtaImage} alt={job.background.alt}/>
                        </div>
                        {job.id}
                         <div className="content">
                            <h3>{job.post_heading}</h3>
                            <p>{job.post_blurb} </p>
                            <div className="button"><a className="btn-default btn-orange" href="/signup"><span>Learn More</span></a></div>
                        </div>
                        </div>
                      );
                      
                  })} 
                  </div>    
                  {this.state.visible < this.state.job.length  && 
                        <button onClick={this.loadMore} type="button" className="load-more">Load more</button>
                    }       
                </div>
            </div>
        )
    }
    
}

export default CtaGrid;