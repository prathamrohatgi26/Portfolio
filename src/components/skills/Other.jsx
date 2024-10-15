import React from "react";

const Other = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend / Other</h3>
      <span className="imp" style={{ visibility: "hidden" }}>!important</span>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxl-python"></i>
            <div>
              <h3 className="skills__name">Python</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxl-c-plus-plus"></i>
            <div>
              <h3 className="skills__name">C/C++</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bxl-mongodb"></i>
            <div>
              <h3 className="skills__name">SQL/MySQL</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxl-aws"></i>
            <div>
              <h3 className="skills__name">AWS</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxl-nodejs"></i>
            <div>
              <h3 className="skills__name">NodeJS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxl-mongodb"></i>
            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class='bx bxs-data'></i>
            <div>
              <h3 className="skills__name">Supabase</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxs-virus"></i>
            <div>
              <h3 className="skills__name">Shell Scripting</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Other;
