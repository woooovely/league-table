export const getDateDifference = (selectedDate: Date): string => {
    const today = new Date();
    
    // 시간을 제거하고 날짜만 비교하기 위해 시간을 0으로 설정
    const clearTimeToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const clearTimeSelected = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
  
    // 날짜 차이 계산 (밀리초 단위 차이를 일수로 변환)
    const timeDiff = clearTimeSelected.getTime() - clearTimeToday.getTime();
    const dayDiff = timeDiff / (1000 * 60 * 60 * 24); // 하루는 1000ms * 60s * 60m * 24h
  
    if (dayDiff === 0) {
      return "오늘";
    } else if (dayDiff === 1) {
      return "내일";
    } else if (dayDiff === -1) {
      return "어제";
    } else {
        return '';
    }
  };