const buttonArea = document.querySelector(".buttonArea")
const main = document.querySelector("main");
const url = location.pathname.split("/");
const user_id = url[3];

//삭제 버튼을 눌렀을때
const deleteText = async(e) => {

    if(e.target.className !== "deleteBtn") return;

    const userCheck = confirm("글을 삭제 하시겠습니까?");
    if (!userCheck) return;
    
    try {
        const response = await fetch(`/boards/delete/${user_id}`, {method: "get"});
        const data = await response.json();
        alert("글이 정상적으로 삭제되었습니다.");
        window.location.href = "/boards";
    } catch (error) {
        alert("글 삭제에 무언가 문제가 생겼습니다!", error.message);
    }
}

//수정 페이지 진입 버튼을 눌렀을때
const getUpdat = (e) => {
    if(e.target.className !== "updateBtn") return;
    const userCheck = confirm("글 수정 페이지로 이동하시겠습니까?")
    if (!userCheck) return;
    window.location.href = `/boards/update/${user_id}`;
}

main.addEventListener("click", deleteText);
buttonArea.addEventListener("click", getUpdat);