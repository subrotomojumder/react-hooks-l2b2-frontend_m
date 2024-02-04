import useUserData from "../hooks/useUserData";
import UserList from "./UserList";

const UserContainers = () => {
  const { isLoading, error, data } = useUserData();

  const props = {
    isLoading,
    error,
    data,
  };
  return <UserList {...props} />;
};

export default UserContainers;
