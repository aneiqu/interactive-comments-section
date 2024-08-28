import Comment from "./Comment";
import Reply from "./Reply";

interface PropsType {
  comment: {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    user: { image: { png: string; webp: string }; username: string };
    replies: {
      id: number;
      content: string;
      createdAt: string;
      score: number;
      replyingTo: string;
      user: {
        image: {
          png: string;
          webp: string;
        };
        username: string;
      };
    }[];
  };
  currentUser: string;
}

export default function Thread({ comment, currentUser }: PropsType) {
  const replies = comment?.replies.map((comment) => (
    <Reply key={comment.id} comment={comment} currentUser={currentUser} />
  ));

  return (
    <>
      <Comment comment={comment} currentUser={currentUser} mention='' />
      <div className='border-l-2 pl-4 space-y-4 bg-veryLightGray'>{replies}</div>
    </>
  );
}
