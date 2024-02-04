

const UserList = ({isLoading, error, data}) => {
    if (isLoading && !error) {
        return <p>Loading....</p>;
      }
      if (error) {
        return <p>Something went wrong!</p>
      }
    return (
        <div>
          {data.map((user,i) => (
            <p key={i}>{user.name}</p>
          ))}
        </div>
      )
};

export default UserList;