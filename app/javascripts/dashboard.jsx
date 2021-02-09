import "../stylesheets/dashboard.scss";

import React from "react";
import ReactDOM from "react-dom";

//import Header from "./header.jsx";
//import Footer from "./footer.jsx";

import DownloadsTile from "./tiles/downloads.jsx";
import StargazersTile from "./tiles/stargazers.jsx";
import TotalDownloadsTile from "./tiles/totaldownloads.jsx";

var Dashboard = React.createClass({
  render: function() {
    return (
      <div className="dashboard">
        <div className="section">
          <div className="container">
            <h1 className="mb-6">Dashboard</h1>

            <h2>Downloads</h2>
            <p className="mb-4">
              Over the lifetime of each product in the Moxie Suite, from inception to now.
            </p>

            <h3>MOXIE</h3>
            <div className="tile is-ancestor">
              <div className="tile is-12">
                <DownloadsTile colorclassName="is-moxie" packageName="moxie" startDate="2015-05-01" />
              </div>
            </div>

            <h3>GANACHE (ganache-cli)</h3>
            <div className="tile is-ancestor">
              <div className="tile is-12">
                <DownloadsTile colorclassName="is-ganache" packageName="ganache-cli" startDate="2017-10-01" />
              </div>
            </div>

            <h3>DRIZZLE</h3>
            <div className="tile is-ancestor">
              <div className="tile is-12">
                <DownloadsTile colorclassName="is-drizzle" packageName="drizzle" startDate="2017-12-01" />
              </div>
            </div>

            <h2 className="mt-5">Developer Adoption</h2>
            <p>
              Moxie Suite's usage by developers over time, measured in GitHub stars.
            </p>
            <div className="tile is-ancestor">
              <div className="tile is-12">
                <StargazersTile projects={["moxiesuite/moxie", "moxiesuite/ganache", "moxiesuite/drizzle"]}/>
              </div>
            </div>

          </div>
        </div>

        
      </div>
    );
  }
});

window.onload = function() {
  ReactDOM.render(<Dashboard/>, document.getElementById('main'));
};
