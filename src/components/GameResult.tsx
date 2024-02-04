import HigherOrderComponent from "./HigherOrderComponent";
import UserAvatar from "./UserAvatar";

const UserAvatarWithBorder = HigherOrderComponent(UserAvatar);

const GameResult = () => {
  return (
    <div className="flex gap-3">
      <UserAvatar
        imageUrl={
          "https://as2.ftcdn.net/v2/jpg/01/51/99/39/1000_F_151993957_EAeCk5CrEz6Vasb4vsiLU5VcIT8oHexM.jpg"
        }
      />

     <UserAvatarWithBorder imageUrl={"https://as2.ftcdn.net/v2/jpg/01/51/99/39/1000_F_151993957_EAeCk5CrEz6Vasb4vsiLU5VcIT8oHexM.jpg"}/>

      <UserAvatar
        imageUrl={
          "https://as2.ftcdn.net/v2/jpg/01/51/99/39/1000_F_151993957_EAeCk5CrEz6Vasb4vsiLU5VcIT8oHexM.jpg"
        }
      />
      <UserAvatar
        imageUrl={
          "https://as2.ftcdn.net/v2/jpg/01/51/99/39/1000_F_151993957_EAeCk5CrEz6Vasb4vsiLU5VcIT8oHexM.jpg"
        }
      />
    </div>
  );
};

export default GameResult;
