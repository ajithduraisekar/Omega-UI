import React, { Fragment } from "react";

const Dashboard = () => (
  <Fragment>
    <div className="container">
      <main>
        <div className="dashboard">
          {/*1st row about project*/}
          <section>
            <div className=" row project-static">
              <div className="col-sm col-md-6">
                <img
                  className="teams-image"
                  src="./Resources/Images/team2.png"
                  alt="image for team management"
                />
              </div>
              <div className="col-sm col-md-6 static-heading">
                <h1>Team Management</h1>
                <p>
                  There is immense power when a group of people with similar
                  interests gets together to work toward the same goals.
                </p>
              </div>
            </div>
          </section>
          {/*end of 1st row about project*/}
          {/* 2nd row about announcement and task grid*/}
          <section>
            <div className="row team-announce-tasks">
              <div className="col-sm col-md-6">
                <div className="table-row-heading">Team Announcements</div>
                <div className="scroll">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Announcement</th>
                      </tr>
                    </thead>
                    <tbody role="presentation">
                      <tr>
                        <td>
                          {" "}
                          <span className="fa fa-bullhorn" />
                        </td>
                        <td>
                          <h2>Subject</h2> Announcement for New Staff
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {" "}
                          <span className="fa fa-bullhorn" />{" "}
                        </td>
                        <td>
                          <h2>Subject</h2> Staff Internship Announcement
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {" "}
                          <span className="fa fa-bullhorn" />
                        </td>
                        <td>
                          <h2>Subject</h2> The Multi-Channel Announcement
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {" "}
                          <span className="fa fa-bullhorn" />{" "}
                        </td>
                        <td>
                          <h2>Subject</h2>Staff Internship Announcement-2
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="fa fa-bullhorn" />{" "}
                        </td>
                        <td>
                          <h2>Subject</h2>The Multi-Channel Announcement-2
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {" "}
                          <span className="fa fa-bullhorn" />{" "}
                        </td>
                        <td>
                          <h2>Subject</h2>Staff Internship Announcement-3
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {" "}
                          <span className="fa fa-bullhorn" />
                        </td>
                        <td>
                          <h2>Subject</h2>The Multi-Channel Announcement-3
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {" "}
                          <span className="fa fa-bullhorn" />{" "}
                        </td>
                        <td>
                          <h2>Subject</h2>The Snack &amp; Greet Announcement-1
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="fa fa-bullhorn" />{" "}
                        </td>
                        <td>
                          <h2>Subject</h2>The Snack &amp; Greet Announcement-2
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-sm col-md-6">
                <div className="table-row-heading">Team Tasks</div>
                <div className="scroll">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>task</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <span className="fa fa-clipboard" />
                        </td>
                        <td>
                          <h2>Subject</h2> Matching Tasks to Roles-1
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {" "}
                          <span className="fa fa-clipboard" />{" "}
                        </td>
                        <td>
                          <h2>Subject</h2> Recurring Deposit -2
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {" "}
                          <span className="fa fa-clipboard" />{" "}
                        </td>
                        <td>
                          <h2>Subject</h2>Matching Tasks to Roles-2
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="fa fa-clipboard" />{" "}
                        </td>
                        <td>
                          <h2>Subject</h2> Recurring Deposit -1
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="fa fa-clipboard" />{" "}
                        </td>
                        <td>
                          <h2>Subject</h2>Generating Ideas and Strategies-1
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {" "}
                          <span className="fa fa-clipboard" />{" "}
                        </td>
                        <td>
                          <h2>Subject</h2>Matching Tasks to Roles-3
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="fa fa-clipboard" />{" "}
                        </td>
                        <td>
                          <h2>Subject</h2> Generating Ideas and Strategies-2
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="fa fa-clipboard" />{" "}
                        </td>
                        <td>
                          <h2>Subject</h2>The Twelve-Factor App
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          {/*end of  2nd row about announcement and task grid*/}
          {/*3rd row about webview of company leladers*/}
          <section>
            <div className="row webview-leaders">
              <div id="demo" className="carousel slide" data-ride="carousel">
                {/* The slideshow */}
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="flex-container-leaders">
                      <div>
                        <div className="leader-image">
                          {" "}
                          <img
                            className="leader-icon"
                            src="./Resources/Images/icon3.jpg"
                            alt="leaders-icon"
                          />
                          <h3>Satheesh Bhanumurthy</h3>
                          <h4> Project Manager</h4>
                        </div>
                      </div>
                      <div>
                        <div className="leader-image">
                          {" "}
                          <img
                            className="leader-icon"
                            src="./Resources/Images/icon3.jpg"
                            alt="leaders-icon"
                          />
                          <h3>Satheesh Bhanumurthy</h3>
                          <h4> Project Manager</h4>
                        </div>
                      </div>
                      <div>
                        <div className="leader-image">
                          {" "}
                          <img
                            className="leader-icon"
                            src="./Resources/Images/icon3.jpg"
                            alt="leaders-icon"
                          />
                          <h3>Gayathri</h3>
                          <h4> Product Owner</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="flex-container-leaders">
                      <div>
                        <div className="leader-image">
                          {" "}
                          <img
                            className="leader-icon"
                            src="./Resources/Images/icon3.jpg"
                            alt="leaders-icon"
                          />
                          <h3>Satheesh Bhanumurthy</h3>
                          <h4> Project Manager</h4>
                        </div>
                      </div>
                      <div>
                        <div className="leader-image">
                          {" "}
                          <img
                            className="leader-icon"
                            src="./Resources/Images/icon3.jpg"
                            alt="leaders-icon"
                          />
                          <h3>Satheesh Bhanumurthy</h3>
                          <h4> Project Manager</h4>
                        </div>
                      </div>
                      <div>
                        <div className="leader-image">
                          {" "}
                          <img
                            className="leader-icon"
                            src="./Resources/Images/icon3.jpg"
                            alt="leaders-icon"
                          />
                          <h3>Satheesh Bhanumurthy</h3>
                          <h4> Project Manager</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="flex-container-leaders">
                      <div>
                        <div className="leader-image">
                          {" "}
                          <img
                            className="leader-icon"
                            src="./Resources/Images/icon3.jpg"
                            alt="leaders-icon"
                          />
                          <h3>Satheesh Bhanumurthy</h3>
                          <h4> Project Manager</h4>
                        </div>
                      </div>
                      <div>
                        <div className="leader-image">
                          {" "}
                          <img
                            className="leader-icon"
                            src="./Resources/Images/icon3.jpg"
                            alt="leaders-icon"
                          />
                          <h3>Satheesh Bhanumurthy</h3>
                          <h4> Project Manager</h4>
                        </div>
                      </div>
                      <div>
                        <div className="leader-image">
                          {" "}
                          <img
                            className="leader-icon"
                            src="./Resources/Images/icon3.jpg"
                            alt="leaders-icon"
                          />
                          <h3>Satheesh Bhanumurthy</h3>
                          <h4> Project Manager</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Left and right controls */}
                <a
                  className="carousel-control-prev"
                  href="#demo"
                  data-slide="prev"
                  title="previous slide"
                  aria-label="previous"
                >
                  <div className="left-right-icon">
                    <i className="fas fa-angle-left" />
                  </div>
                </a>
                <a
                  className="carousel-control-next"
                  href="#demo"
                  data-slide="next"
                  title="next slide"
                  aria-label="next"
                >
                  {/*   <span class="carousel-control-next-icon"></span> */}
                  <div className="left-right-icon">
                    {" "}
                    <i className="fas fa-angle-right" />
                  </div>
                </a>
              </div>
            </div>
          </section>
          {/*3rd row for mobile view of company leaders*/}
          <div className="row mobileview-leaders">
            <div id="demo1" className="carousel slide" data-ride="carousel">
              {/* The slideshow */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="flex-container-leaders">
                    <div>
                      <div className="leader-image">
                        {" "}
                        <img
                          className="leader-icon"
                          src="./Resources/Images/icon3.jpg"
                          alt="leaders-icon"
                        />
                        <h3>Satheesh Bhanumurthy</h3>
                        <h4> Project Manager</h4>
                      </div>
                    </div>
                    <div>
                      <div className="leader-image">
                        {" "}
                        <img
                          className="leader-icon"
                          src="./Resources/Images/icon3.jpg"
                          alt="leaders-icon"
                        />
                        <h3>Satheesh Bhanumurthy</h3>
                        <h4> Project Manager</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="flex-container-leaders">
                    <div>
                      <div className="leader-image">
                        {" "}
                        <img
                          className="leader-icon"
                          src="./Resources/Images/icon3.jpg"
                          alt="leaders-icon"
                        />
                        <h3>Satheesh Bhanumurthy</h3>
                        <h4> Project Manager</h4>
                      </div>
                    </div>
                    <div>
                      <div className="leader-image">
                        {" "}
                        <img
                          className="leader-icon"
                          src="./Resources/Images/icon3.jpg"
                          alt="leaders-icon"
                        />
                        <h3>Satheesh Bhanumurthy</h3>
                        <h4> Project Manager</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="flex-container-leaders">
                    <div>
                      <div className="leader-image">
                        {" "}
                        <img
                          className="leader-icon"
                          src="./Resources/Images/icon3.jpg"
                          alt="leaders-icon"
                        />
                        <h3>Satheesh Bhanumurthy</h3>
                        <h4> Project Manager</h4>
                      </div>
                    </div>
                    <div>
                      <div className="leader-image">
                        {" "}
                        <img
                          className="leader-icon"
                          src="./Resources/Images/icon3.jpg"
                          alt="leaders-icon"
                        />
                        <h3>Satheesh Bhanumurthy</h3>
                        <h4> Project Manager</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Left and right controls */}
              <a
                className="carousel-control-prev"
                href="#demo1"
                data-slide="prev"
                aria-label="previous"
              >
                <div className="left-right-icon">
                  {" "}
                  <i className="fas fa-angle-left" />
                </div>
              </a>
              <a
                className="carousel-control-next"
                href="#demo1"
                data-slide="next"
                aria-label="next"
              >
                <div className="left-right-icon">
                  {" "}
                  <i className="fas fa-angle-right" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  </Fragment>
);

export default Dashboard;
