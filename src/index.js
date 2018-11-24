import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import Navigate from './components/nav.jsx';
import Home from './components/Home.jsx';
import Examples from './components/examples.jsx';
import Author from './components/author.jsx';
import Conditioner from './components/conditioner.jsx';
import Timer from './components/Timer.jsx';
import LanguageForm from './components/List.jsx';
import BlurButton from './components/button.jsx';
import LoginForm from './components/SubmitLP.jsx';
import App from './components/srcWithForm/App.jsx';
import PersonForm from './components/PersoFormTar.jsx';
import FilterProduct from './components/search/Appsearch.jsx';
import AppNews from './components/AppNews.jsx';
import FileInput from './components/fileInput.jsx';
import NotFound from './components/notfound.jsx';



ReactDOM.render(<Router>
                    <div>
                        <Navigate />
                        <Switch>
                           
                            <Route exact path="/"
                                component={Home}
                                />
                            <Route exact path="/examples"
                                component={Examples}
                                />
                            <Route exact path="/examples/conditioner"
                                component={Conditioner}
                                />
                            <Route exact path="/examples/timer"
                                component={Timer}
                                />
                            <Route exact path="/examples/list"
                                component={LanguageForm}
                                />
                            <Route path="/author"
                                component={Author}
                                />
                            <Route exact path="/examples/button"
                                component={BlurButton}
                                />
                            <Route exact path="/examples/lp"
                                component={LoginForm}
                                />
                            <Route exact path="/examples/form"
                                component={App}
                                />
                            <Route exact path="/examples/perform"
                                component={PersonForm}
                                />
                            <Route exact path="/examples/searchf"
                                component={FilterProduct}
                                />
                            <Route path="/examples/news"
                                component={AppNews}
                                />
                            <Route path="/examples/file"
                                component={FileInput}
                                />
                            <Route component={NotFound}
                                />
                        </Switch>
                    </div>
                </Router>,
                document.getElementById("app"));