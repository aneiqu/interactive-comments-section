import "./App.css";
import data from "./assets/data/data.json";
import Thread from "./components/comment/Thread";
function App() {
  const comments = data.comments.map((comment) => (
    <Thread key={comment.id} comment={comment} currentUser={data.currentUser.username} />
  ));

  return <div className='bg-veryLightGray w-screen h-screen px-4 py-8 space-y-4'>{comments}</div>;
}

export default App;
