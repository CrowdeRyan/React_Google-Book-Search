import React from "react";
import "./style.css";
import { Row, Col } from "../Grid";

const SearchResult = (props) => {
    return props.books.length === 0 ? (
      <div className="card">
        <div className="card-body player">
          <div className="article">
            <h3>Search Results</h3>
          </div>
        </div>
      </div>
    ) : (
      <div className="card">
        <div className="card-body player">
          <div className="article">
            <h3>Search Results</h3>
            {props.books.map((book) => {
              return (
            
              );
            })}
          </div>
        </div>
      </div>
    );
  };
