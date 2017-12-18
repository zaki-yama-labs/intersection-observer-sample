import React from 'react';

export default class App extends React.Component {
  componentDidMount() {
    const observer = new IntersectionObserver((changes) => {
      changes.forEach((change) => {
        console.log(change.target.textContent, 'intersectionRatio: ', change.intersectionRatio, 'isIntersecting: ', change.isIntersecting);
        // console.log(change);
        if (change.isIntersecting) {
          change.target.classList.add('is-active');
        } else {
          change.target.classList.remove('is-active');
        }
      });
    });
    const steps = document.querySelectorAll('.step');
    steps.forEach((step) => {
      observer.observe(step);
    });
  }

  render() {
    return (
      <div id="container">
        {[...Array(5)].map((_, i) => {
          const v = 100 + Math.floor(Math.random() * window.innerHeight / 4);
          const style = { padding: `${v}px 0px` };
          return <div className="step" style={style}><p>STEP {i + 1}</p></div>;
        })}
      </div>
    );
  }
}
