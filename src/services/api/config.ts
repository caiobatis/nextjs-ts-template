const config = {
  api: {
    baseURL: process.env.API_BASE_URL,
    headers: {
      contentType: process.env.API_HEADERS_CONTENT_TYPE
    },
    timeout: 80000
  }
}

export default config
