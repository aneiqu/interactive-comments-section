import Comment from "./Comment";

interface PropsType {
  comment: {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    replyingTo: string;
    user: { image: { png: string; webp: string }; username: string };
  };
  currentUser: string;
  remove: (id: any) => void;
}

export default function Reply({ comment, currentUser, remove }: PropsType) {
  return (
    <Comment
      comment={comment}
      currentUser={currentUser}
      mention={comment.replyingTo}
      remove={remove}
    />
  );
}
