import React from 'react';

const VideoDetail = () => {

  return (
    <div className="twelve wide column">
      <div className="ui raised segments">
        <div className="ui segment">
          <div className="ui embed">
          {/* Change the iframe source */}
            <iframe src={''} frameBorder="0" />
          </div>
        </div>
        <div className="ui segment">
          <h4>{}</h4>
        </div>
        <div className="ui secondary segment">
          <p>{}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
