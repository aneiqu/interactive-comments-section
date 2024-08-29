import "./App.css";
import data from "./assets/data/data.json";
import Thread from "./components/comment/Thread";
import { getAvatarURL } from "./utils/image-util";

function App() {
  const comments = data.comments.map((comment) => (
    <Thread key={comment.id} comment={comment} currentUser={data.currentUser.username} />
  ));

  return (
    <div className='bg-veryLightGray w-screen py-8 px-4 min-w-[320px]'>
      <div className='space-y-4 mb-[1.125rem] bg-veryLightGray'>{comments}</div>

      <div className='bg-white rounded-xl p-4 pb-[0.8125rem] w-full space-y-4'>
        <textarea
          maxLength={512}
          rows={3}
          placeholder='Add a comment...'
          className='resize-none px-6 py-3 outline w-full outline-lightGray outline-1 rounded-lg'
        ></textarea>
        <div className='flex justify-between items-center'>
          <img src={getAvatarURL(data.currentUser.image.png)} width={32} height={32} />
          <button className='uppercase bg-moderateBlue text-white text-base font-bold px-[1.875rem] py-3 rounded-lg'>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
