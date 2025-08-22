const DAY = 1000*60*60*24; // 하루(ms)
export const dateSeparate = (start, end) => {
    const diffDays = Math.floor((end-start)/DAY)+1;
    return Array(diffDays).fill(0).map((_, i) => i+1);
}