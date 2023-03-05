import "./drawer.css";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import BasicMenu from "../dropdown/dropdown.tsx";
import { infoOptions } from "../data/data.js";
import { parentsOptions } from "../data/data.js";
import { studentOptions } from "../data/data.js";

const Drawer = ({ setIsActive }) => {
    return (
        <div className="drawer">
            <RxCross1 className="cross" onClick={() => setIsActive(false)} />
            <Link to={"/school/#main"} onClick={() => setIsActive(false)}>
                Головна
            </Link>
            <Link to={"/school/#gallery"} onClick={() => setIsActive(false)}>
                Галерея
            </Link>
            <Link to={"/school/#contact"} onClick={() => setIsActive(false)}>
                Контакти
            </Link>
            <BasicMenu label={"Інформація про заклад"} options={infoOptions} />
            <Link
                to={
                    "/school/info/internal-system-of-education-quality-insurance"
                }
            >
                Внутрішня система забезпечення якості освіти
            </Link>
            <BasicMenu label={"Батькам"} options={parentsOptions} />
            <BasicMenu label={"Учням"} options={studentOptions} />
        </div>
    );
};

export default Drawer;
