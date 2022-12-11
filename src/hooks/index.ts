import { onMounted } from "vue";

type Options = {
  el: string;
};

// 这个hook实现的功能为将图片转为base64格式
export default function (options: Options): Promise<{ baseUrl: string }> {
  return new Promise((resolve) => {
    onMounted(() => {
      // 获取节点元素
      let img: HTMLImageElement = document.querySelector(
        options.el
      ) as HTMLImageElement;
      // 在图片加载完毕之后传入图片，不然会导致base64解析错误
      img.onload = () => {
        resolve({
          baseUrl: base64(img),
        });
      };
    });

    // 将图片转为base64格式
    const base64 = (el: HTMLImageElement) => {
      // 这里通过canvas来实现图片转base64格式
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = el.width;
      canvas.height = el.height;
      // 根据图片的大小画
      ctx?.drawImage(el, 0, 0, canvas.width, canvas.height);
      return canvas.toDataURL("image/jpg");
    };
  });
}
