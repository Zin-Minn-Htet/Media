const URL = "http://13.214.58.126:3001";

export const getData = async (route) => {
    const response = await fetch(`${URL}${route}`);
    const resData = await response.json();
    return resData
};

export const postData = async (route,data,token) => {
    const response = await fetch(`${URL}${route}`,{
        method: "POST",
        body:JSON.stringify(data),
        headers: {
            "content-type" : "application/json",
            authorization : `Bearer ${token}`
        }
    })
    const resData = await response.json();
    return resData;
};

export const formPost = async (route,form,token) => {
    const response = await fetch(`${URL}${route}`,{
        method: "POST",
        body:form,
        headers: {
            authorization : `Bearer ${token}`
        }
    });
    const resData = await response.json();
    return resData;
}

export const deleteData = async (route,token) => {
    const response = await fetch(`${URL}${route}`,{
        method: "DELETE",
        headers:{
            "content-type" : "application/json",
            authorization : `Bearer ${token}`
        }
    });
    const resData = await response.json();
    return resData;
}

export const patchData = async (route, data , token) => {
    const response = await fetch(`${URL}${route}`,{
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
            "content-type" : "application/json",
            authorization : `Bearer ${token}`
        }
    });
    const resData = await response.json();
    return resData;
}

export const getImage = image => {
    return `${URL}/uploads/${image}`
}