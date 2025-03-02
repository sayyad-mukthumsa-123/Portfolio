// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import { SiC } from "react-icons/si";
// import {
//   DiJavascript1,
//   DiReact,
//   DiNodejs,
//   DiMongodb,
//   DiPython,
//   DiGit,
//   DiJava,
// } from "react-icons/di";
// import {
//   SiRedis,
//   SiFirebase,
//   SiNextdotjs,
//   SiSolidity,
//   SiPostgresql,
// } from "react-icons/si";
// import { TbBrandGolang } from "react-icons/tb";

// function Techstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//       <SiC />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiJavascript1 />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <TbBrandGolang />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiNodejs />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiReact />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiSolidity />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiMongodb />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiNextdotjs />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiGit />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiFirebase />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiRedis />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiPostgresql />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiPython />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiJava />
//       </Col>
//     </Row>
//   );
// }

// export default Techstack;


import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiC, SiHtml5, SiCss3, SiJavascript, SiReact, SiMongodb, SiExpress, SiNodedotjs, SiTailwindcss, SiMysql, SiGit } from "react-icons/si";
import { DiPython, DiJava } from "react-icons/di";

function Techstack() {
  const skills = [
    { icon: <SiC />, name: "C" },
    { icon: <DiPython />, name: "Python" },
    { icon: <DiJava />, name: "Java" },
    { icon: <SiHtml5 />, name: "HTML" },
    { icon: <SiCss3 />, name: "CSS" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiExpress />, name: "Express" },
    { icon: <SiReact />, name: "React" },
    { icon: <SiNodedotjs />, name: "Node.js" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiGit />, name: "Git" }
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons text-center">
          {skill.icon}
          <p style={{ marginTop: "5px", fontSize: "14px" }}>{skill.name}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;