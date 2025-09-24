import jwtAxios from "../util/jwtUtil";

//서버주소
export const API_SERVER_HOST = "http://localhost:8080";

//기본매핑
const prefix = `${API_SERVER_HOST}/api/todo`;

export const getOne = async(tno) => {
    //HTTP GET요청 보내고 응답 기다림
    const response = await jwtAxios.get(`${prefix}/${tno}`);

    //성공적으로 응답 받으면 데이터 반환
    return response.data;
};

export const getList = async(pageParam) =>{
    const {page,size} = pageParam;
    const response = await jwtAxios.get(
        `${prefix}/list`,
        {params: {page:page, size:size}}
    );
    return response.data;
};

export const postAdd = async (todoObject) => {
    const response = await jwtAxios.post(`${prefix}/`,todoObject)
    return response.data
};

export const deleteOne = async(tno) => {
    const response = await jwtAxios.delete(`${prefix}/${tno}`);
    return response.data;
};

export const putOne = async(todo) => {
    const response = await jwtAxios.put(`${prefix}/${todo.tno}`, todo);
    return response.data;
};
