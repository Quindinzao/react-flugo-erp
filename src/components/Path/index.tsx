// External Libraries
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useLocation, Link as RouterLink } from "react-router-dom";

// Interfaces
import type { PathProps } from "../../interfaces/PathProps";

const Path = (props: PathProps) => {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter((x) => x);

  const crumbs = pathParts.map((_, index) => {
    const to = "/" + pathParts.slice(0, index + 1).join("/");
    const isLast = index === pathParts.length - 1;

    return isLast ? (
      <Typography variant="body2" color="text.disabled" key={to}>
        {props.pathNames[to]}
      </Typography>
    ) : (
      <Link component={RouterLink} variant="body2" underline="hover" color="text.primary" to={to} key={to}>
        {props.pathNames[to]}
      </Link>
    );
  });

  return (
    <>
      {crumbs.length > 0 && (
        <Breadcrumbs aria-label="breadcrumb" separator="•" sx={{ mb: 2 }}>
          {crumbs}
        </Breadcrumbs>
      )}
    </>
  );
}

export default Path;