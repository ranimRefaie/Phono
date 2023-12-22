// import "./DropDown.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "./Collection.css";
import { Link } from "react-router-dom";

const Collection = ({ name, option1, option2, option3 }) => {
  return (
    <DropdownButton className="rn-button-dropdown" title={name}>
      <ul className="rn-dropdown">
        <Dropdown.Item>
          <Link to="/">SSD CARD</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/">Affinity M20</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/">Affinity P40 Pro</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/">PO V40 ThinQ</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/">Tencho 7.3</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/">Tencho 8.1</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/">Nexian</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/">Ningbo</Link>
        </Dropdown.Item>
      </ul>
      <ul className="rn-dropdown">
        <Dropdown.Item>
          <Link to="/">POWER BANKS</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/">Affinity M20</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/">Affinity P40 Pro</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/">PO V40 ThinQ</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/">Tencho 7.3</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/">Tencho 8.1</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/">Nexian</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/">Ningbo</Link>
        </Dropdown.Item>
      </ul>

      <ul className="rn-dropdown">
        <Dropdown.Item>
          <Link to="/">EARPHONE</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/">Affinity M20</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/">Affinity P40 Pro</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/">PO V40 ThinQ</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/">Tencho 7.3</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/">Tencho 8.1</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/">Nexian</Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link to="/">Ningbo</Link>
        </Dropdown.Item>
      </ul>
    </DropdownButton>
  );
};

export default Collection;
