import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useProductStore } from './products' // 來自商品列表的 store

export const useCartStore = defineStore('cart', () => {
  const productStore = useProductStore() // 來自商品列表的 store

  // 購物車項目
  const items = ref([])

  // items 預計的資料架構
  // { id: 1, name: '機械鍵盤', price: 2999, quantity: 1 }

  // 計算購物車總金額
  const total = computed(() => {
    return items.value.reduce((sum, item) => {
      // 商品1、2、3的金額加總
      return sum + item.price * item.quantity
    }, 0)
  })

  // 計算購物車商品總數
  const totalItems = computed(() => {
    return items.value.reduce((sum, item) => sum + item.quantity, 0)
  })

  // 加入商品到購物車
  function addToCart(product) {
    // 如果商品已經存在於購物車中，就回傳true，否則回傳false
    const existingItem = items.value.find((item) => item.id === product.id)
    // 如果商品已經存在於購物車中 就直接加數量就好 
    if (existingItem) {
      existingItem.quantity++
    // 該商品第一次加進購物車中，把該商品相關資訊包成物件推進items中保存
    } else {
      items.value.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1
      })
    }

    // 更新商品庫存
    productStore.decreaseInventory(product.id)
  }

  // 從購物車移除商品
  function removeFromCart(productId) {
    // 有滿足條件的商品，回傳它目前在陣列中的哪個位置
    const index = items.value.findIndex((item) => item.id === productId)
    // index: 0 ~ n-1 代表有這件商品
    if (index > -1) {
      // 先抓到該商品的相關資訊
      const item = items.value[index]
      // 恢復商品庫存 把移除的數量都加回到商品列表庫存中
      for (let i = 0; i < item.quantity; i++) {
        productStore.increaseInventory(productId)
      }
      // splice(從哪個位置起算，刪掉陣列中的幾個item物件)
      items.value.splice(index, 1)
    }
  }

  // 更新購物車商品數量 在ShoppingCart.vue中會呼叫
  function updateQuantity(productId, quantity) {
    const item = items.value.find((item) => item.id === productId)
    if (item) {
      // item.quantity是已購買數量 所以 目前庫存 = 初始庫存 - 已購買數量???? 
      const diff = quantity - item.quantity
      item.quantity = quantity

      // 根據數量變化更新庫存
      if (diff > 0) {
        for (let i = 0; i < diff; i++) {
          productStore.decreaseInventory(productId)
        }
      } else {
        for (let i = 0; i < -diff; i++) {
          productStore.increaseInventory(productId)
        }
      }
    }
  }

  // 清空購物車
  function clearCart() {
    // 恢復所有商品庫存
    items.value.forEach((item) => {
      for (let i = 0; i < item.quantity; i++) {
        productStore.increaseInventory(item.id)
      }
    })
    items.value = []
  }

  return {
    items,
    total,
    totalItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  }
})
