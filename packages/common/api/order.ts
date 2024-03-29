import request from '.'

export interface Order {
  id?: string
  userId?: string
  orderNumber?: string
  addressId: string
  productItems: Record<string, any>[]
}

export function getOrder(orderId?: string | number) {
  return request({
    url: '/order',
    method: 'get',
    params: { userId: '1', orderId },
  })
}

export function addOrder(data: Order) {
  return request({
    url: '/order',
    method: 'post',
    data: { userId: 1, ...data },
  })
}

export function updateOrder(data: Order) {
  return request({
    url: `/order/${data.id}`,
    method: 'put',
    data,
  })
}

export function deleteOrder(id: string) {
  return request({
    url: `/order/${id}`,
    method: 'delete',
  })
}

export function payOrder(id: string) {
  return request({
    url: `/order/pay/${id}`,
    method: 'put',
    data: { payFinish: true },
  })
}
