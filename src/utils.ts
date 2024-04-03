export const initialItems = new Array(29_999_999).fill(0).map((_, index) => {
  return {
    id: index,
    isSelected: index === 29_999_998,
  }
})
