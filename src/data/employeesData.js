const _apiUrl = "/employees";

export const getAllEmployees = () => {
    return fetch(_apiUrl).then(res => res.json());
}

export const getEmployeeById = (employeeId) => {
    return fetch(`${_apiUrl}/${employeeId}`).then(res => res.json())
}