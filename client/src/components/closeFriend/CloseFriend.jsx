import "./closeFriend.css";

export default function CloseFriend({ user2 }) {
  const PF = "/assets/";
  return (
    <li className="sidebarFriend">
      <img
        className="sidebarFriendImg"
        src={
          user2?.profilePicture
            ? user2.profilePicture
            : PF + "person/noAvatar.png"
        }
        alt=""
      />
      <span className="sidebarFriendName">{user2.username}</span>
    </li>
  );
}
