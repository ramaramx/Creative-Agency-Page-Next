import React from 'react'

import PropTypes from 'prop-types'

const Slide = (props) => {
  return (
    <>
      <div
        data-type="slide"
        className={`slide-slide slide ${props.rootClassName} `}
      >
        <div className="slide-max-wdith max-content-container">
          <h1 className="slide-text heading2">{props.heading}</h1>
        </div>
      </div>
      <style jsx>
        {`
          .slide-slide {
            align-items: center;
            justify-content: center;
          }
          .slide-max-wdith {
            flex: 0 0 auto;
            display: flex;
            flex-direction: column;
          }
          .slide-text {
            color: var(--dl-color-scheme-white);
          }
          .slide-root-class-name {
            background-color: #ff9b1d;
          }
          .slide-root-class-name1 {
            background-color: #15bd19;
          }
          .slide-root-class-name2 {
            background-color: var(--dl-color-scheme-brown);
          }
          .slide-root-class-name3 {
            background-color: var(--dl-color-scheme-lightblue);
          }
          .slide-root-class-name4 {
            background-color: var(--dl-color-scheme-darkblue);
          }
        `}
      </style>
    </>
  )
}

Slide.defaultProps = {
  heading: 'Slide #1',
  rootClassName: '',
}

Slide.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Slide
