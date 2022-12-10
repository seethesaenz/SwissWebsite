import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function WelcomePage(props) {
// Destructure the onClose prop from the props object
const { onClose } = props;
const [showPage, setShowPage] = useState(true);

useEffect(() => {
setTimeout(() => {
setShowPage(false);
}, 3000); // 3 seconds
}, []);

return (
<div style={showPage ? styles.page : styles.pageHidden}>
<h1>Welcome!</h1>
<button onClick={onClose}>Close</button>
</div>
);
}

const styles = {
page: {
position: "fixed",
top: 0,
left: 0,
width: "100%",
height: "100%",
backgroundColor: "white",
animation: "melt 1s forwards"
},
pageHidden: {
position: "fixed",
bottom: 0,
left: 0,
width: "100%",
height: "100%",
backgroundColor: "transparent"
}


"@keyframes melt": {
from: {
transform: "translateY(0)"
},
to: {
transform: "translateY(100%)"
}
}
}


WelcomePage.propTypes = {
onClose: PropTypes.func.isRequired
};

export default WelcomePage;