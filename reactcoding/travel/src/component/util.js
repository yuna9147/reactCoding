// 여행 기간을 일(day) 단위로 배열로 반환
const DAY = 1000*60*60*24; // 하루(ms)
export const dateSeparate = (start, end) => {
    const diffDays = Math.floor((end-start)/DAY)+1;
    return Array(diffDays).fill(0).map((_, i) => i+1);
}

export const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0~11
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

// Date 객체를 YYYY-MM-DD 형식의 문자열로 변환해주는 유틸 함수
export const getFormattedDate = (targetDate) => {
    let year = targetDate.getFullYear();    // 4자리 연도(2025)
    let month = targetDate.getMonth() + 1;  // 0 ~ 11월 (0: 1월)
    let date = targetDate.getDate();        // 1 ~ 31일

    // 두 자리 숫자로 맞추기 : 01, 02, ...10, 11
    if(month < 10) {
        month = `0${month}`;    
    }
    if(date < 10) {
        date = `0${date}`;      
    }
    return `${year}-${month}-${date}`;
};

// 입력값 검증
export const validateInput = ({ component, state, detailState }) => {
    if(component === "home") {
        if(!state.title.trim()) return { valid: false, message: "여행 이름을 입력해주세요." };
        if(!state.city.trim()) return { valid: false, message: "여행지를 입력해주세요." };
        // if(!state.start_date || !state.end_date) return { valid: false, message: "여행 기간을 선택해주세요." };
        if(state.start_date > state.end_date) return { valid: false, message: "여행 시작일은 종료일보다 빠를 수 없습니다." };
    } 
    else if(component === "detail") {
        if(!detailState.spot.trim()) return { valid: false, message: "여행 장소를 입력해주세요." };
        if(!detailState.about.trim()) return { valid: false, message: "설명을 입력해주세요." };
        // if(!detailState.tags.trim()) return { valid: false, message: "태그를 입력해주세요." };
        // if(!detailState.tip.trim()) return { valid: false, message: "운영시간을 입력해주세요." };
    }
    return { valid: true };
};