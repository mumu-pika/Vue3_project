type NameList = {
  name: string
}

export const axios = (url: string): Promise<NameList[]> => {
  return new Promise((resolve) => {
    let xhr: XMLHttpRequest = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.send()
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status == 200) {
        // 这里进行一个延迟处理，模拟真实请求，真实请求是需要时间的
        setTimeout(() => {
          resolve(JSON.parse(xhr.responseText))
        }, 2000)
      }
    }
  })
}
