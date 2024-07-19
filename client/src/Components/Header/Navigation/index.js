import Button from "@mui/material/Button";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { MyContext } from "../../../App";
import CountryDropdown from "../../CountryDropdown";

const Navigation = (props) => {
  const [isopenSidebarVal, setisopenSidebarVal] = useState(false);
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [isOpenSubMenuIndex, setIsOpenSubMenuIndex] = useState(null);
  const [isOpenSubMenu_, setIsOpenSubMenu_] = useState(false);

  const context = useContext(MyContext);

  useEffect(() => {
    setIsOpenNav(props.isOpenNav);
  }, [props.isOpenNav]);

  const IsOpenSubMenu = (index) => {
    setIsOpenSubMenuIndex(index);
    setIsOpenSubMenu_(!isOpenSubMenu_);
  };

  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-2 navPart1 ">
            <div className="catWrapper">
              <Button
                className="allCatTab align-items-center res-hide"
                onClick={() => setisopenSidebarVal(!isopenSidebarVal)}
              >
                <span className="icon1 mr-2">
                  <IoIosMenu />
                </span>
                <span className="text">TẤT CẢ DANH MỤC</span>
                <span className="icon2  ml-2">
                  <FaAngleDown />
                </span>
              </Button>

              <div
                className={`sidebarNav ${
                  isopenSidebarVal === true ? "open" : ""
                }`}
              >
                <ul>
                  {props.navData?.map((item, index) => {
                    return (
                      <li>
                        <Link to={`/products/category/${item?._id}`}>
                          <Button>
                            {item?.name} <FaAngleRight className="ml-auto" />
                          </Button>
                        </Link>
                        {item?.children?.length !== 0 && (
                          <div className="submenu">
                            {item?.children?.map((subCat, key) => {
                              return (
                                <Link
                                  to={`/products/subCat/${subCat?._id}`}
                                  key={key}
                                >
                                  <Button>{subCat?.name}</Button>
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div
            className={`col-sm-10 navPart2 d-flex align-items-center res-nav-wrapper ${
              isOpenNav === true ? "open" : "close"
            }`}
          >
            <div className="res-nav-overlay" onClick={props.closeNav}></div>

            <ul className="list list-inline ml-auto res-nav">
              {context.windowWidth < 992 && (
                <li className="list-inline-item">
                  <div className="p-3">
                    {context.countryList.length !== 0 &&
                      context.windowWidth < 992 && <CountryDropdown />}
                  </div>
                </li>
              )}
              <li className="list-inline-item" onClick={props.closeNav}>
                <Link to="/">
                  <Button>Home</Button>
                </Link>
              </li>
              {props.navData
                .filter((item, idx) => idx < 6)
                .map((item, index) => {
                  return (
                    <li className="list-inline-item">
                      <Link
                        to={`/products/category/${item?._id}`}
                        onClick={props.closeNav}
                      >
                        <Button>{item?.name}</Button>
                      </Link>

                      {item?.children?.length !== 0 &&
                        context.windowWidth < 992 && (
                          <FaAngleDown
                            onClick={() => IsOpenSubMenu(index)}
                            className={`${
                              isOpenSubMenuIndex === index &&
                              isOpenSubMenu_ === true &&
                              "rotate"
                            }`}
                          />
                        )}

                      {item?.children?.length !== 0 && (
                        <div
                          className={`submenu ${
                            isOpenSubMenuIndex === index &&
                            isOpenSubMenu_ === true &&
                            "open"
                          }`}
                        >
                          {item?.children?.map((subCat, key) => {
                            return (
                              <Link
                                to={`/products/subCat/${subCat?._id}`}
                                key={key}
                                onClick={props.closeNav}
                              >
                                <Button>{subCat?.name}</Button>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
