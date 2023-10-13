export const getFrontRoutes = () => {
    const frontRoutes = {
        home: '/',
        items: '/items',
        item(productId: number) {
            return `/item/${productId}`
        }
    }

    return frontRoutes
}

export const getBackRoutes = () => {
    const backRoutes = {
        items(searchParam: string) {
            return `/api/items?q=${searchParam}`
        }
    }

    return backRoutes
}