import useBreadcrumbs from "use-react-router-breadcrumbs";
import { NavLink } from "react-router-dom";
import routes from "../../router/routes";
import style from "./Breadcrumbs.module.css";
import arrow from "../../images/icons/arrow-crumbs.svg";
const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes);
  return (
    <>
      {breadcrumbs.map(({ match, breadcrumb }) =>
        breadcrumbs.length === 1 ? null : (
          <span className={style.breadcrumbWrapper} key={match.pathname}>
            <NavLink className={style.breadcrumsLink} to={match.pathname}>
              {breadcrumb}
              <span className={style.arrow}>
                <img
                  width="20"
                  height="20"
                  src={arrow}
                  alt=""
                  className={style.arrov_image}
                />
              </span>
            </NavLink>
          </span>
        )
      )}
    </>
  );
};

export default Breadcrumbs;
