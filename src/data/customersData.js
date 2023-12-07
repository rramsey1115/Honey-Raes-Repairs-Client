const _apiUrl = "/customers";

export const getAllCustomers = () => {
    return fetch(_apiUrl).then(res => res.json());
}

export const getCustomerById = (customerId) => {
    return fetch(`${_apiUrl}/${customerId}`).then(res => res.json());
}