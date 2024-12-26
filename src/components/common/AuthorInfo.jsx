const AuthorInfo = ({ name, image, date }) => {
  return (
    <div className="mt-5 flex items-center text-font-s text-mid-grey">
      <img className="w-9 rounded-full" src={image} alt="" />
      <span className="ml-3 mr-5">{name}</span>
      <span>{date}</span>
    </div>
  );
};

export default AuthorInfo;
