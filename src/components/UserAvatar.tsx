const UserAvatar = ({imageUrl}) => {
  return (
    <div className=" h-20 w-20 overflow-hidden">
      <img
        className="rounded-full h-full w-full object-cover object-center"
        src={imageUrl}
        alt=""
      />
    </div>
  );
};

export default UserAvatar;
