export const checkContentNotFound = (page: ComputedRef<any>) => {
  if (page.value) return

  if (import.meta.server) {
    const event = useRequestEvent()
    if (event) {
      setResponseStatus(event, 404)
    }
  }

  throw createError({
    fatal: true,
    statusCode: 404,
    message: 'Content not found',
  })
}
