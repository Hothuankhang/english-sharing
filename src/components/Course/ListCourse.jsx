import React from 'react'
import Listening from '../../assets/img/listening-skill.png'
import '../../assets/scss/courseStyle/style.css'
import {useDispatch} from "react-redux"
import {showPage} from '../../redux/action'
function ListCourse() {
    // const state = useSelector((state)=>({...state}));
    const dispatch = useDispatch();

    function handleCourse(course){
        dispatch(
            showPage(
              'COURSE'
            )
          )
    }
    return (
        <div className="list_course">
            <div className='list__item'>
                <div className='course__type'>
                    <h2>
                        Khóa học kĩ năng nghe
                    </h2>
                    <div className='courses'>
                        <button onClick={()=>handleCourse("ello")}>
                            <img src={Listening} alt="source youtube" />
                            <h3>Course tittle</h3>
                        </button>
                        <button onClick={()=>handleCourse("ello")}>
                            <img src={Listening} alt="source youtube" />
                            <h3>Course tittle</h3>
                        </button>

                    </div>
                    <h2>
                        Khóa học kĩ năng nói
                    </h2>
                    <div className='courses'>
                        <button onClick={()=>handleCourse("ello")}>
                            <img src={Listening} alt="source youtube" />
                            <h3>Course tittle</h3>
                        </button>
                        <button onClick={()=>handleCourse("ello")}>
                            <img src={Listening} alt="source youtube" />
                            <h3>Course tittle</h3>
                        </button>
                    </div>
                    <h2>
                        Khóa học kĩ năng đọc
                    </h2>
                    <div className='courses'>
                        <button onClick={()=>handleCourse("ello")}>
                            <img src={Listening} alt="source youtube" />
                            <h3>Course tittle</h3>
                        </button>
                        <button onClick={()=>handleCourse("ello")}>
                            <img src={Listening} alt="source youtube" />
                            <h3>Course tittle</h3>
                        </button>
                    </div>
                    <h2>
                        Khóa học kĩ năng viêt 
                    </h2>
                    <div className='courses'>
                        <button onClick={()=>handleCourse("ello")}>
                            <img src={Listening} alt="source youtube" />
                            <h3>Course tittle</h3>
                        </button>
                        <button onClick={()=>handleCourse("ello")}>
                            <img src={Listening} alt="source youtube" />
                            <h3>Course tittle</h3>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListCourse