export const getBasketFromLS = () => {
    const data = localStorage.getItem('basket')
   return data ? JSON.parse(data) : []
}

export const getInfoFromLS = () => {
    const data = localStorage.getItem('sneakerInfo')
   return data ? JSON.parse(data) : []
}