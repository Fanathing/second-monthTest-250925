const createFrom = document.querySelector(".createFrom");

// 작성 완료 버튼을 눌렀을때
const creatText = async (e) => {
    e.preventDefault();

    const userCheck = confirm("글 생성을 하시겠습니까?")
    if (!userCheck) return;

    // form데이터를 우선 담음
    const formData = new FormData(createFrom);
    // form데이터가 일반객체로 변하도록 함
    const data = Object.fromEntries(formData);

    try {
        // fetch를 이용하여 요청을 보냄
        const response = await fetch(`/boards/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            //일반객체로 변한 data를 Json으로 바꿔서 보냄
            body: JSON.stringify(data)
        });

        const result = await response.json();
        console.log(result);

        alert("글이 성공적으로 작성되었습니다!");
        window.location.href = "/boards";
    } catch (error) {
        alert("글 작성에 문제가 생겼습니다" + error.message);
    }
};

createFrom.addEventListener("submit", creatText);

