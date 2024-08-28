import deleteIcon from "../../assets/images/icon-delete.svg";
import minusIcon from "../../assets/images/icon-minus.svg";
import plusIcon from "../../assets/images/icon-plus.svg";
import replyIcon from "../../assets/images/icon-reply.svg";
import { getAvatarURL } from "../../utils/image-util";

interface PropsType {
  comment: {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    user: { image: { png: string; webp: string }; username: string };
  };
  currentUser: string;
  mention: string;
}

export default function Comment({ comment, currentUser, mention }: PropsType) {
  return (
    <>
      <div className='p-4 space-y-4 bg-white rounded-lg'>
        <div className='flex space-x-4 items-center'>
          <img src={getAvatarURL(comment?.user.image.png)} alt='avatar' width={32} />
          <span className='flex items-center gap-2'>
            <p className='font-medium text-base text-darkBlue'>{comment?.user.username}</p>
            {comment?.user.username === currentUser ? (
              <div className='flex pl-[0.375rem] pr-[0.4375rem] rounded-sm bg-moderateBlue'>
                <p className='font-medium text-[0.8125rem] text-white'>you</p>
              </div>
            ) : (
              ""
            )}
          </span>
          <p className='font-normal text-base text-grayishBlue'>{comment?.createdAt}</p>
        </div>
        <div>
          <p className='font-normal text-base text-grayishBlue'>
            <a className='text-moderateBlue font-bold'>{mention ? `@${mention} ` : ""}</a>
            {comment?.content}
          </p>
        </div>
        <div className='flex justify-between'>
          <div className='bg-veryLightGray flex items-center justify-evenly w-[6.25rem] h-10 rounded-[0.625rem]'>
            <img src={plusIcon} width={10} alt='like' />
            <p className='font-medium text-base text-moderateBlue'>{comment?.score}</p>
            <img src={minusIcon} width={10} alt='dislike' />
          </div>
          <>
            {comment?.user.username === currentUser ? (
              <div className='flex gap-4'>
                <span className='flex items-center mt-0.5 gap-2'>
                  <img src={deleteIcon} width={12} />
                  <p className='font-medium text-base text-softRed'>Delete</p>
                </span>
                <span className='flex items-center gap-2'>
                  <img src={replyIcon} width={14} />
                  <p className='font-medium text-base text-moderateBlue'>Reply</p>
                </span>
              </div>
            ) : (
              <div className='flex items-center gap-2'>
                <img src={replyIcon} width={14} />
                <p className='font-medium text-base text-moderateBlue'>Reply</p>
              </div>
            )}
          </>
        </div>
      </div>
    </>
  );
}
