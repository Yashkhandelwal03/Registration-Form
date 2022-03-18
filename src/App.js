import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import metaverse from "./images/metaverse.png";
import builtForOdisha from "./images/Built_for_odisha.png";
import builtFromOdisha from "./images/Built_from_odisha.png";

const App = () => {
  return (
    <div className="document-container">
      <div className="headline_container">
        <div class="top">
          <div class="horizontal_line"></div>
          <span className="hackathon_name">"Hackathon Name"</span>
        </div>
        <div className="smart_finance_personalised">
          <span className="smart_finance_top">Smart Finance</span>
          <span className="smart_finance_top">Personalised</span>
        </div>
      </div>
      <div className="image_container">
        <img src={metaverse} className="img_item" />
      </div>
      <div className="about_container">
        <div className="about_data_container">
          <span className="about_heading">About the Hackathon</span>
          <span className="about_details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>
        <div className="about_data_container">
          <span className="about_heading">Purpose</span>
          <div class="top">
            <div class="vertical_line"></div>
            <span className="purpose_details">
              Lorem eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam
            </span>
          </div>
          <span className="about_details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>
        <div className="about_data_container">
          <span className="about_heading">Concept of odisha hackfest '22</span>
          <span className="about_details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>
        <div className="about_data_container">
          <span className="about_heading">Paltforms to use</span>
          <span className="about_details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>
        <div className="about_data_container">
          <span className="about_heading">Themes</span>
          <span className="about_details">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>
      </div>
      <div className="img_text_container">
        <div className="particular_img_text_contianer">
          <div className="particular_img_container">
            <img src={builtForOdisha} className="img_file" />
          </div>
          <div className="creator_data_container">
            <span className="creator_heading">Built for Odisha</span>
            <span className="creator_details">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </span>
          </div>
        </div>
        <div className="particular_img_text_contianer">
          <div className="creator_data_container">
            <span className="creator_heading">Build from Odisha</span>
            <span className="creator_details">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </span>
          </div>
          <div className="particular_img_container">
            <img src={builtFromOdisha} className="img_file" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
