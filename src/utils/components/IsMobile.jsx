import useMobile from "../hooks/useMobile";

/* eslint-disable react/prop-types */
function IsMobile({ mobile = null, nonMobile = null, minWidth = 640 }) {
  const isMobile = useMobile(minWidth);

  return <>{isMobile ? mobile : nonMobile}</>;
}
export default IsMobile;
