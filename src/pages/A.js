import Link from 'next/link'

export default () => (
  <>
    <div>A page</div>
    <Link href="/">
      <a>
        <span>这里返回首页</span>
        <span>点这里也返回首页</span>
      </a>
    </Link>
  </>
)