import React from "react";
import "./style.css";
import { Row, Col } from "../Grid";


const SavedResult = (props) => {
    return props.savedBooks.length === 0 ? (
      <div className="card">
        <div className="card-body player">
          <div className="article">
            <h3>Your Saved Books</h3>
          </div>
        </div>
      </div>
    ) : (
      <div className="card">
        <div className="card-body player">
          <div className="article">
            <h3>Your Saved Books</h3>
            {props.savedBooks.map((savedbook) => {
              return (
               
              );
            })}
          </div>
        </div>
      </div>
    );
  };