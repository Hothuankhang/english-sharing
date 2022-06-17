import React, { useState } from 'react'
import '../../assets/scss/courseStyle/style.css'
import { useDispatch, useSelector } from "react-redux"
import { AddCircle, ThumbDown, ThumbUp } from '@mui/icons-material';
import { Button, TextField } from '@mui/material'
import { projectFirestore } from '../../firebase/config';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
  border: "1px solid black",
  borderRadius: "16px",
  maxWidth: "500px"
}));
function Course() {

  // const vid = url.replace("watch?v=","embed/")
  const state = useSelector((state) => ({ ...state }));
  const [comment, setComment] = useState('')
  const commentList = state.course.comment
  console.log(commentList)
  // const list = []
  // projectFirestore.collection("Comments")
  //               .get().then((snapshot)=>{
  //               snapshot.docs.forEach(doc =>{
  //                   list.push(
  //                     doc.data()
  //                  )
  //               })
  //           })
  const [listComment, setListComment] = useState(commentList)
  const dispatch = useDispatch();
  const courseList = state.course.courseList
  const lessonList = state.course.lessonList

  const [url, setUrl] = useState(getLink())
  console.log(url)
  function getLink() {
    let list = []
    for (let i = 0; i < lessonList.length; i++) {
      if (lessonList[i].courseId === localStorage.getItem("courseId")) {
        list.push(lessonList[i].video_link)
      }
    }
    return list[0]

  }

  function videoRender(link) {
    const video = link.replace("watch?v=", "embed/")
    console.log(video)
    setUrl(video)
  }

  function handleUpload() {
    projectFirestore.collection("Comments").add({
      userId: localStorage.getItem("accountId"),
      userName: localStorage.getItem("accountName"),
      courseId: localStorage.getItem("courseId"),
      comments: comment
    })
    commentList.push(
      {
        userId: localStorage.getItem("accountId"),
        userName: localStorage.getItem("accountName"),
        courseId: localStorage.getItem("courseId"),
        comments: comment
      }
    )
    console.log(commentList)
    setListComment(commentList)

    setComment("")
  }
  return (
    <div className='course'>
      <div className='course__display'>
        <iframe
          width="1227"
          height="690"
          src={url}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />

        <div className='course__list'>
          <h2>Danh sách bài học</h2>
          {lessonList.map((lesson) => {
            if (lesson.courseId === localStorage.getItem("courseId")) {

              return (
                <ul key={lesson.id}>
                  <li>
                    <button
                      onClick={() => setUrl(lesson.video_link)
                      }>
                      <h4>{lesson.name}</h4>
                    </button>
                  </li>
                </ul>
              )
            }
          })}
        </div>
      </div>
      {
        localStorage.getItem("roleName") === "user" ?
          <div className='course__interact'>
            <div className='interact'>
              {/* <div className='up interact_btn'>
                <ThumbUp />Thích
              </div>
              <div className='down interact_btn'>
                <ThumbDown />Không thích
              </div> */}
            </div>
            <div className='interact_field'>

              <TextField
                id=""
                label='Để lại thắc mắc của bạn ở đây'
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className='field_area'

              />
              <Button
                onClick={handleUpload}
                sx={{
                  border:" 1px solid black",
                  backgroundColor:"navy",
                  height: '50px'
                }}
              >
                Đăng
              </Button>
              <div style={{
                display: "flex",
                flexDirection: "column",
                overflow: 'scroll',
                height: '900px',

              }}>
                {listComment.map((comment, index) =>
                  comment.courseId === localStorage.getItem("courseId") ?
                    <div>
                      <Stack direction="row"
                        spacing={2}
                        style={{
                          margin: "30px 30px 30px 70px"
                        }}
                      >
                        <Avatar>{comment.userName}</Avatar>
                        <Div

                        >{comment.comments}</Div>
                      </Stack>
                    </div>
                    :
                    ""
                )}
              </div>
            </div>

          </div> :
          ""
      }

    </div>
  )
}

export default Course