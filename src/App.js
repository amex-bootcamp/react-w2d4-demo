import { Switch, Route } from "react-router-dom";

import "./App.css";

import Question from "./components/Jeopardy/Question/Question";
import CategoryList from "./components/Jeopardy/CategoryList/CategoryList";
import QuestionByCategoryList from "./components/Jeopardy/QuestionByCategoryList/QuestionByCategoryList";
import QuestionList from "./components/Jeopardy/QuestionList/QuestionList";

import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import PostList from "./components/PostList/PostList";
import Post from "./components/Post/Post";
import UserList from "./components/UserList/UserList";
import User from "./components/User/User";

function App() {
  return (
    <div>
      <header>
        <h1>Welcome to my App</h1>
        <Navigation />
      </header>

      <main>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <About />
          <UserList />
          <User />
          <PostList />
          <Post />
          <Question />
          <CategoryList />
          <QuestionByCategoryList />
          <QuestionList />
        </Switch>
      </main>
    </div>
  );
}

export default App;
