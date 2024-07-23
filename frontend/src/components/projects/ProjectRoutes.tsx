import React from "react";
import { Route } from "react-router-dom";
import BouncyBalls from "./bouncy-balls/BouncyBalls";
import Orbiter from "./orbiter/Orbiter";

const ProjectRoutes = [
  <Route key="bouncyBalls" path="/projects/bouncy-balls" element={<BouncyBalls />} />,
  <Route key="orbiter" path="/projects/orbiter" element={<Orbiter />} />

];

export default ProjectRoutes;