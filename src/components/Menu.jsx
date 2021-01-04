import { React } from "react";
import { Link } from "react-router-dom";
import "../App.css";


const MakeMenu = () => {
  var x = document.getElementById("topMenu");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function Menu() {

  return (
    <div className="topnav" id='topMenu'>
      <a href="/" className="active" id="home" onClick={ChangeClasstoActive}><i class="fa fa-home"></i> Home</a>
      <Link to="/Men" onClick={ChangeClasstoActive} id="men"><i class="fa fa-male"></i> Men</Link>
      <Link to="/Women" id="women" onClick={ChangeClasstoActive}><i class="fa fa-female"></i> Women</Link>
      <Link to="/Children" id="children" onClick={ChangeClasstoActive}><i class="fa fa-child"></i> Kids</Link>
      <Link to="/cart" id="cart" style={{ color: "tomato" }}><i class="fa fa-shopping-cart"></i></Link>
      <Link to="javascript:void(0)" class="icon" onClick={MakeMenu}>
        <i class="fa fa-bars"></i>
      </Link>
    </div>
  );
}

function ChangeClasstoActive(e) {
  var x = e.target;
  const topMenu = document.getElementById('topMenu');
  topMenu.getElementsByClassName("active")[0].className = "";
  document.getElementById(x.id).className = " active";
  MakeMenu();
}

export default Menu;