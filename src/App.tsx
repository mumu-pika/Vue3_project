import { ref } from "vue";

let v = ref<string>("pika");
let flag = true;

let Arr = [1, 2, 3, 4, 5];

type Props = {
  title: string;
};

const renderDom = (props: Props, ctx: any) => {
  return (
    <div>
      <div>hello tsx</div>
      <div>{props.title}</div>
      <input v-model={v.value} type="text" />
      <div v-show={flag}>和文字一道{v.value}</div>
      <div v-show={!flag}>阎魔</div>
      {Arr.map((v) => {
        return <div onClick={clickTap.bind(this, ctx)}>no.{v}</div>;
      })}
    </div>
  );
};

const clickTap = (ctx: any) => {
  ctx.emit("on-click", "12345");
};

export default renderDom;
