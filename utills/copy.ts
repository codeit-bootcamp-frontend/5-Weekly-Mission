export const urlCopy = async () => {
  try {
    console.log(window.location);
    await navigator.clipboard.writeText(`${window.location.hostname}/shared`);
    alert("주소가 복사되었습니다.");
  } catch (error) {
    alert("주소 복사 실패..");
  }
};
