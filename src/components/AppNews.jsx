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
                visible: false
            }
            onClickSecText = (e) => {
                e.preventDefault();
                this.setState({visible: true})
            }
            render(){
                const {author, text, secText} = this.props.data;
                const { visible } = this.state; 
                return(
                    <div className="article">
                        <p className="news_author">{author}:</p>
                        <p className="news_text">{text}</p>
                        {
                            !visible && <a onClick={this.onClickSecText}
                                            href="#">
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
                let newsTamplate = null;
                const {data} = this.props;
                
                if(data.length){
                newsTamplate = data.map(function(item){
                    return <Article key={item.id} data={item}/>
                })
                } else {
                    newsTamplate =  <p>Ufortunately isn't news</p>
                }
                return newsTamplate;
            }
            render() {
                const{data} = this.props
                return (
                    <div className="news">
                        {this.renderNews()}
                        {
                            data.length ? <strong>
                                    All the news: {data.length}
                                    </strong>: null
                        }
                    </div>
                )
            }
        }
       
        class Add extends React.Component{
            constructor(props){
                super(props);
                this.state = {
                    author: '',
                    text: '',
                    secText: '',
                    agree: false
                }
            }
            validate = () => {
                const {author, text, secText, agree} = this.state
                if(author.trim() && author.length > 3 
                   && 
                   text.trim() && text.length > 6 
                   &&
                   secText.trim() && secText.length > 6 
                   &&
                   agree){
                    return true;
                }
                return false;
            }
            onButton = (e) => {
                e.preventDefault();
                const {author, text, secText} = this.state
                this.props.onHandlerNews({
                    id: +new Date(), // id contains numbers of ms. that have passed since 1 jan 1970
                    author,
                    text,
                    secText
                })
                
            }
            onHandlerChange = (e) => {
                const {id, value} = e.currentTarget;
                this.setState({[id]: e.currentTarget.value})
            }
            handleCheckbox = (e) => {
               this.setState({agree: e.currentTarget.checked})
            }
            render(){
                const {author, text, secText, agree} = this.state
                return(
                    <form className="add">
                        <input type="text"
                            placeholder="Input Author..."
                            className="add_author"
                            id="author"
                            onChange={this.onHandlerChange}
                            value={author}
                            />
                        <textarea placeholder="Input Text..."
                            id="text"
                            onChange={this.onHandlerChange}
                            value={text}
                            className="add_text">
                        </textarea>
                        <textarea placeholder="Input Secondary Text"
                            id="secText"
                            className="sec-text"
                            onChange={this.onHandlerChange}
                            value={secText}>
                        </textarea>
                        <label className="add_chekrule">
                        <input type="checkbox"
                            onChange={this.handleCheckbox}/>
                            I agree with the rules
                        </label>
                        <button className="add_btn"
                            onClick={this.onButton}
                            disabled={!this.validate()}>
                            Show last news
                        </button>
                    </form>
                )
            }
        }
        class AppNews extends React.Component{
            state ={
                news: myNews
            }
            onAddNews = (data) => {
                const lastNews = ([data, ...this.state.news])
                this.setState({news: lastNews})
            }
            render(){
                return(
                    <React.Fragment>
                        <h3>News</h3>
                        <Add onHandlerNews={this.onAddNews}/>
                        <News data={this.state.news}/>
                        </React.Fragment>
                )
            }
        }
   
   export default AppNews;
 