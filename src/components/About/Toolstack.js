// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import {
//   SiVisualstudiocode,
//   SiPostman,
//   SiSlack,
//   SiVercel,
//   SiMacos,
// } from "react-icons/si";

// function Toolstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiMacos />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiVisualstudiocode />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiPostman />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiSlack />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiVercel />
//       </Col>
//     </Row>
//   );
// }

// export default Toolstack;



import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiPowerbi, SiGithub, SiPostman, SiVisualstudiocode } from "react-icons/si";

function Toolstack() {
  const tools = [
    { icon: <SiPowerbi />, name: "Power BI" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiVisualstudiocode />, name: "VS Code" }
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons text-center">
          {tool.icon}
          <p style={{ marginTop: "5px", fontSize: "14px" }}>{tool.name}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;