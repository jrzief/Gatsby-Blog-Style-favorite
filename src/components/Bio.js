import React from 'react';
import profilePic from '../assets/BGheadshot.jpg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        <img
          src={profilePic}
          alt={`Brian Griner`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p style={{ maxWidth: 250 }}>
          Personal blog by{' '}
          <a href="https://mobile.twitter.com/brian_griner">Brian Griner</a>.
          {'    '}
          I&nbsp;explain with words and code.
        </p>
      </div>
    );
  }
}

export default Bio;
