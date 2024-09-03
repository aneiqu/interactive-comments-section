import { useEffect, useState } from "react";
import deleteIcon from "../../assets/images/icon-delete.svg";
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
  remove: (id: any) => void;
}

export default function Comment({ comment, currentUser, mention, remove }: PropsType) {
  const [reacted, setReacted] = useState({ [comment.id]: 0 });

  const handleDelete = (id) => {
    remove(id);
  };

  const likeComment = (id: number) => {
    if (reacted[id] === 1) return removeReaction(id);
    setReacted((prevState) => ({
      ...prevState,
      [id]: 1,
    }));
  };
  const dislikeComment = (id: number) => {
    if (reacted[id] === -1) return removeReaction(id);
    setReacted((prevState) => ({
      ...prevState,
      [id]: -1,
    }));
  };
  const removeReaction = (id: number) => {
    setReacted((prevState) => ({
      ...prevState,
      [id]: 0,
    }));
  };

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
            <div
              className='h-full flex items-center group cursor-pointer'
              onClick={() => likeComment(comment.id)}
            >
              <svg width='11' height='11' xmlns='http://www.w3.org/2000/svg'>
                <path
                  className={`group-hover:fill-moderateBlue ${
                    reacted[comment.id] === 1 ? "fill-moderateBlue" : ""
                  }`}
                  d='M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z'
                  fill='#C5C6EF'
                />
              </svg>
            </div>
            <p className='font-medium text-base text-moderateBlue'>
              {comment?.score + reacted[comment.id]}
            </p>
            <div
              className='h-full flex items-center group cursor-pointer'
              onClick={() => dislikeComment(comment.id)}
            >
              <svg width='11' height='3' xmlns='http://www.w3.org/2000/svg'>
                <path
                  className={`group-hover:fill-moderateBlue ${
                    reacted[comment.id] === -1 ? "fill-moderateBlue" : ""
                  }`}
                  d='M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z'
                  fill='#C5C6EF'
                />
              </svg>
            </div>
          </div>
          <>
            {comment?.user.username === currentUser ? (
              <div className='flex gap-4'>
                <span
                  className='flex items-center mt-0.5 gap-2'
                  onClick={() => handleDelete(comment.id)}
                >
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
