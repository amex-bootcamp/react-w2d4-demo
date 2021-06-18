import "./App.css";
import Question from "./components/Question/Question";
import CategoryList from "./components/CategoryList/CategoryList";
import QuestionByCategoryList from "./components/QuestionByCategoryList/QuestionByCategoryList";
import QuestionList from "./components/QuestionList/QuestionList";
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
      <Home />
      <About />
      <UserList />
      <User />
      <PostList />
      <Post />
      <Question />
      <CategoryList />
      <QuestionByCategoryList />
      <QuestionList />
    </div>
  );
}

export default App;
