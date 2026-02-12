import React, { useRef } from "react";
import useBgAnimation from "../hooks/useBgAnimation";

const MyProjects = () => {
  const canvasRef = useRef(null);

  // Appel du hook
  useBgAnimation(canvasRef);

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      <div className="relative z-10 p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          My Projects
        </h1>

        <div>
          <div className="types flex flex-col">
            <div>
              <i className="icon-web"></i>
              <p>Application Web</p>
            </div>

            <div>
              <i className="icon-mobile"></i>
              <p>Application Mobile</p>
            </div>
          </div>

          <div className="project-actif-content">
            <div>
              <h1>Title Project</h1>
              <p>Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel neque nemo odio necessitatibus odit sint repellat debitis iusto laborum numquam fugiat recusandae obcaecati quod dolor eveniet iste a, impedit asperiores?</p>
            </div>

            <div>
              <button>
                <i className="icon-demo"></i>
                Demo
              </button>
            </div>
          </div>

          <div className="project-list">
            <div className="list">
              <div className="project-actif">

                <div>
                  <p>Project title</p>
                  <p>Date ex : 2025</p>
                </div>
                <div>
                  <img src="#project-img" alt="" />
                  <div className="tech">
                    <img src="#reactjs" alt="" />
                    <img src="#django" alt="" />
                    <img src="#postgres" alt="" />
                    <img src="#github" alt="" />
                  </div>
                </div>
              </div>

              <div className="project">

                <div>
                  <p>Project title</p>
                  <p>Date ex : 2025</p>
                </div>
                <div>
                  <img src="#project-img" alt="" />
                  <div className="tech">
                    <img src="#reactjs" alt="" />
                    <img src="#django" alt="" />
                    <img src="#postgres" alt="" />
                    <img src="#github" alt="" />
                  </div>
                </div>
              </div>

              <div className="project">

                <div>
                  <p>Project title</p>
                  <p>Date ex : 2025</p>
                </div>
                <div>
                  <img src="#project-img" alt="" />
                  <div className="tech">
                    <img src="#reactjs" alt="" />
                    <img src="#django" alt="" />
                    <img src="#postgres" alt="" />
                    <img src="#github" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
