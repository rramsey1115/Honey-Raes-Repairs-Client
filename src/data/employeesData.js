const _apiUrl = "/employees";

export const getAllEmployees = () => {
    return fetch(_apiUrl).then(res => res.json());
}
