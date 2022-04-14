import React, { useState } from 'react'
import '../../assets/scss/courseStyle/style.css'
function Course() {
  const [url,setUrl] = useState("https://www.youtube.com/watch?v=3ielOb6ztVY")
  const vid = url.replace("watch?v=","embed/")


  return (
    <div className='course'>
      <div className='course__display'>
        <iframe
        width="1227"
        height="690"
        src={vid}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        />

        <div className='course__list'>
          <h2>Course name</h2>
          <ul>
            <li>
              <button onClick={()=>setUrl("https://www.youtube.com/watch?v=3ielOb6ztVY")}>
                <h4>Video name</h4>
              </button>
            </li>
            <li>
              <button onClick={()=>setUrl("https://www.youtube.com/watch?v=EHdwR5tE9IU")}>
                <h4>Video name</h4>
              </button>
            </li>
            <li>
              <button onClick={()=>setUrl("https://www.youtube.com/watch?v=81gINCZMbP8")}>
                <h4>Video name</h4>
              </button>
            </li>
            <li>
              <button onClick={()=>setUrl("https://www.youtube.com/watch?v=mKFEN1EyYdg&feature=emb_title")}>
                <h4>Video name</h4>
              </button>
            </li>
            <li>
              <button onClick={()=>setUrl("https://player.vimeo.com/video/511837373?h=380972aa2c")}>
                <h4>Video name</h4>
              </button>
            </li>
            <li>
              <button onClick={()=>setUrl("https://player.vimeo.com/video/511837213?h=bda760c607")}>
                <h4>Video name</h4>
              </button>
            </li>
            <li>
              <button onClick={()=>setUrl("https://www.youtube.com/watch?v=3ielOb6ztVY")}>
                <h4>Video name</h4>
              </button>
            </li>
            <li>
              <button onClick={()=>setUrl("https://www.youtube.com/watch?v=EHdwR5tE9IU")}>
                <h4>Video name</h4>
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* <div className='course__interact'>
        <textarea type="text" placeholder='Để lại thắc mắc của bạn ở đây' />
      </div> */}
    </div>
  )
}

export default Course