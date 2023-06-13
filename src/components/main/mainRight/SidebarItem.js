import "./SidebarItem.css";

function SidebarItem() {
  return (
    <div className="sidebar-conteiner">
      <div>
        <img
          src="./images/sidebar-badge.png"
          alt="Logo"
          className="sidebar-img"
        />
      </div>
      <div>
        <h4 className="sidebar-header">Clubs on Strava</h4>
        <p className="sidebar-paragraph">
          Why do it alone? Get more out of your Strava experience by joining or
          creating a Club.
        </p>
        <a className="sidebar-link" href="./">
          Find or Create a Club on Strava
        </a>
      </div>
    </div>
  );
}

export default SidebarItem;
