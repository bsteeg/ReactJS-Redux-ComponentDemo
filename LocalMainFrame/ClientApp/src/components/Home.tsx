import * as React from 'react';
import { connect } from 'react-redux';

const Home = () => (
  <div>
    <h1>Widget Examples</h1>
    <p>Different examples developed using the react.js framework combined with the redux framework. </p>

    <div className="container">
      <div className="row">
        <div className="col">
          <p>Widget A</p>
        </div>
        <div className="col">
          <p>Widget B</p>
        </div>
        <div className="col">
          <p>Widget C</p>
        </div>
      </div>
    </div>
  </div>
);

export default connect()(Home);
