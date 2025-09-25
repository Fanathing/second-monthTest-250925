const buttonArea = document.querySelector(".buttonArea")
const deleteBtn = document.querySelector(".deleteBtn");
const url = location.pathname.split("/");
const user_id = url[3];

const deleteText = async(e) => {

    if(e.target.className !== "deleteBtn") return;

    const userCheck = confirm("글을 삭제 하시겠습니까?")
    if (!userCheck) return;
    
    
    try {
        const response = await fetch(`/boards/delete/${user_id}`, {method: "get"});
        if(!response.ok) throw new Error("삭제 실패");
        const data = await response.json();
        alert("삭제 성공", data.message);
        window.location.href = "/boards";
    } catch (error) {
        alert("에러발생", error.message);
        
    }
}

const getUpdat = (e) => {
    if(e.target.className !== "updateBtn") return;
    const userCheck = confirm("글 수정 페이지로 이동하시겠습니까?")
    if (!userCheck) return;
    window.location.href = `/boards/update/${user_id}`;
}

buttonArea.addEventListener("click", deleteText);
buttonArea.addEventListener("click", getUpdat);