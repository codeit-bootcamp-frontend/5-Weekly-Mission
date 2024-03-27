function handleModalToggle(modalId, openBtnId) {
    const modal = document.getElementById(modalId);
    const openBtn = document.getElementById(openBtnId);
    const closeBtn = document.querySelector(`#${modalId} .close`);
    const modalContent = modal.querySelector('.modal_container');

    openBtn.onclick = function() {
        modal.classList.add("show_modal");
    }

    closeBtn.onclick = function() {
        modal.classList.remove("show_modal");
    }

    modalContent.onclick = function(event) {
        event.stopPropagation(); // 모달 내부를 클릭해도 닫히지 않도록 이벤트 전파 차단
    }

    // 모달 영역 외부 클릭 시 모달 숨기기
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove("show_modal");
        }
    });
}

// 각 모달에 대해 이벤트 핸들러 적용
handleModalToggle('shareFolderModal', "shareFolderBtn"); // 폴더 공유하기 모달
handleModalToggle('addFolderModal', "addFolderBtn"); // 폴더 추가하기 모달
handleModalToggle('addToFolderModal', "addToFolderBtn"); // 폴더에 추가하기 모달
handleModalToggle('deleteFolderModal', "deleteFolderBtn"); // 삭제하기 모달


// dot menu
document.getElementById('dotMenu').addEventListener('click', function (event) {
    event.stopPropagation();    // 현재 이벤트의 전파를 중단
    const menu = document.getElementById('menu');
    menu.classList.toggle('show_dot_menu'); // 없으면 추가하고, 이미 있는 경우 제거
});

// 초기에 메뉴 숨기기
document.getElementById('menu').addEventListener('click', function (event) {
    event.stopPropagation();    // 현재 이벤트의 전파를 중단
});
