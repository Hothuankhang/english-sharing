import React from 'react'
import '../../assets/scss/courseStyle/style.css'
function Course() {
  // const myvid = "https://www.youtube.com/embed/3ielOb6ztVY"
  return (
    <div className='course'>
      <div className='course__display'>
        {/* <ReactPlayer 
        url={myvid}
            width="953px"
            height="580px"
            playing={false}
            controls={true}
        /> */}
         <iframe
      width="1227"
      height="690"
      src={"https://www.youtube.com/embed/3ielOb6ztVY"}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
        <div className='course__list'>
          <h2>Course name</h2>
          <ul>
            <li>
              <button>
                <h4>Video name</h4>
              </button>
            </li>
            <li>
              <button>
                <h4>Video name</h4>
              </button>
            </li>
            <li>
              <button>
                <h4>Video name</h4>
              </button>
            </li>
            <li>
              <button>
                <h4>Video name</h4>
              </button>
            </li>
            <li>
              <button>
                <h4>Video name</h4>
              </button>
            </li>
            <li>
              <button>
                <h4>Video name</h4>
              </button>
            </li>
            <li>
              <button>
                <h4>Video name</h4>
              </button>
            </li>
            <li>
              <button>
                <h4>Video name</h4>
              </button>
            </li>
            <li>
              <button>
                <h4>Video name</h4>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Course