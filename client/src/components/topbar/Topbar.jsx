import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import LogoutIcon from "@mui/icons-material/Logout";
export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = "/assets/";
  const navigate = useNavigate();
  const handleImg = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Cool Connect</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatIcon />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <NotificationsIcon />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>

        <img
          src={
            user.profilePicture
              ? PF + user.profilePicture
              : PF + "person/noAvatar.png"
          }
          alt=""
          className="topbarImg"
          onClick={handleImg}
        />
      </div>
      <LogoutIcon
        sx={{
          position: "relative",
          right: "10px",
          cursor: "pointer",
          color: "white",
        }}
        onClick={handleLogout}
      />
    </div>
  );
}
