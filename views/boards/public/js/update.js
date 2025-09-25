const updateForm = document.querySelector(".updateForm");
// location.search와는 다르게 경로명을 반환해줌
const url = location.pathname.split("/");
const user_id = url[3];

const updateText = async (e) => {
    e.preventDefault();

    const userCheck = confirm("글을 수정 하시겠습니까?")
    if (!userCheck) return;

    // form데이터를 우선 담음
    const formData = new FormData(updateForm);
    // form데이터가 일반객체로 변하도록 함
    const data = Object.fromEntries(formData);

    try {
        const response = await fetch(`/boards/update/${user_id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            //일반객체로 변한 data를 Json으로 바꿔서 보냄
            body: JSON.stringify(data)
        });

        const result = await response.json();
        console.log(result);

        alert("글이 성공적으로 수정되었습니다!");
        window.location.href = `/boards/view/${user_id}`;
    // res.redirect(`/boards/view/${user_id}`);
        
    } catch (error) {
        alert("글 수정에 문제가 생겼습니다" + error.message);
    }
};

updateForm.addEventListener("submit", updateText);

