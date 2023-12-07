const _apiUrl = "/customers";

export const getAllCustomers = () => {
    return fetch(_apiUrl).then(res => res.json());
}
