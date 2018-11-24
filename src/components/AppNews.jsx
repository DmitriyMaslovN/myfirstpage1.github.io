import React from 'react';
import ReactDOM from 'react-dom';   
    const myNews = [
        
        {
            id: 1,
            author: "Tom Smith",
            text: "some article",
            secText: "continue first some article"
        },
        {
            id: 2,
            author: "Jack Torn",
            text: "the second some article",
            secText: "again continue but second article"
        },
        {
            id: 3,
            author: "Black Jack",
            text: " the third, but intresting article",
            secText: " bigger continue the third interesting article"
        },
        {
            id: 4,
            author: "Phil Jenkinson",
            text: "the story about his life",
            secText: "the story about his life, and continue his story"
        }
    ];
        
    class Article extends React.Component{
            
            state = {
                visible: false,
            }

        handleClick = (e) => {
            e.preventDefault();
            this.setState({visible: true})
           
        }
       
        
        render(){
            const {author, text, secText} = this.props.data;
            const { visible } = this.state;
            return (
                <div className="article">
                    <p className="news_author">{author}:</p>
                    <p className="news_text">{text}</p>
                    {
                        !visible && <a onClick={this.handleClick} 
                                        href="#" className="news_readmore">
                                        Readmore
                                    </a>
                    }
                    {
                        visible && <p className="news_sec-text">{secText}</p>
                    }
                    
                </div>
            );
            }
        }

   
        
    class News extends React.Component{
         renderNews = () => {
          const { data } = this.props;
          let newsTemplate = null
          
          if(data.length){
            newsTemplate = data.map(function(item) {
                return(
                    <Article key={item.id} data={item}/>
                )
          })
          } else {
             newsTemplate =  <p>Unfortunately doesn't have news</p>
          }
          
        return newsTemplate
      }
      
          render() {
              const { data } = this.props // similarly data = this.props.data
              return(
            <div className="news">
                  {this.renderNews()}
                  {
                    data.length ? <strong >
                                        All the news: {data.length}
                                    </strong> : null
                  }
                  
              </div>
          );
        }
      }
      
     
  
        
    class Add extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                name: '',
                text: '',
                secText: '',
                agree: false
            }
        }
        validated = () => {
            const {name, text, agree} = this.state;
            if(name.trim() && text.trim() && agree){
                return true;
            }
            return false;
        }
        onButtonClick = (e) => {
            const {name, text, secText} = this.state
            this.props.onAddNews({
                id: +new Date(), // id contains the number of ms. tha have passed since 1 jan 1970 
                author: name,
                text,
                secText
            })
            e.preventDefault();
        }
        handleChange = (e) => {
            const {id, value} = e.currentTarget
            this.setState({[id]: e.currentTarget.value})
        }
       
        handleCheckboxChange = (e) => {
            this.setState({agree: e.currentTarget.checked})
        }
        
        render(){
            const { text, name, secText, agree } = this.state
         return(
            <form className="add">
                <input 
                    id="name"
                    type="text"
                    className="add_author"
                    placeholder="your name"
                    onChange={this.handleChange}
                    value={name}
                    />
                 <textarea
                     id="text"
                     placeholder="input news"
                     className="add_text"
                     onChange={this.handleChange}
                     value={text}>
                 </textarea> 
                 <textarea 
                     id="secText"
                     placeholder="input second text"
                     className="sec_text"
                     onChange={this.handleChange}
                     value={secText}>
                </textarea>
                 <label className="add_checkrule">
                     <input type="checkbox" 
                         onChange={this.handleCheckboxChange}/> I am agree with the rules
                </label>
               
                <button 
                    onClick={this.onButtonClick}
                    className="add_btn"
                    disabled={!this.validated()}>
                    Show alert
                </button>
            </form>
                );
            }
        }
    
        
    class AppNews extends React.Component {
        state ={
            news: myNews
        }
        handleAddNews = (data) => {
           const nextNews = ([data, ...this.state.news])
           this.setState({news: nextNews})
        }
        render() {
          return (
            <React.Fragment>
                <h3>News</h3>
                <Add onAddNews={this.handleAddNews}/>
                <News data={this.state.news} /> {/* comment */}
            </React.Fragment>
        )
        }
    }
   
   export default AppNews;
 