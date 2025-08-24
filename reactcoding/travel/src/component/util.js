const DAY = 1000*60*60*24; // 하루(ms)
export const dateSeparate = (start, end) => {
    const diffDays = Math.floor((end-start)/DAY)+1;
    return Array(diffDays).fill(0).map((_, i) => i+1);
}

export const getFormattedDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0~11
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};