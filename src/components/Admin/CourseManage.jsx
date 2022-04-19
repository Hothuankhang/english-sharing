import React, { useState } from 'react'
import '../../assets/scss/homeStyle/style.css'
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'CourseName', headerName: 'Tên khóa học', width: 330 },
  { field: 'CategoryName', headerName: 'Thuộc danh mục', width: 330 },
  { field: 'Author', headerName: 'Người tạo', width: 230 },
  { field: 'Watcher', headerName: 'Lượt xem', width: 130 },
  { field: 'Approve', headerName: 'Ngày duyệt', width: 130 },
  { field: 'Status', headerName: 'Tình trạng', width: 130 },
  {
    field: "click",
    headerName: "",
    width: 90,
    renderCell: () => (
      <strong>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
        >
          Edit
        </Button>
      </strong>
    ),
  },
];

var rows = [
  { id:"CR1",CourseName:"Ello",CategoryName:"Kĩ năng nghe",Author:"Hồ Thuận Khang",Watcher: 15,Approve: "23/9/2022",Status:"bình thường",click: <button>Hello</button>,},
  { id:"CR2",CourseName:"BBC",CategoryName:"Kĩ năng nói",Author:"Hồ Thuận Khang",Watcher: 15,Approve: "",Status:"chưa duyệt"},
  { id:"CR3",CourseName:"Ello",CategoryName:"Kĩ năng đọc",Author:"Hồ Thuận Khang",Watcher: 15,Approve: "23/9/2022",Status:"bình thường"},
  { id:"CR4",CourseName:"Ello",CategoryName:"Kĩ năng viết",Author:"Hồ Thuận Khang",Watcher: 15,Approve: "23/9/2022",Status:"bình thường"},
  { id:"CR5",CourseName:"Ello",CategoryName:"Kĩ năng nghe",Author:"Hồ Thuận Khang",Watcher: 15,Approve: "23/9/2022",Status:"bị báo cáo"},
  { id:"CR6",CourseName:"Ello",CategoryName:"Kĩ năng nghe",Author:"Hồ Thuận Khang",Watcher: 15,Approve: "23/9/2022",Status:"bình thường"},


];
function CourseManage() {
  const [del,setDel] = useState([])
    function handleDel(){
        if(del.length<1){
            alert("Hãy chọn dòng cần xóa trước!")
        }
        for(let i=0;i< rows.length; i++){

            for(let j=0;j< del.length; j++){
                if(rows[i].id === del[j]){
                    rows.filter((row) => row !== rows[i])
                }
            }
        }
        console.log(rows)
    }

    function handleCountCourse(countIf){
      let count = 0
      for(let i=0 ; i< rows.length;i++){
        if(rows[i].Status===countIf){
          count = count+1;
        }
      }
      return count
    }
  return (
    <div className='course_manage manage'>
    <div className='manage__collect'>
        <h3>Danh sách khóa học</h3>
        <ul>
            <li>
                <p>Tổng số khóa học</p>
                <p>Số khóa học đã duyệt</p>
                <p>Số khóa học chờ duyệt</p>
                <p>Số khóa học bị báo cáo</p>
            </li>
            <li>
                <p>{rows.length}</p>
                <p>{rows.length-handleCountCourse("chưa duyệt")}</p>
                <p>{handleCountCourse("chưa duyệt")}</p>
                <p>{handleCountCourse("bị báo cáo")}</p>
            </li>
        </ul>
    </div>
    <div className="data__grid">
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
            onSelectionModelChange={(e)=>setDel(e)}
            className="grid"
        />
            <div className='btn'>
                <Button variant="contained" onClick={handleDel} className="delete">Delete</Button>
                <Button variant="contained" onClick={handleDel} className="add">Add +</Button>
            </div>
    </div>
</div>
  )
}

export default CourseManage