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
        change.target.textContent = `${change.intersectionRatio * 100}%`;
      });
    }, { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0] });
    const steps = document.querySelectorAll('.step');
    steps.forEach((step) => {
      observer.observe(step);
    });
  }

  render() {
    return (
      <div id="container">
        {[...Array(5)].map((_, i) => {
          // const v = 100 + Math.floor(Math.random() * window.innerHeight / 4);
          // const style = { padding: `v}px 0px` };
          return <div className="step"><p>STEP {i + 1}</p></div>;
        })}
      </div>
    );
  }
}
